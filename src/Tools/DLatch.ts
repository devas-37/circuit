import { PINTYPE, POSITION, TOOLTYPE } from "../components/Enums";
import { Komponent } from "../components/Komponent";
import { Pin } from "../components/Pin";

export class DLatch extends Komponent {
  DType: "LATCH" | "TRIGGER";
  constructor(type: "LATCH" | "TRIGGER" = "LATCH") {
    super("", TOOLTYPE.LATCH);

    this.DType = type;
    this.setPins({
      A: new Pin("A", PINTYPE.KIRISH, null, "D"),
      B: new Pin("B", PINTYPE.KIRISH, null, type == "LATCH" ? "E" : "CLK"),
      C: new Pin("C", PINTYPE.CHIQISH, POSITION.RIGHT, "Q"),
      D: new Pin("D", PINTYPE.CHIQISH, POSITION.RIGHT, "Q'"),
    });

    this.setSize({
      width: 80,
      height: 72,
    });
    this.Pins["D"].state = true;
  }

  Fire(): void {
    if (this.DType == "LATCH") this.Latch();
    else this.Trigger();
  }
  Latch() {}
  Trigger() {}
}
