import { TOOLTYPE, PINTYPE, KUCHLANISH } from "./components/Enums";
import { Komponent } from "./components/Komponent";
import {
  OR,
  AND,
  NOT,
  Battery,
  SEGMENT7,
  Buffer,
  TriState,
  Button,
  Switch,
} from "./Tools/index";
let elements: Komponent[] = [];
setTimeout(() => {
  elements.push(new Switch());
  elements.push(new SEGMENT7());
}, 1);
