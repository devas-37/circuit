import { Komponent } from "./Komponent";
import {
  PINTYPE,
  QUTB,
  KUCHLANISH,
  WIRESTATE,
  TOOLTYPE,
  POSITION,
} from "./Enums";
import { v4 as uuid } from "uuid";
import { Wire } from "./Wire";
import { XOR } from "../Tools/Xor";
import { AND } from "../Tools/And";
import { OR } from "../Tools/Or";
import { SEGMENT7 } from "../Tools/Segment7";

interface CHILD {
  komponent: Komponent;
  pins: Array<Pin>;
}
interface CHILDS {
  [name: string]: CHILD;
}

export class Pin {
  private name: string = null;
  private activePin: string = null;
  public Pins: CHILDS = {}; // Shu pinga ulangan komponenta
  public PinType: PINTYPE = PINTYPE.NEYTRAL;
  public Wires: Array<Wire> = [];
  public state: KUCHLANISH = KUCHLANISH.PAST;
  public Qutb: QUTB = QUTB.MANFIY; //Hozircha zarur emas
  public position: POSITION;
  public pinContainer: HTMLElement;
  public parentElement: Komponent;
  pinId: string;
  constructor(
    name: string,
    pinType: PINTYPE,
    position: POSITION = POSITION.LEFT
  ) {
    this.pinId = uuid();
    this.PinType = pinType;
    this.name = name;
    this.parentElement;
    this.position = position;
    this.pinContainer = document.createElement("div");
    this.pinContainer.classList.add("elpin");
    this.pinContainer.onmousedown = (e) => {
      e.stopPropagation();
      let el = e.target as HTMLDivElement;
      let ref = this.mouseMove.bind(this);
      let refUp = (e: MouseEvent) => {
        console.log((e.target as HTMLElement).className);
        if ((e.target as HTMLElement).className !== "elpin") {
        }
        document.removeEventListener("mousemove", ref);
        document.removeEventListener("mouseup", refUp);
      };
      document.addEventListener("mousemove", ref);
      document.addEventListener("mouseup", refUp);
    };
    this.pinContainer.onmouseup = () => {};
  }

  getPos() {
    let pos = this.pinContainer.getBoundingClientRect();
    return {
      x: pos.left + pos.width / 2,
      y: pos.top + pos.height / 2,
    };
  }
  mouseMove(e: MouseEvent) {}
  setParent(parent: Komponent) {
    this.parentElement = parent;
  }
  Write(kuchlanish: KUCHLANISH) {
    if (kuchlanish) {
      this.Wires.forEach((wire) => {
        wire.setState(WIRESTATE.ON);
      });
    } else {
      this.Wires.forEach((wire) => {
        wire.setState(WIRESTATE.OFF);
      });
    }
    this.state = kuchlanish;
    for (const key in this.Pins) {
      this.Pins[key].pins.forEach((e: Pin) => {
        e.Write(kuchlanish);
      });
      this.Pins[key].komponent.Fire();
    }
  }
  addPin(komponent: Komponent = null, pinName: Pin = null) {
    let a = komponent.element;
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
  removeWire(name: string) {
    this.Wires = this.Wires.filter((wire) => wire.name !== name);
  }
  getName() {
    return this.name;
  }
  getComponents() {
    let buf = [];
    for (const key in this.Pins) {
      buf.push(this.Pins[key].komponent);
    }
    return buf;
  }
}
