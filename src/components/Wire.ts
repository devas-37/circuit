import { WIRESTATE } from "./Enums";

import { v4 as uuid } from "uuid";
import { IPoint } from "./Interfaces";
import { createSVG, generatePathData, getId } from "../utils/index";
import { Connnector } from "./Connector";

export class Wire {
  name: string = "";
  state: WIRESTATE = WIRESTATE.ON;
  wireId: string;
  wirePath: SVGElement;
  startPos: IPoint = { x: null, y: null };
  stopPos: IPoint = { x: null, y: null };
  path: SVGElement | HTMLElement;
  pathContainer: SVGElement | HTMLElement;
  points: Connnector[] = [];
  push: boolean = false;
  constructor() {
    this.wireId = uuid();
    this.pathContainer = createSVG("svg");
    this.pathContainer.classList.add("svg-wire");
    this.path = createSVG("path");
    this.path.classList.add("svg-path");
    this.pathContainer.appendChild(this.path);
    getId("root").appendChild(this.pathContainer);
    let move = this.mouseMove.bind(this);
    let v = this;
    let remove = () => {
      v.push = false;
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mouseup", remove);
    };
    this.path.addEventListener("mousedown", () => {
      document.addEventListener("mousemove", move);
      document.addEventListener("mouseup", remove);
    });
    this.path.addEventListener("mouseout", () => {
      remove();
    });
  }

  mouseMove(e: MouseEvent) {
    if (!this.push) {
      if (!this.points.length) {
        this.pathContainer.removeChild(this.path);
        this.path = null;
      }
      this.points.push(new Connnector({ x: e.clientX, y: e.clientY }, this));

      this.push = true;
    }
  }

  updatePath() {
    this.path.setAttribute(
      "d",
      generatePathData(
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
