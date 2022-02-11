import { KUCHLANISH, PINTYPE, POSITION, TOOLTYPE } from "../components/Enums";
import { Komponent } from "../components/Komponent";
import { Pin } from "../components/Pin";

export class Buffer extends Komponent {
  public pins = {
    A: new Pin("A", PINTYPE.KIRISH),
    C: new Pin("C", PINTYPE.CHIQISH, POSITION.RIGHT),
  };
  size = {
    width: 90,
    height: 32,
  };
  constructor() {
    super("BUFFER", TOOLTYPE.BUFFER);
    this.setPins(this.pins);
  }

  Fire() {
    if (this.pins.A.state & this.pins.C.state) {
      this.pins.C.Write(KUCHLANISH.YUQORI);
    } else {
      this.pins.C.Write(KUCHLANISH.PAST);
    }
  }
}
