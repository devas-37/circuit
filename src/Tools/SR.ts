import { KUCHLANISH, PINTYPE, POSITION, TOOLTYPE } from "../components/Enums";
import { Komponent } from "../components/Komponent";
import { Pin } from "../components/Pin";

export class SR extends Komponent {
  SRType: "LATCH" | "TRIGGER";
  constructor(type: "LATCH" | "TRIGGER" = "LATCH") {
    super("", TOOLTYPE.SRLATCH);
    let addon =
      type == "LATCH" ? {} : { B: new Pin("B", PINTYPE.KIRISH, null, "CLK") };
    this.SRType = type;
    this.setPins({
      A: new Pin("A", PINTYPE.KIRISH, null, "S"),
      ...addon,
      C: new Pin("C", PINTYPE.KIRISH, null, "R"),
      D: new Pin("D", PINTYPE.CHIQISH, POSITION.RIGHT, "Q"),
      E: new Pin("E", PINTYPE.CHIQISH, POSITION.RIGHT, "Q'"),
    });
    this.setSize({
      width: 80,
      height: 72,
    });
    this.Pins["E"].state = KUCHLANISH.YUQORI;
  }
  Fire(): void {
    if (this.SRType == "LATCH") this.Latch();
    else this.Trigger();
  }
  Trigger() {
    let invalid = this.Pins["A"].state && this.Pins["C"].state;
    if (this.Pins["B"].state == KUCHLANISH.YUQORI) {
      if (!invalid) {
        this.Pins["D"].Write(this.Pins["A"].state);
        this.Pins["E"].Write(this.Pins["C"].state);
      } else {
        this.Pins["D"].Write(KUCHLANISH.PAST);
        this.Pins["E"].Write(KUCHLANISH.PAST);
      }
    }
  }
  Latch() {
    let invalid = this.Pins["A"].state && this.Pins["C"].state;
    if (!invalid) {
      if (!invalid) {
        this.Pins["D"].Write(this.Pins["A"].state);
        this.Pins["E"].Write(this.Pins["C"].state);
      } else {
        this.Pins["D"].Write(KUCHLANISH.PAST);
        this.Pins["E"].Write(KUCHLANISH.PAST);
      }
    }
  }
}
