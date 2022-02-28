import { WIRESTATE } from "./Enums";

import { v4 as uuid } from "uuid";
import { IConnector, IPoint, IPointer } from "./Interfaces";
import { createSVG, generatePathData, getId } from "../utils/index";
import { Connnector } from "./Connector";

export class Wire {
  name: string = "";
  state: WIRESTATE = WIRESTATE.ON;
  wireId: string;
  wirePath: SVGElement;
  startPos: IPoint = { x: null, y: null };
  stopPos: IPoint = { x: null, y: null };
  startPath: IPointer;
  stopPath: IPointer;
  path: SVGElement;
  pathContainer: SVGElement | HTMLElement;
  connectors: IConnector = {};
  push: boolean = false;

  id1: { isset: boolean; attr?: string };
  id2: { isset: boolean; attr?: string };
  activePath: SVGElement;
  constructor() {
    this.wireId = uuid();
    this.pathContainer = createSVG("svg");
    this.pathContainer.classList.add("svg-wire");
    // this.pathContainer.addEventListener("click", (e) => {
    //   if (this.pathContainer.classList.contains("selected-path")) {
    //     this.pathContainer.classList.remove("selected-path");
    //   } else {
    //     this.pathContainer.classList.add("selected-path");
    //   }
    // });
    this.path = createSVG("path");
    this.path.classList.add("svg-path");
    this.pathContainer.appendChild(this.path);
    getId("root").appendChild(this.pathContainer);
    this.addEvent(this.path);
  }
  addEvent(path: SVGElement) {
    let move = this.mouseMove.bind(this);
    let v = this;
    let remove = () => {
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mouseup", remove);
    };
    path.addEventListener("mousedown", () => {
      v.push = false;
      document.addEventListener("mousemove", move);
      document.addEventListener("mouseup", remove);
    });
    path.addEventListener("mouseout", () => {
      remove();
    });
  }
  mouseMove(e: MouseEvent) {
    this.activePath = e.target as SVGElement;
    if (!this.push) {
      let u1 = this.getAttr(this.activePath, "c1");
      let u2 = this.getAttr(this.activePath, "c2");
      this.id1 = u1;
      this.id2 = u2;
      let c = new Connnector({ x: e.clientX, y: e.clientY }, this);
      let path;

      if (this.path) {
        let p1 = this.generatePath({ c2: c.connectorId }),
          p2 = this.generatePath({ c1: c.connectorId });
        this.startPath = {
          path: p1,
          uuid: c.connectorId,
        };
        this.stopPath = {
          path: p2,
          uuid: c.connectorId,
        };
        path = {
          path1: p1,
          path2: p2,
        };
      } else {
        if (u1.isset && u2.isset) {
          let p1 = this.generatePath({ c1: u1.attr, c2: c.connectorId });
          let p2 = this.generatePath({ c1: c.connectorId, c2: u2.attr });
          this.connectors[u1.attr].path2 = p1;
          this.connectors[u2.attr].path1 = p2;
          path = {
            path1: p1,
            path2: p2,
          };
        } else if (u1.isset) {
          let p1 = this.generatePath({ c1: u1.attr, c2: c.connectorId }),
            p2 = this.generatePath({ c1: c.connectorId });
          this.stopPath = {
            path: p2,
            uuid: c.connectorId,
          };
          this.connectors[u1.attr].path2 = p1;
          path = {
            path1: p1,
            path2: p2,
          };
        } else if (u2.isset) {
          let p1 = this.generatePath({ c2: c.connectorId }),
            p2 = this.generatePath({ c1: c.connectorId, c2: u2.attr });
          this.startPath = {
            path: p1,
            uuid: c.connectorId,
          };
          this.connectors[u2.attr].path1 = p2;
          path = {
            path1: p1,
            path2: p2,
          };
        }
      }
      this.connectors[c.connectorId] = {
        ...path,
        point: c.getPos(),
        circle: c.circle,
      };
      // if (u1.isset)
      //   this.connectors[u1.attr].path1 = this.connectors[c.connectorId].path2;
      // if (u2.isset)
      //   this.connectors[u2.attr].path2 = this.connectors[c.connectorId].path1;
      this.push = true;
      this.drawPath(c.connectorId);
      if (this.isFirst) {
        if (this.path !== null) {
          this.pathContainer.removeChild(this.path);
          this.path = null;
        } else {
          this.pathContainer.removeChild(this.activePath);
        }
      }
    }
  }
  moveConnector(uuid: string, point: IPoint, connector: Connnector) {
    if (point.x > this.startPos.x - 5 && point.x < this.startPos.x + 5) {
      point.x = this.startPos.x;
    }
    if (point.y > this.startPos.y - 10 && point.y < this.startPos.y + 10) {
      point.y = this.startPos.y;
    }
    if (point.x > this.stopPos.x - 5 && point.x < this.stopPos.x + 5) {
      point.x = this.stopPos.x;
    }
    if (point.y > this.stopPos.y - 10 && point.y < this.stopPos.y + 10) {
      point.y = this.stopPos.y;
    }
    Object.keys(this.connectors).forEach((id) => {
      if (uuid !== id) {
        if (
          point.x > this.connectors[id].point.x - 10 &&
          point.x < this.connectors[id].point.x + 10
        ) {
          point.x = this.connectors[id].point.x;
        }
        if (
          point.y > this.connectors[id].point.y - 10 &&
          point.y < this.connectors[id].point.y + 10
        ) {
          point.y = this.connectors[id].point.y;
        }
      }
    });
    this.connectors[uuid].point = point;
    connector.setPos(point);
    this.updatePaths(uuid);
  }
  updatePath() {
    if (this.path)
      this.path.setAttribute(
        "d",
        generatePathData(
          this.startPos.x ? this.startPos : this.stopPos,
          this.stopPos.x ? this.stopPos : this.startPos
        )
      );
    else {
      this.startPath.path.setAttribute(
        "d",
        generatePathData(
          this.startPos,
          this.connectors[this.startPath.uuid].point
        )
      );
      this.stopPath.path.setAttribute(
        "d",
        generatePathData(
          this.connectors[this.stopPath.uuid].point,
          this.stopPos
        )
      );
    }
  }
  drawPath(uuid: string) {
    let u1 = this.id1;
    let u2 = this.id2;
    this.connectors[uuid].path1.setAttribute(
      "d",
      generatePathData(
        u1.isset ? this.connectors[u1.attr].point : this.startPos,
        this.connectors[uuid].point
      )
    );
    this.connectors[uuid].path2.setAttribute(
      "d",
      generatePathData(
        this.connectors[uuid].point,
        u2.isset ? this.connectors[u2.attr].point : this.stopPos
      )
    );
    this.pushPath(uuid);
  }
  updatePaths(uuid: string) {
    let u1 = this.getAttr(this.connectors[uuid].path1, "c1");
    let u2 = this.getAttr(this.connectors[uuid].path2, "c2");
    this.connectors[uuid].path1.setAttribute(
      "d",
      generatePathData(
        u1.isset ? this.connectors[u1.attr].point : this.startPos,
        this.connectors[uuid].point
      )
    );
    this.connectors[uuid].path2.setAttribute(
      "d",
      generatePathData(
        this.connectors[uuid].point,
        u2.isset ? this.connectors[u2.attr].point : this.stopPos
      )
    );
  }
  isFirst() {
    return Object.keys(this.connectors).length <= 1;
  }
  pushPath(uuid: string) {
    this.pathContainer.insertAdjacentElement(
      "afterbegin",
      this.connectors[uuid].path2
    );
    this.pathContainer.insertAdjacentElement(
      "afterbegin",
      this.connectors[uuid].path1
    );
  }
  getAttr(path: SVGElement, name: string) {
    if (path.hasAttribute(name))
      return {
        isset: true,
        attr: path.getAttribute(name),
      };
    return {
      isset: false,
    };
  }

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
    if (state == WIRESTATE.ON) {
      this.pathContainer.style.stroke = "#FF5D5D";
    } else {
      this.pathContainer.style.stroke = "#1B4752";
    }
  }
  getState() {
    return this.state;
  }
  generatePath(obj: { [key: string]: string } = null) {
    let path = createSVG("path");
    path.classList.add("svg-path");
    this.addEvent(path);
    if (obj) {
      Object.keys(obj).forEach((key) => {
        path.setAttribute(key, obj[key]);
      });
    }
    return path;
  }
}
