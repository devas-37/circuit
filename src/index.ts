import { TOOLTYPE, PINTYPE, KUCHLANISH } from "./components/Enums";
import { Komponent } from "./components/Komponent";
import {
  SRLatch,
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
  Mux,
} from "./Tools/index";
import "./styles/index.sass";
import "./styles/gui.sass";
import "./assets/svg/hz.svg";
import { Wire } from "./components/Wire";
import { getId } from "./utils/index";
let tools = [];
let sr = new SRLatch();
sr.setPos({
  x: 200,
  y: 200,
});
// let and = new AND();
// let seg = new SEGMENT7();
// let seg1 = new LEDArray();
// let output = getId("output-all-tools");
// let seg1 = new SEGMENT7();

// let m = new Mux();
// // seg1.setPos({ x: 500, y: 200 });
// // hz.setPos({ x: 100, y: 100 });
// let w = new Wire();
// // w.setStartPos(hz.Pins["A"].getPos());
// // w.setStopPos(seg1.Pins["A"].getPos());
// // hz.Pins["A"].addPin(seg1, seg1.Pins["A"]);
// // seg1.Pins["A"].inputPins[seg1.Pins["A"].pinId] = hz.Pins["A"];
// // hz.Pins["A"].addWire(w);
// // seg1.Pins["A"].addWire(w);
// let sw = new Switch();
// let sw1 = new Switch();
// // let sw12 = new Switch();
// // // let or = new OR();
// // let btn = new Button();
// // let not = new NOT();
// let seg = new LEDArray();
// let and = new AND();
