import { TOOLTYPE } from "../components/Enums";
import { Komponent } from "../components/Komponent";

export class RGB extends Komponent {
  constructor() {
    super("", TOOLTYPE.RGBL);
  }
}
