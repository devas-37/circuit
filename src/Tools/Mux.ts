import { KUCHLANISH, PINTYPE, POSITION, TOOLTYPE } from "../components/Enums";
import { Komponent } from "../components/Komponent";
import { Pin } from "../components/Pin";

export class Mux extends Komponent {
  inputPins = ["A", "B", "C", "D"];
  constructor() {
    super("MUX", TOOLTYPE.MUX);

    this.setPins({
      A: new Pin("A", PINTYPE.KIRISH),
      B: new Pin("B", PINTYPE.KIRISH),
      C: new Pin("C", PINTYPE.KIRISH),
      D: new Pin("D", PINTYPE.KIRISH),
      E: new Pin("E", PINTYPE.KIRISH, POSITION.BOTTOM),
      F: new Pin("F", PINTYPE.KIRISH, POSITION.BOTTOM),
      G: new Pin("G", PINTYPE.CHIQISH, POSITION.RIGHT),
    });
    this.setSize({
      width: 64,
      height: 88,
    });
  }
  getPinState(name: string) {
    return this.Pins[name].state == KUCHLANISH.PAST ? 0 : 1;
  }
  Fire(): void {
    let b = `${this.getPinState("F")}${this.getPinState("E")}`;
    console.log(parseInt(b, 2));
    this.Pins["G"].Write(this.Pins[this.inputPins[parseInt(b, 2)]].state);
  }
}
