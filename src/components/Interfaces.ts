import { Connnector } from "./Connector";
import { PINTYPE } from "./Enums";
import { Komponent } from "./Komponent";
import { Pin } from "./Pin";
import { Wire } from "./Wire";
export interface IPoint {
  x: number;
  y: number;
}
export interface SEGMENT {
  LB?: SVGElement;
  LT?: SVGElement;
  T?: SVGElement;
  B?: SVGElement;
  RT?: SVGElement;
  RB?: SVGElement;
  M?: SVGElement;
}
export interface ILed {
  [key: string]: HTMLElement;
}
export interface PinPayload {
  pinType: PINTYPE;
  name: string;
  pos: {
    x: number;
    y: number;
  };
}
export interface IConnector {
  [key: string]: {
    point?: IPoint;
    path1?: SVGElement;
    path2?: SVGElement;
    circle?: SVGElement;
  };
}

export interface IPointer {
  path: SVGElement;
  uuid: string;
}

export interface IProjectSource {
  elements: {
    [key: string]: {
      name: string;
      uuid: string;
      position: IPoint;
    };
  };
  connects: {
    [key: string]: {
      [pinName: string]: {};
    };
  };
}
