import { v4 as uuid } from "uuid";
import { SPin } from "../components/SPin";
export class circuit {
  namik: string = "";

  Pins: { [key: string]: SPin };
  gateID: string;
  constructor(pins: { [key: string]: SPin }) {
    this.Pins = pins;
    this.gateID = uuid();
  }
  Exec() {}
  setNamik(nai: string) {
    this.namik = nai;
  }
  connect(a: SPin, b: SPin, el: circuit) {
    a.addPin(el, b);
  }
}
