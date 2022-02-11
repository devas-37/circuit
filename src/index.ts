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
let and = new AND();
let seg = new SEGMENT7();
let sw = new Switch();
let sw1 = new Switch();

sw.Pins["A"].addPin(and, and.Pins.A);
sw1.Pins["A"].addPin(and, and.Pins.B);
and.Pins.C.addPin(seg, seg.Pins.A);
