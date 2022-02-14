import { IPoint } from "./Interfaces";

export class Connnector {
  move: boolean;
  pos: IPoint;
  circle: SVGElement;
  element: SVGElement;
  constructor(pos: IPoint, el: SVGElement) {
    this.move = true;
    this.pos = pos;
    this.circle = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "circle"
    );
    this.circle.setAttribute("cx", pos.x.toString());
    this.circle.setAttribute("cy", pos.y.toString());
    this.circle.setAttribute("r", "16");
    this.circle.setAttribute("fill", "red");
    this.element = el;
    this.element.appendChild(this.circle);
  }
  setPos(pos: IPoint) {
    this.pos = pos;
  }
  getPos() {
    return this.pos;
  }
}
