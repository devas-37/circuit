import { TOOLTYPE, PINTYPE, POSITION, STYLES } from "./Enums";
import { Pin } from "./Pin";
import { v4 as uuid } from "uuid";
type Element = HTMLElement | SVGElement;
let m = 5;

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

  constructor(el: string, type: TOOLTYPE = null) {
    this.uuid = uuid();
    if (type) this.type = type;
    this.element = el;
    this.canvas = document.getElementById("root");
    this.parent = this.elt("div");
    this;
    this.parent.onmousedown = this.parentMouseDown.bind(this);
    this.parent.classList.add(STYLES.AND, STYLES.BORDER, STYLES.FLEX);
    let textNode = this.elt("span");
    textNode.innerHTML = this.element;
    this.parent.appendChild(textNode);
    this.leftPins = this.elt("div");
    this.rightPins = this.elt("div");
    this.topPins = this.elt("div");
    this.bottomPins = this.elt("div");
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
      x: e.clientX,
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

  rootMouseMove(e: MouseEvent) {
    if (this.move) {
      this.parent.style.top =
        this.point.top + (e.clientY - this.point.y) + "px";
      this.parent.style.left =
        this.point.left + (e.clientX - this.point.x) + "px";
    }
  }

  setPins(pins: { [key: string]: Pin }) {
    Object.keys(pins).map((pin) => {
      pins[pin].setParent(this);
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
  elt(name: string, ns: boolean = false): Element {
    return ns
      ? document.createElementNS("http://www.w3.org/2000/svg", name)
      : document.createElement(name);
  }

  render() {}
  Fire() {
    console.log("Fire on komponent bilan fires");
  }
}
