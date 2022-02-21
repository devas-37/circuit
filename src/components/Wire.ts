import { WIRESTATE } from "./Enums";

import { v4 as uuid } from "uuid";
import { IPoint } from "./Interfaces";
import { createSVG, getId } from "../utils/index";

export class Wire {
  name: string = "";
  state: WIRESTATE = WIRESTATE.ON;
  wireId: string;
  wirePath: SVGElement;
  startPos: IPoint = { x: null, y: null };
  stopPos: IPoint = { x: null, y: null };
  path: SVGElement | HTMLElement;
  pathContainer: SVGElement | HTMLElement;
  constructor() {
    this.wireId = uuid();
    this.pathContainer = createSVG("svg");
    this.pathContainer.classList.add("svg-wire");
    this.path = createSVG("path");
    this.path.classList.add("svg-path");
    this.pathContainer.appendChild(this.path);
    getId("root").appendChild(this.pathContainer);
  }

  generatePathData(start: IPoint, stop: IPoint) {
    return `M${start.x},${start.y} C${start.x + (stop.x - start.x) / 2},${
      start.y
    } ${stop.x - (stop.x - start.x) / 2},${stop.y} ${stop.x}, ${stop.y}`;
  }
  updatePath() {
    this.path.setAttribute(
      "d",
      this.generatePathData(
        this.startPos.x ? this.startPos : this.stopPos,
        this.stopPos.x ? this.stopPos : this.startPos
      )
    );
  }
  /**
   *  Pathni qismlarga bo'lish uchun
   */
  addSegment() {}
  /**
   *
   * @param pos Pathning boshlang'ich pozitsiyasi
   */
  setStartPos(pos: IPoint) {
    this.startPos = pos;
    this.updatePath();
  }
  /**
   *
   * @param pos Pathning tugash pozitsiyasi
   */
  setStopPos(pos: IPoint) {
    this.stopPos = pos;
    this.updatePath();
  }
  setState(state: WIRESTATE = WIRESTATE.OFF) {
    this.state = state;
  }
  getState() {
    return this.state;
  }
}
