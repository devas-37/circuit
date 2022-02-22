import { TOOLTYPE, PINTYPE, POSITION, STYLES } from "./Enums";
import { Pin } from "./Pin";
import { v4 as uuid } from "uuid";
import { IPoint, PinPayload } from "./Interfaces";
import { Wire } from "./Wire";
import { createEl, getId } from "../utils/index";
type Element = HTMLElement | SVGElement;
let m = 5;
let wireBuffer: Wire;
let komponentBufer: Komponent;
let pinNameBufer: string;
export class Komponent {
  element: string = "";
  public type: TOOLTYPE = null;
  public canvas: Element;
  public parent: Element;
  public leftPins: Element;
  public rightPins: Element;
  public topPins: Element;
  public bottomPins: Element;
  uuid: string;
  move: boolean = false;
  point: { x: number; y: number; left: number; top: number };
  public Pins: { [key: string]: Pin };
  pinKeys: string[];
  constructor(el: string, type: TOOLTYPE = null) {
    this.uuid = uuid();
    if (type) this.type = type;
    this.element = el;
    this.canvas = getId("root");
    this.parent = createEl("div");
    this.parent.onmousedown = this.parentMouseDown.bind(this);
    this.parent.classList.add(STYLES.AND, STYLES.BORDER, STYLES.FLEX);
    let textNode = createEl("div");
    textNode.innerHTML = this.element;
    this.parent.appendChild(textNode);
    this.leftPins = createEl("div");
    this.rightPins = createEl("div");
    this.topPins = createEl("div");
    this.bottomPins = createEl("div");
    this.topPins.classList.add("v-flex", "pinC", "pinCTop");
    this.rightPins.classList.add("v-flex", "pinC", "pinCRight");
    this.leftPins.classList.add("v-flex", "pinC", "pinCLeft");
    this.bottomPins.classList.add("v-flex", "pinC", "pinCBottom");
    this.parent.appendChild(this.leftPins);
    this.parent.appendChild(this.rightPins);
    this.parent.appendChild(this.bottomPins);
    this.parent.appendChild(this.topPins);
    this.canvas.appendChild(this.parent);
  }

  parentMouseDown(e: MouseEvent) {
    e.stopPropagation();
    this.point = {
      x: e.clientX + 270,
      y: e.clientY,
      left: this.parent.getBoundingClientRect().left,
      top: this.parent.getBoundingClientRect().top,
    };
    this.move = true;
    let ref = this.rootMouseMove.bind(this);
    document.addEventListener("mousemove", ref, true);
    document.onmouseup = () => {
      this.move = false;
      document.removeEventListener("mousemove", ref, true);
    };
  }

  beginConnect(e: MouseEvent, payload: PinPayload) {
    wireBuffer = new Wire();
    if (payload.pinType == PINTYPE.CHIQISH) {
      wireBuffer.setStartPos(payload.pos);
    } else if (payload.pinType == PINTYPE.KIRISH) {
      wireBuffer.setStopPos(payload.pos);
    }
    komponentBufer = this;
    pinNameBufer = payload.name;
    this.Pins[payload.name].addWire(wireBuffer);
  }
  endConnect(e: MouseEvent, payload: PinPayload) {
    if (payload.pinType == PINTYPE.CHIQISH) {
      wireBuffer.setStartPos(payload.pos);
      this.Pins[payload.name].addPin(
        komponentBufer,
        komponentBufer.Pins[pinNameBufer]
      );
      komponentBufer.Pins[pinNameBufer].Write(this.Pins[payload.name].state);
      komponentBufer.Fire();
    } else if (payload.pinType == PINTYPE.KIRISH) {
      wireBuffer.setStopPos(payload.pos);
      komponentBufer.Pins[pinNameBufer].addPin(this, this.Pins[payload.name]);
      this.Pins[payload.name].Write(komponentBufer.Pins[pinNameBufer].state);
      this.Fire();
    }
    this.Pins[payload.name].addWire(wireBuffer);
  }
  moveConnect(e: MouseEvent, payload: PinPayload) {
    if (payload.pinType == PINTYPE.CHIQISH) {
      wireBuffer.setStopPos({ x: e.clientX - 270, y: e.clientY });
    } else if (payload.pinType == PINTYPE.KIRISH) {
      wireBuffer.setStartPos({ x: e.clientX - 270, y: e.clientY });
    }
  }
  rootMouseMove(e: MouseEvent) {
    if (this.move) {
      this.parent.style.top =
        this.point.top + (e.clientY - this.point.y) + "px";
      this.parent.style.left =
        this.point.left + (e.clientX - this.point.x) + "px";
    }
    this.pinKeys.forEach((key) => {
      this.Pins[key].updateWire();
    });
  }
  setPins(pins: { [key: string]: Pin }) {
    this.Pins = pins;
    this.pinKeys = Object.keys(pins);
    Object.keys(pins).map((pin) => {
      pins[pin].setParent(this);
      pins[pin].onBeginConnect = this.beginConnect.bind(this);
      pins[pin].onEndConnect = this.endConnect.bind(this);
      pins[pin].onMoveConnect = this.moveConnect.bind(this);
      switch (pins[pin].position) {
        case POSITION.LEFT: {
          this.leftPins.appendChild(pins[pin].pinContainer);
          break;
        }
        case POSITION.RIGHT: {
          this.rightPins.appendChild(pins[pin].pinContainer);
          break;
        }
        case POSITION.TOP: {
          this.topPins.appendChild(pins[pin].pinContainer);
          break;
        }
        case POSITION.BOTTOM: {
          this.bottomPins.appendChild(pins[pin].pinContainer);
          break;
        }
      }
    });
  }

  setSize(size: { width: number; height: number }) {
    this.parent.style.width = size.width + "px";
    this.parent.style.height = size.height + "px";
  }
  setPos(pos: IPoint) {
    this.parent.style.left = pos.x + "px";
    this.parent.style.top = pos.y + "px";
  }
  render() {}
  Fire() {
    console.log("Fire on komponent bilan fires");
  }
}
