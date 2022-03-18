import { PINTYPE, POSITION, TOOLTYPE, WIRESTATE } from "../components/Enums";
import { Komponent } from "../components/Komponent";
import { Pin } from "../components/Pin";
import { createEl } from "../utils/index";

export class Switch extends Komponent {
  Size = {
    width: 40,
    height: 20,
  };
  state = WIRESTATE.OFF;
  constructor() {
    super("", TOOLTYPE.SWITCH);
    this.setPins({
      A: new Pin("A", PINTYPE.CHIQISH, POSITION.RIGHT),
    });
    this.setSize(this.Size);
    let swContainer = createEl("div");
    swContainer.classList.add("actionBtn");
    let actionContainer = createEl("div");
    actionContainer.appendChild(swContainer);
    actionContainer.classList.add("actionContainer");
    this.parent.appendChild(actionContainer);
    actionContainer.onclick = () => {
      if (this.state == 1) {
        swContainer.classList.remove("actionON");
        swContainer.classList.add("actionOFF");
        this.state = WIRESTATE.OFF;
        this.Pins.A.Write(false);
      } else {
        swContainer.classList.add("actionON");
        swContainer.classList.remove("actionOFF");
        this.state = WIRESTATE.ON;
        this.Pins.A.Write(true);
      }
    };
  }
}
