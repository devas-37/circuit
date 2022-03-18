import { PINTYPE, POSITION, TOOLTYPE } from "../components/Enums";
import { Komponent } from "../components/Komponent";
import { Pin } from "../components/Pin";

export class Battery extends Komponent {
  constructor() {
    super("BATT", TOOLTYPE.BATTERY);
    this.setPins({
      OUT: new Pin("OUT", PINTYPE.CHIQISH, POSITION.RIGHT),
    });
    this.setSize({ width: 60, height: 30 });
  }

  setState(kuchlanish: boolean) {
    this.Pins.OUT.Write(kuchlanish);
  }
}
