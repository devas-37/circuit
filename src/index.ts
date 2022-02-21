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
let sw = new Switch();
let seg = new LEDArray();
