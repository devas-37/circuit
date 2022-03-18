import { PINTYPE } from "../components/Enums";
import { SPin } from "../components/SPin";
import { circuit } from "./circuit";

export class not extends circuit {
  public Pins: { [key: string]: SPin };
  constructor() {
    super({
      A: new SPin("A", PINTYPE.KIRISH),
      B: new SPin("B", PINTYPE.CHIQISH),
    });

    this.Pins["B"].state = true;
  }
  Exec() {
    this.Pins["B"].Write(!this.Pins["A"].state);
  }
}
