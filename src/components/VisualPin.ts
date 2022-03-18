import { Komponent } from "./Komponent";
import { PINTYPE, QUTB, WIRESTATE, TOOLTYPE, POSITION } from "./Enums";
import { v4 as uuid } from "uuid";
import { Wire } from "./Wire";
import { XOR } from "../Tools/Xor";
import { AND } from "../Tools/And";
import { OR } from "../Tools/Or";
import { SEGMENT7 } from "../Tools/Segment7";
import { PinPayload } from "./Interfaces";
import { createEl, diffLeft } from "../utils/index";
import { SPin } from "./SPin";

interface CHILDS {
  [name: string]: { komponent: Komponent; pins: Array<VPin> };
}

export class VPin {
  private name: string = null;
  public Pins: CHILDS = {};
  public PinType: PINTYPE = PINTYPE.NEYTRAL;
  public Wires: Array<Wire> = [];
  public state: boolean = false;
  public position: POSITION;
  public pinContainer: HTMLElement;
  public parentElement: Komponent;
  public onBeginConnect: (e: MouseEvent, payload: PinPayload) => {} | void;
  public onMoveConnect: (e: MouseEvent, payload: PinPayload) => {} | void;
  public onEndConnect: (e: MouseEvent, payload: PinPayload) => {} | void;
  pinId: string;
  inputPins: { [key: string]: VPin } = {};
  constructor(pin: SPin, pos: POSITION = POSITION.LEFT) {
    this.pinId = pin.pinId;
    this.PinType = pin.PinType;
    this.name = pin.name;
    this.parentElement;
    this.position = pos;
    this.pinContainer = createEl("div");
    this.pinContainer.classList.add(...["elpin", pos ? pos : "left"]);
    this.pinContainer.onmousedown = (e) => {
      e.stopPropagation();
      this.onBeginConnect(e, {
        pinType: this.PinType,
        name: this.name,
        pos: this.getPos(),
      });

      let ref = (e: MouseEvent) => {
        this.onMoveConnect(e, {
          pinType: this.PinType,
          name: this.name,
          pos: this.getPos(),
        });
      };

      let refUp = (e: MouseEvent) => {
        document.removeEventListener("mousemove", ref);
        document.removeEventListener("mouseup", refUp);
      };
      document.addEventListener("mousemove", ref);
      document.addEventListener("mouseup", refUp);
    };

    this.pinContainer.onmouseup = (e: MouseEvent) => {
      this.onEndConnect(e, {
        pinType: this.PinType,
        name: this.name,
        pos: this.getPos(),
      });
    };
  }

  getPos() {
    let pos = this.pinContainer.getBoundingClientRect();
    return {
      x: pos.left + pos.width / 2 - diffLeft,
      y: pos.top + pos.height / 2,
    };
  }

  updateWire() {
    this.Wires.forEach((wire) => {
      if (this.PinType == PINTYPE.CHIQISH) {
        wire.setStartPos(this.getPos());
      } else if (this.PinType == PINTYPE.KIRISH) {
        wire.setStopPos(this.getPos());
      }
    });
  }

  setParent(parent: Komponent) {
    this.parentElement = parent;
  }

  Write(kuchlanish: boolean) {
    if (kuchlanish !== this.state) {
      if (kuchlanish && this.PinType == PINTYPE.CHIQISH) {
        this.Wires.forEach((wire) => {
          wire.setState(kuchlanish);
        });
      } else if (this.PinType == PINTYPE.CHIQISH) {
        this.Wires.forEach((wire) => {
          wire.setState(false);
        });
      }
      this.state = kuchlanish;
      for (const key in this.Pins) {
        this.Pins[key].komponent.detectPinsStates();
        this.Pins[key].komponent.Fire();
      }
    }
  }

  addPin(komponent: Komponent = null, pinName: VPin = null) {
    let a = komponent.uuid;
    if (this.Pins[a]) {
      this.Pins[a].pins.push(pinName);
    } else {
      this.Pins[a] = {
        komponent: komponent,
        pins: [pinName],
      };
    }
  }

  addWire(wire: Wire = null) {
    this.Wires.push(wire);
  }
}
