import { PINTYPE, POSITION, STYLES, TOOLTYPE } from "../components/Enums";
import { Komponent } from "../components/Komponent";
import { Pin } from "../components/Pin";

export class AND extends Komponent {
  size = {
    width: 45,
    height: 32,
  };

  constructor() {
    super("AND", TOOLTYPE.AND);
    this.setPins({
      A: new Pin("A", PINTYPE.KIRISH),
      B: new Pin("B", PINTYPE.KIRISH),
      C: new Pin("C", PINTYPE.CHIQISH, POSITION.RIGHT),
    });
  }

  Fire() {
    this.Pins.C.Write(this.Pins.A.state && this.Pins.B.state);
  }
}
