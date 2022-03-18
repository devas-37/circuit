import { PINTYPE, POSITION, TOOLTYPE } from "../components/Enums";
import { Komponent } from "../components/Komponent";
import { Pin } from "../components/Pin";

export class TriState extends Komponent {
  constructor() {
    super("TRISTATE", TOOLTYPE.TRISTATE);
    this.setPins({
      IN: new Pin("IN", PINTYPE.KIRISH),
      IN1: new Pin("IN", PINTYPE.KIRISH, POSITION.TOP),
      OUT: new Pin("OUT", PINTYPE.CHIQISH, POSITION.RIGHT),
    });
    this.setSize({ width: 80, height: 30 });
  }
  setState(kuchlanish: boolean) {
    this.Pins.OUT.Write(kuchlanish);
  }
}
