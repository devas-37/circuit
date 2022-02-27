import { createSVG, generatePathData, getId } from "../utils/index";
import { IPoint } from "./Interfaces";
import { Wire } from "./Wire";
import { stringify, v4 as uuid } from "uuid";
export class Connnector {
  move: boolean = true;
  circle: SVGElement;
  element: SVGElement;
  point: IPoint;
  push: boolean = false;
  parentWire: Wire;
  pathBufer: SVGElement;
  connectorId: string;

  constructor(pos: IPoint, wire: Wire) {
    this.connectorId = uuid();
    this.move = true;
    this.parentWire = wire;
    this.point = pos;
    this.circle = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "circle"
    );
    this.circle.setAttribute("cx", (pos.x - 270).toString());
    this.circle.setAttribute("cy", pos.y.toString());
    this.circle.setAttribute("r", "5");
    this.circle.setAttribute("fill", "red");
    this.element = wire.pathContainer as SVGElement;
    this.element.appendChild(this.circle);
    let ref = this.mouseMove.bind(this);
    let remove = () => {
      document.removeEventListener("mousemove", ref);
      document.removeEventListener("mouseup", remove);
    };
    document.addEventListener("mousemove", ref);
    document.addEventListener("mouseup", remove);
    this.circle.addEventListener("mousedown", () => {
      document.addEventListener("mousemove", ref);
      document.addEventListener("mouseup", remove);
    });
  }
  mouseMove(e: MouseEvent) {
    this.setPos({ x: e.clientX, y: e.clientY });
    this.circle.setAttribute("cx", (e.clientX - 270).toString());
    this.circle.setAttribute("cy", e.clientY.toString());
    this.parentWire.moveConnector(
      this.connectorId,
      {
        x: e.clientX - 270,
        y: e.clientY,
      },
      this
    );
  }

  setPos(pos: IPoint) {
    this.point = pos;
    this.circle.setAttribute("cx", pos.x.toString());
    this.circle.setAttribute("cy", pos.y.toString());
  }
  getPos() {
    return { ...this.point, x: this.point.x - 270 };
  }
}
