import { PINTYPE } from "./Enums";
import { Komponent } from "./Komponent";
import { Pin } from "./Pin";
import { Wire } from "./Wire";

export interface SEGMENT {
  LB?: SVGElement;
  LT?: SVGElement;
  T?: SVGElement;
  B?: SVGElement;
  RT?: SVGElement;
  RB?: SVGElement;
  M?: SVGElement;
}

export interface PinPayload {
  pinType: PINTYPE;
  name: string;
  pin?: Pin;
  pos: {
    x: number;
    y: number;
  };
}
