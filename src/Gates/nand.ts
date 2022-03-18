import { PINTYPE } from "../components/Enums";
import { SPin } from "../components/SPin";
import { circuit } from "./circuit";

export class nand extends circuit {
  constructor() {
    super({
      A: new SPin("A", PINTYPE.KIRISH),
      B: new SPin("B", PINTYPE.KIRISH),
      C: new SPin("C", PINTYPE.CHIQISH),
    });
    this.Pins["C"].state = true;
  }

  Exec() {
    this.Pins["C"].Write(!(this.Pins["A"].state && this.Pins["B"].state));
    console.log(
      this.namik,
      ":>",
      this.Pins["A"].state,
      "&&",
      this.Pins["B"].state,
      ">>",
      this.Pins["C"].state
    );
  }
}
