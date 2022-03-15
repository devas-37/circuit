import {
  TOOLTYPE,
  PINTYPE,
  POSITION,
  STYLES,
  KUCHLANISH,
  WIRESTATE,
} from "./Enums";
import { Pin } from "./Pin";
import { v4 as uuid } from "uuid";
import { IPoint, PinPayload } from "./Interfaces";
import { Wire } from "./Wire";
import { createEl, diffLeft, getId } from "../utils/index";
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
  setting: boolean = false;
  uuid: string;
  move: boolean = false;
  point: { x: number; y: number; left: number; top: number };
  public Pins: { [key: string]: Pin };
  onSettingClick: () => {} | void;
  pinKeys: string[];
  settingBtn: HTMLElement;
  outputPins: string[] = [];
  constructor(el: string, type: TOOLTYPE = null, setting: boolean = false) {
    this.uuid = uuid();
    if (type) this.type = type;
    if (setting) {
      this.setting = setting;
    }
    window.oncontextmenu = function (e) {
      e.preventDefault();
    };
    this.element = el;
    this.canvas = getId("root");
    this.parent = createEl("div");
    this.parent.onmousedown = this.parentMouseDown.bind(this);
    this.parent.onclick = this.mouseClick.bind(this);
    this.parent.classList.add(STYLES.AND, STYLES.BORDER, STYLES.FLEX);
    let textNode = createEl("div");
    textNode.innerHTML = this.element;
    if (this.element) textNode.classList.add("circuit-label");
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

    this.parent.style.left = window.innerWidth / 2 + "px";
    this.parent.style.top = window.innerHeight / 2 + "px";
  }
  mouseClick() {
    if (this.setting) {
      getId("setting-button").onclick = this.onSettingClick;
      if (!getId("setting-button").classList.contains("show-setting-button")) {
        getId("setting-button").classList.add("show-setting-button");
      }
    } else {
      getId("setting-button").classList.remove("show-setting-button");
    }
  }
  parentMouseDown(e: MouseEvent) {
    e.stopPropagation();
    this.point = {
      x: e.clientX + diffLeft,
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
    wireBuffer.setState(this.Pins[payload.name].state);
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
      komponentBufer.Pins[pinNameBufer].inputPins[
        this.Pins[payload.name].pinId
      ] = this.Pins[payload.name];
      komponentBufer.detectPinsStates();
      komponentBufer.Fire();
      wireBuffer.setState(this.Pins[payload.name].state);
    } else if (payload.pinType == PINTYPE.KIRISH) {
      wireBuffer.setStopPos(payload.pos);
      komponentBufer.Pins[pinNameBufer].addPin(this, this.Pins[payload.name]);
      this.Pins[payload.name].inputPins[
        komponentBufer.Pins[pinNameBufer].pinId
      ] = komponentBufer.Pins[pinNameBufer];
      this.detectPinsStates();
      this.Fire();
    }
    this.Pins[payload.name].addWire(wireBuffer);
    komponentBufer = null;
  }
  moveConnect(e: MouseEvent, payload: PinPayload) {
    if (payload.pinType == PINTYPE.CHIQISH) {
      wireBuffer.setStopPos({ x: e.clientX - diffLeft, y: e.clientY });
    } else if (payload.pinType == PINTYPE.KIRISH) {
      wireBuffer.setStartPos({ x: e.clientX - diffLeft, y: e.clientY });
    }
  }
  detectPinsStates() {
    this.outputPins.forEach((key) => {
      let pin: Pin = this.Pins[key];
      pin.Write(
        Object.keys(pin.inputPins)
          .map((key) => pin.inputPins[key].state)
          .some((val) => val == KUCHLANISH.YUQORI)
          ? KUCHLANISH.YUQORI
          : KUCHLANISH.PAST
      );
    });
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
      if (pins[pin].PinType == PINTYPE.KIRISH) this.outputPins.push(pin);
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
  getElement() {
    return this.parent.cloneNode(true);
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
  Fire() {}
}
