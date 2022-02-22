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
  Gerts,
  LEDArray,
} from "./Tools/index";
import "./styles/index.sass";
import "./styles/gui.sass";
import "./assets/svg/hz.svg";
import { Wire } from "./components/Wire";
let sw = new Switch();
let sw1 = new Switch();

let seg = new LEDArray();
let and = new AND();

seg.setPos({ x: 600, y: 200 });
and.setPos({ x: 300, y: 150 });
sw.setPos({ x: 100, y: 100 });
sw1.setPos({ x: 100, y: 300 });
let wire = new Wire();
wire.setStartPos(and.Pins["C"].getPos());
wire.setStopPos(seg.Pins["G"].getPos());
sw1.Pins["A"].addPin(and, and.Pins["A"]);
sw.Pins["A"].addPin(and, and.Pins["B"]);
and.Pins["C"].addPin(seg, seg.Pins["A"]);
and.Pins["C"].addPin(seg, seg.Pins["G"]);
and.Pins["C"].addWire(wire);
seg.Pins["G"].addWire(wire);
