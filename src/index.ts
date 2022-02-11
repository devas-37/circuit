import { TOOLTYPE, PINTYPE, KUCHLANISH } from "./components/Enums";
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
let btn = new Button();
let seg = new SEGMENT7();
let sw = new Switch();
btn.Pins["A"].addPin(seg, seg.Pins.A);
sw.Pins["A"].addPin(seg, seg.Pins.B);
