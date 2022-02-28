import { PINTYPE, POSITION, TOOLTYPE } from "../components/Enums";
import { ILed } from "../components/Interfaces";
import { Komponent } from "../components/Komponent";
import { Pin } from "../components/Pin";
import { createEl } from "../utils/index";

export class LEDArray extends Komponent {
  letter1 = "ABCDEF".split("");
  letter2 = "GHIJKL".split("");
  leds: ILed = {};

  constructor() {
    super("", TOOLTYPE.LEDARRAY);

    this.setPins({
      A: new Pin("A", PINTYPE.KIRISH, POSITION.TOP),
      B: new Pin("B", PINTYPE.KIRISH, POSITION.TOP),
      C: new Pin("C", PINTYPE.KIRISH, POSITION.TOP),
      D: new Pin("D", PINTYPE.KIRISH, POSITION.TOP),
      E: new Pin("E", PINTYPE.KIRISH, POSITION.TOP),
      F: new Pin("F", PINTYPE.KIRISH, POSITION.TOP),
      G: new Pin("G", PINTYPE.KIRISH, POSITION.LEFT),
      H: new Pin("H", PINTYPE.KIRISH, POSITION.LEFT),
      I: new Pin("I", PINTYPE.KIRISH, POSITION.LEFT),
      J: new Pin("J", PINTYPE.KIRISH, POSITION.LEFT),
      K: new Pin("K", PINTYPE.KIRISH, POSITION.LEFT),
      L: new Pin("L", PINTYPE.KIRISH, POSITION.LEFT),
    });
    let ledContainer = createEl("div");
    ledContainer.classList.add("led-container");

    this.letter1.forEach((l) => {
      let container = createEl("div");
      this.letter2.forEach((k) => {
        let div = createEl("div");
        Object.assign(this.leds, {
          [l + k]: div,
        });
        container.appendChild(div);
      });
      ledContainer.appendChild(container);
    });
    this.setSize({
      width: 116,
      height: 121,
    });
    console.log(this.leds);
    this.parent.style.padding = "5px";
    this.parent.appendChild(ledContainer);
  }
  Fire() {
    this.letter1.forEach((l) => {
      this.letter2.forEach((k) => {
        this.leds[l + k].classList.remove("led-turn-on");
        if (this.Pins[l].state && this.Pins[k].state) {
          this.leds[l + k].classList.add("led-turn-on");
        }
      });
    });
  }
}
