import { PINTYPE, POSITION, TOOLTYPE } from "../components/Enums";
import { Komponent } from "../components/Komponent";
import { Pin } from "../components/Pin";

export class SRLatch extends Komponent {
  constructor() {
    super("SRL", TOOLTYPE.SRLATCH);
    this.setPins({
      A: new Pin("A", PINTYPE.KIRISH, null, "S"),
      B: new Pin("B", PINTYPE.KIRISH, null, ">"),
      C: new Pin("C", PINTYPE.KIRISH, null, "R"),
      D: new Pin("D", PINTYPE.CHIQISH, POSITION.RIGHT, "Q"),
      E: new Pin("E", PINTYPE.CHIQISH, POSITION.RIGHT, "Q'"),
      G: new Pin("E", PINTYPE.CHIQISH, POSITION.BOTTOM, "CLR"),
      H: new Pin("E", PINTYPE.CHIQISH, POSITION.TOP, "PRE"),
    });
    this.setSize({
      width: 89,
      height: 72,
    });
  }
}
