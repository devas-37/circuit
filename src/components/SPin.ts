import { PINTYPE, POSITION } from "./Enums";
import { v4 as uuid } from "uuid";
import { circuit } from "../Gates/circuit";
interface CHILDS {
  [name: string]: {
    id: circuit;
    pins: Array<SPin>;
  };
}

export class SPin {
  public name: string = null;
  public Pins: CHILDS = {};
  public PinType: PINTYPE = PINTYPE.NEYTRAL;
  public state: boolean = false;
  pinId: string;
  pos: POSITION = POSITION.LEFT;
  constructor(name: string, pinType: PINTYPE) {
    this.pinId = uuid();
    this.PinType = pinType;
    this.name = name;
  }
  Write(kuchlanish: boolean) {
    if (kuchlanish !== this.state) {
      this.state = kuchlanish;
      for (const key in this.Pins) {
        this.Pins[key].pins.forEach((pin) => {
          pin.Write(kuchlanish);
        });
        this.Pins[key].id.Exec();
      }
    }
  }
  setPos(pos: POSITION) {
    this.pos = pos;
  }
  addPin(komponent: circuit, pinName: SPin = null) {
    let a = komponent.gateID;
    if (this.Pins[a]) {
      this.Pins[a].pins.push(pinName);
    } else {
      this.Pins[a] = {
        id: komponent,
        pins: [pinName],
      };
    }
  }
}
