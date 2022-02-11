import { WIRESTATE } from "./Enums";

import { v4 as uuid } from "uuid";

export class Wire {
  name: string = "";
  state: WIRESTATE = WIRESTATE.ON;
  wireId: string;
  wirePath: SVGElement;

  constructor() {
    this.wireId = uuid();
  }

  setState(state: WIRESTATE = WIRESTATE.OFF) {
    this.state = state;
  }

  getState() {
    return this.state;
  }
}
