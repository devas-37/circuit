import { createSVG, generatePathData, getId } from "../utils/index";
import { IPoint } from "./Interfaces";
import { Wire } from "./Wire";

export class Connnector {
  move: boolean = true;
  pos: IPoint;
  circle: SVGElement;
  element: SVGElement;
  start: IPoint;
  stop: IPoint;
  path1: SVGElement;
  path2: SVGElement;
  push: boolean = false;
  parentWire: Wire;
  pathBufer: SVGElement;
  constructor(
    pos: IPoint,
    wire: Wire,
    start: IPoint = undefined,
    stop: IPoint = undefined
  ) {
    this.move = true;
    this.parentWire = wire;
    this.pos = pos;
    this.start = start ? start : wire.startPos;
    this.stop = stop ? stop : wire.stopPos;
    this.circle = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "circle"
    );
    this.circle.setAttribute("cx", (pos.x - 270).toString());
    this.circle.setAttribute("cy", pos.y.toString());
    this.circle.setAttribute("r", "5");
    this.circle.setAttribute("fill", "red");
    this.element = wire.pathContainer as SVGElement;
    this.path1 = createSVG("path");
    this.path2 = createSVG("path");
    this.path1.classList.add("svg-path");
    this.path2.classList.add("svg-path");
    this.addEvent(this.path1);
    this.addEvent(this.path2);
    this.path1.setAttribute("d", generatePathData(this.start, this.getPos()));
    this.path2.setAttribute("d", generatePathData(this.getPos(), this.stop));
    this.element.appendChild(this.path1);
    this.element.appendChild(this.path2);
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
    this.path1.setAttribute("d", generatePathData(this.start, this.getPos()));
    this.path2.setAttribute("d", generatePathData(this.getPos(), this.stop));
  }
  addEvent(path: SVGElement) {
    let move = this.mouseMoveR.bind(this);
    let v = this;
    let remove = () => {
      v.push = false;
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mouseup", remove);
    };
    path.addEventListener("mousedown", () => {
      this.pathBufer = path;
      document.addEventListener("mousemove", move);
      document.addEventListener("mouseup", remove);
    });
    path.addEventListener("mouseout", () => {
      remove();
    });
  }
  mouseMoveR(e: MouseEvent) {
    if (!this.push) {
      if (!this.parentWire.points.length) {
        this.parentWire.pathContainer.removeChild(this.pathBufer);
        this.pathBufer = null;
      }
      this.parentWire.points.push(
        new Connnector(
          { x: e.clientX, y: e.clientY },
          this.parentWire,
          this.getPos(),
          this.stop
        )
      );

      this.push = true;
    }
  }
  setPos(pos: IPoint) {
    this.pos = pos;
  }
  getPos() {
    return { ...this.pos, x: this.pos.x - 270 };
  }
}
