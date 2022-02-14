import { KUCHLANISH, PINTYPE, POSITION, TOOLTYPE } from "../components/Enums";
import { Komponent } from "../components/Komponent";
import { Pin } from "../components/Pin";

export class Button extends Komponent {
  Size = {
    width: 40,
    height: 32,
  };
  Location = {
    left: 150,
    top: 250,
  };
  constructor() {
    super("", TOOLTYPE.BUTTON);
    this.setPins({
      A: new Pin("A", PINTYPE.CHIQISH, POSITION.RIGHT),
    });
    this.setSize(this.Size);
    let btn = this.elt("div");
    btn.classList.add("buttonELBtn");
    this.parent.style.left = this.Location.left + "px";
    this.parent.style.top = this.Location.top + "px";
    this.parent.appendChild(btn);
    let ref = () => {
      this.Pins["A"].Write(KUCHLANISH.PAST);
    };
    btn.onmousedown = (e) => {
      btn.addEventListener("mouseout", ref);
      this.Pins["A"].Write(KUCHLANISH.YUQORI);
    };
    btn.onmouseup = () => {
      btn.removeEventListener("mouseout", ref);
      this.Pins["A"].Write(KUCHLANISH.PAST);
    };
    btn.onmousemove = () => {
      btn.removeEventListener("mouseout", ref);
    };
  }
}
