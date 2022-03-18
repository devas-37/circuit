import { PINTYPE, POSITION, STYLES, TOOLTYPE } from "../components/Enums";
import { Komponent } from "../components/Komponent";
import { Pin } from "../components/Pin";

export class NAND extends Komponent {
  constructor() {
    super("NAND", TOOLTYPE.AND);
    this.setPins({
      A: new Pin("A", PINTYPE.KIRISH),
      B: new Pin("B", PINTYPE.KIRISH),
      C: new Pin("C", PINTYPE.CHIQISH, POSITION.RIGHT),
    });
    this.Pins["C"].state = true;
  }

  Fire() {
    this.Pins.C.Write(!(this.Pins.A.state && this.Pins.B.state));
  }
}
