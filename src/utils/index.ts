import { IPoint } from "../components/Interfaces";

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
