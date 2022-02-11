import { KUCHLANISH, PINTYPE, POSITION, TOOLTYPE } from "../components/Enums";
import { Komponent } from "../components/Komponent";
import { Pin } from "../components/Pin";

export class NOT extends Komponent {
  constructor() {
    super("NOT", TOOLTYPE.NOT);
    this.setPins({
      A: new Pin("A", PINTYPE.KIRISH),
      B: new Pin("B", PINTYPE.CHIQISH, POSITION.RIGHT),
    });
    this.setSize({ width: 60, height: 30 });
  }

  Fire() {
    this.Pins.B.Write(
      this.Pins.A.state != 0 ? KUCHLANISH.PAST : KUCHLANISH.YUQORI
    );
  }
}
