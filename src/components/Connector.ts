// import { Wire } from "./Wire";
// import { v4 as uuid } from "uuid";
// import { PINTYPE } from "./Enums";
// export class Connector {
//   svgContaner: SVGElement;
//   move: boolean = false;
//   constructor(name: string) {
//     this.svgContaner = document.createElementNS(
//       "http://www.w3.org/2000/svg",
//       "svg"
//     );
//     this.svgContaner.classList.add("svg-wire");
//     document.getElementById("root").appendChild(this.svgContaner);
//   }
//   draw() {
//     Object.keys(this.wires).forEach((uuid) => {
//       {
//         this.wires[uuid].path.setAttribute(
//           "d",
//           this.generatePathData(this.wires[uuid].w[uuid])
//         );
//         this.svgContaner.appendChild(this.wires[uuid].path);
//       }
//     });
//   }
//   generatePathData(t) {
//     return `M${wire.start.x},${wire.start.y} C${
//       wire.start.x + (wire.end.x - wire.start.x) / 2
//     },${wire.start.y} ${wire.end.x - (wire.end.x - wire.start.x) / 2},${
//       wire.end.y
//     } ${wire.end.x}, ${wire.end.y}`;
//   }
//   refer(uuid: string, pos: any, pinType: PINTYPE) {
//     console.log(pinType);
//     if (Object.keys(this.wires).length > 0) {
//       let obj = {};
//       obj[pinType == PINTYPE.KIRISH ? "end" : "start"] = {
//         x: pos.x,
//         y: pos.y,
//       };
//       this.wires[uuid].path.setAttribute(
//         "d",
//         this.generatePathData({
//           ...this.wires[uuid].w[uuid],
//           ...obj,
//         })
//       );
//     }
//   }
//   removeWire(uuid: string) {
//     this.wires[uuid].path.parentNode.removeChild(this.wires[uuid].path);
//     delete this.wires[uuid];
//   }
//   pushWire(wire: Wire) {
//     let path = document.createElementNS("http://www.w3.org/2000/svg", "path");
//     path.classList.add("svg-path");
//     this.wires[wire.startUuid] = {
//       w: {
//         [wire.startUuid]: wire.path,
//       },
//       path: path,
//     };
//     this.draw();
//   }

//   changePath(uuid: string, path: IWirePoint) {
//     this.wires[uuid].w[uuid] = path;
//     this.wires[uuid].path.setAttribute("d", this.generatePathData(path));
//   }
// }
