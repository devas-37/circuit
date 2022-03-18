import { TOOLTYPE, PINTYPE } from "./components/Enums";
import { Komponent } from "./components/Komponent";
import {
  SR,
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
  PLM,
  RAM,
  PML,
  NAND,
  NOR,
  D,
  XOR,
  DLatch,
} from "./Tools/index";
import "./styles/index.sass";
import "./styles/gui.sass";
import "./assets/svg/hz.svg";
import { Wire } from "./components/Wire";
import { getId } from "./utils/index";
import { XNOR } from "./Tools/Xnor";
import { dlatch } from "./Gates/dlatch";
let tools = [];

let tb = getId("tb");
let toolbar = getId("toolbar");
let tbContainer = getId("tb-container");
tb.addEventListener("click", () => {
  if (tbContainer.classList.contains("tools-button-toggle"))
    tbContainer.classList.remove("tools-button-toggle");
  else tbContainer.classList.add("tools-button-toggle");
  if (toolbar.classList.contains("toolbar-open"))
    toolbar.classList.remove("toolbar-open");
  else toolbar.classList.add("toolbar-open");
});
let GlobalElements: { [key: string]: Komponent } = {};
let logics = getId("toolbar").querySelectorAll(".logic-gate");
logics.forEach((gate) => {
  let element = gate as HTMLElement;
  element.onclick = function () {
    let el: Komponent = null;
    switch (element.getAttribute("data-gateName")) {
      case "and": {
        el = new AND();
        break;
      }
      case "nand": {
        el = new NAND();
        break;
      }
      case "or": {
        el = new OR();
        break;
      }
      case "sw": {
        el = new Switch();
        break;
      }
      case "btn": {
        el = new Button();
        break;
      }
      case "hz": {
        el = new Gerts();
        break;
      }
      case "xor": {
        el = new XOR();
        break;
      }
      case "nor": {
        el = new NOR();
        break;
      }
      case "xnor": {
        el = new XNOR();
        break;
      }
      case "not": {
        el = new NOT();
        break;
      }
      case "segment": {
        el = new SEGMENT7();
        break;
      }
      case "ledC": {
        el = new LEDArray();
        break;
      }
      case "sL": {
        el = new SR();
        break;
      }
      case "sT": {
        el = new SR("TRIGGER");
        break;
      }
      case "plm": {
        el = new PLM();
        break;
      }
      case "dT": {
        el = new D("TRIGGER");
        break;
      }
      case "dL": {
        el = new DLatch();
        break;
      }
      case "buf": {
        el = new Buffer();
        break;
      }
    }
    GlobalElements[el.uuid] = el;
    saveProject();
  };
});
console.log(window);
export function saveProject() {}
let d = new dlatch();
console.log(d);
