import { PINTYPE } from "../components/Enums";
import { SPin } from "../components/SPin";
import { circuit } from "./circuit";

export class buffer extends circuit {
  constructor() {
    super({
      A: new SPin("A", PINTYPE.KIRISH),
      B: new SPin("B", PINTYPE.CHIQISH),
    });
  }
  Exec() {
    this.Pins["C"].Write(this.Pins["A"].state);
  }
}
