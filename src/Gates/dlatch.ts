import { PINTYPE } from "../components/Enums";
import { SPin } from "../components/SPin";
import { and } from "./and";
import { circuit } from "./circuit";
import { nand } from "./nand";
import { or } from "./or";
import { dlatchData } from "../Integrals/dlatch.js";
import { generateTool } from "../utils/index";
export class dlatch extends circuit {
  Pins: { [key: string]: SPin };
  pr: { [name: string]: circuit } = {};
  constructor() {
    super({
      D: new SPin("D", PINTYPE.KIRISH),
      S: new SPin("S", PINTYPE.KIRISH),
      Q: new SPin("Q", PINTYPE.CHIQISH),
      "Q'": new SPin("Q'", PINTYPE.CHIQISH),
    });
    Object.keys(dlatchData.elements).forEach((name) => {
      this.pr[name] = generateTool(dlatchData.elements[name]);
      this.pr[name].setNamik(name);
    });
    Object.keys(dlatchData.connections).forEach((data) => {
      let namePin = data.split(":");
      dlatchData.connections[data].forEach((obj: any) => {
        obj.pins.forEach((name: string) => {
          if (namePin[0] == "!") {
            this.Pins[namePin[1]].addPin(
              this.pr[obj.name],
              this.pr[obj.name].Pins[name]
            );
            this.pr[obj.name].Pins[name].addPin(this, this.Pins[namePin[1]]);
            this.pr[obj.name].Pins[name].Write(this.Pins[namePin[1]].state);
          } else {
            this.pr[namePin[0]].Pins[namePin[1]].addPin(
              obj.name == "!" ? this : this.pr[obj.name],
              obj.name == "!" ? this.Pins[name] : this.pr[obj.name].Pins[name]
            );
            this.pr[obj.name].Pins[name].addPin(
              namePin[0] == "!" ? this : this.pr[namePin[0]],
              namePin[0] == "!"
                ? this.Pins[name]
                : this.pr[namePin[0]].Pins[namePin[1]]
            );
            this.pr[obj.name].Pins[name].Write(
              this.pr[namePin[0]].Pins[namePin[1]].state
            );
            this.pr[obj.name].Exec();
          }
        });
      });
    });
    this.Pins["S"].Write(true);
    this.Pins["D"].Write(true);

    // this.pr["p4"].Pins["C"].addPin(this, this.Pins["Q"]);
    // this.pr["p5"].Pins["C"].addPin(this, this.Pins["Q'"]);

    // console.log(this.pr["el1"].Pins["C"].state);
    // this.Pins["D"].Write(false);
    // console.log(this.pr["el1"].Pins["C"].state);
  }
}
