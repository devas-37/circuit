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
