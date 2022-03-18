import { PINTYPE, POSITION, TOOLTYPE } from "../components/Enums";
import { Komponent } from "../components/Komponent";
import { Pin } from "../components/Pin";

export class Gerts extends Komponent {
  state: boolean = false;
  constructor() {
    super("HZ", TOOLTYPE.GERTS);
    this.setPins({
      A: new Pin("A", PINTYPE.CHIQISH, POSITION.RIGHT),
    });
    this.setSize({
      width: 64,
      height: 30,
    });
    setInterval(this.Tick.bind(this), 1000);
  }
  Tick() {
    this.state = !this.state;
    this.Pins["A"].Write(this.state);
  }
}
