import { IPoint } from "../components/Interfaces";
import { and } from "../Gates/and";
import { buffer } from "../Gates/buffer";
import { circuit } from "../Gates/circuit";
import { dlatch } from "../Gates/dlatch";
import { nand } from "../Gates/nand";
import { nor } from "../Gates/nor";
import { not } from "../Gates/not";
import { or } from "../Gates/or";
import { xor } from "../Gates/xor";

export const getId = (name: string) => document.getElementById(name);
export const setAttr = (
  element: HTMLElement | SVGElement,
  attrObj: { [key: string]: string | number }
) => {
  Object.keys(attrObj).forEach((key) => {
    element.setAttribute(key, attrObj[key] as string);
  });
};
export const createSVG = (name: string) =>
  document.createElementNS("http://www.w3.org/2000/svg", name);

export const createEl = (name: string) => document.createElement(name);
export const generatePathData = (start: IPoint, stop: IPoint) => {
  return `M${start.x},${start.y} C${start.x + (stop.x - start.x) / 2},${
    start.y
  } ${stop.x - (stop.x - start.x) / 2},${stop.y} ${stop.x}, ${stop.y}`;
};
export const drawLines1 = (
  ctx: CanvasRenderingContext2D,
  d: number,
  width: number,
  height: number,
  size: number
) => {
  ctx.moveTo(0, d);
  ctx.lineTo(Math.round(width / 2 - size / 2), d);
  ctx.moveTo(Math.round(width / 2 + size / 2), d);
  ctx.lineTo(width, d);
  ctx.moveTo(0, d + Math.round(width / 2 + size / 2));
  ctx.lineTo(
    Math.round(width / 2 - size / 2),
    d + Math.round(width / 2 + size / 2)
  );
  ctx.moveTo(
    Math.round(width / 2 + size / 2),
    d + Math.round(width / 2 + size / 2)
  );
  ctx.lineTo(width, d + Math.round(width / 2 + size / 2));
  ctx.moveTo(d, 0);
  ctx.lineTo(d, height);
  ctx.moveTo(d + (width / 2 + size / 2), 0);
  ctx.lineTo(d + (width / 2 + size / 2), height);
};
export const generateTool = (name: string) => {
  switch (name) {
    case "nand":
      return new nand();
    case "and":
      return new and();
    case "or":
      return new or();
    case "nor":
      return new nor();
    case "xor":
      return new xor();
    case "not":
      return new not();
    case "buffer":
      return new buffer();
    case "dlatch":
      return new dlatch();
  }
};
export const diffLeft = 0;
export const diffTop = 0;
