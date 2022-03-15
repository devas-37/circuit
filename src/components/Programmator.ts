import { Komponent } from "./Komponent";
import { v4 as uuid } from "uuid";
import { PROGRAMMATORTYPE } from "./Enums";
import { drawLines1, getId } from "../utils/index";
let helper = getId("helper-rect");
export class Programmator {
  uuid: string;
  type: PROGRAMMATORTYPE;
  container: HTMLCanvasElement;
  plmDialog: HTMLDivElement;
  onAndArrayChange: (data: { x: number; y: number }) => {} | void;
  onOrArrayChange: (data: { x: number; y: number }) => {} | void;
  private WIDTH = 408;
  private HEIGHT = 384;
  private SIZE = 24;
  private clickRef: any;
  private mouseEnterRef: any;
  private mouseOutRef: any;
  private mouseMoveRef: any;
  private hideRef: any;
  constructor(type: PROGRAMMATORTYPE) {
    this.uuid = uuid();
    this.type = type;
    this.container = getId("cells") as HTMLCanvasElement;
    this.plmDialog = getId("plm-dialog") as HTMLDivElement;
    this.clickRef = this.onCellClick.bind(this);
    this.mouseEnterRef = this.onMouseEnter.bind(this);
    this.mouseOutRef = this.onMouseLeave.bind(this);
    this.mouseMoveRef = this.onMouseMove.bind(this);
    this.hideRef = this.hide.bind(this);
  }
  private onMouseMove(e: MouseEvent) {
    let x = Math.floor((e.offsetX + this.SIZE) / this.SIZE),
      y = Math.floor(e.offsetY / this.SIZE);
    if (
      e.offsetX > 0 &&
      e.offsetX < this.WIDTH / 2 - 12 &&
      e.offsetY > 0 &&
      e.offsetY < this.HEIGHT
    ) {
      helper.style.left = x * this.SIZE + 5 + "px";
      helper.style.top = y * this.SIZE + 5 + "px";
    }
    if (
      e.offsetX > this.WIDTH / 2 + 12 &&
      e.offsetX < this.WIDTH &&
      e.offsetY > 0 &&
      e.offsetY < this.HEIGHT
    ) {
      helper.style.left = x * this.SIZE + 5 + "px";
      helper.style.top = y * this.SIZE + 5 + "px";
    }
  }
  private onMouseEnter() {
    getId("helper-rect").style.display = "block";
  }
  private onMouseLeave() {
    getId("helper-rect").style.display = "none";
  }
  private onCellClick(e: MouseEvent) {
    e.stopPropagation();
    let x = e.offsetX,
      y = e.offsetY;
    if (x > 0 && x < this.WIDTH / 2 - 12 && y > 0 && y < this.HEIGHT) {
      let i = Math.floor(x / this.SIZE);
      let j = Math.floor(y / this.SIZE);
      this.onAndArrayChange({ x: j, y: i });
    }
    if (x > this.WIDTH / 2 + 12 && x < this.WIDTH && y > 0 && y < this.HEIGHT) {
      let i = Math.floor(x / this.SIZE);
      let j = Math.floor(y / this.SIZE);
      this.onOrArrayChange({ x: j, y: i - 9 });
    }
  }
  show() {
    this.plmDialog.classList.add("dialog-show");
    this.container.addEventListener("click", this.clickRef);
    this.container.addEventListener("mouseenter", this.mouseEnterRef);
    this.container.addEventListener("mouseout", this.mouseOutRef);
    this.container.addEventListener("mousemove", this.mouseMoveRef);
    this.plmDialog.addEventListener("click", this.hideRef);
  }
  hide() {
    this.plmDialog.classList.remove("dialog-show");
    this.container.removeEventListener("click", this.clickRef);
    this.container.removeEventListener("mouseenter", this.mouseEnterRef);
    this.container.removeEventListener("mousemove", this.mouseMoveRef);
    this.container.removeEventListener("mouseout", this.mouseOutRef);
    this.plmDialog.removeEventListener("click", this.hideRef);
  }
  drawProgrammer(andArray: number[][], orArray: number[][]) {
    let ctx = this.container.getContext("2d");
    ctx.clearRect(0, 0, this.WIDTH, this.HEIGHT);
    ctx.beginPath();
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.translate(0.5, 0.5);
    ctx.strokeStyle = "silver";
    ctx.fillStyle = "#FF3249";
    for (let i = 1; i <= 8; i++) {
      let x = (i - 1) * this.SIZE;
      andArray[i - 1].forEach((byte, j) => {
        if (byte == 1) ctx.fillRect(j * this.SIZE, x, this.SIZE, this.SIZE);
      });
      andArray[i + 8 - 1].forEach((byte, j) => {
        if (byte == 1)
          ctx.fillRect(
            j * this.SIZE,
            x + this.HEIGHT / 2,
            this.SIZE,
            this.SIZE
          );
      });
      orArray[i - 1].forEach((byte, j) => {
        if (byte == 1)
          ctx.fillRect(
            j * this.SIZE + this.WIDTH / 2 + 12,
            x,
            this.SIZE,
            this.SIZE
          );
      });
      orArray[i + 8 - 1].forEach((byte, j) => {
        if (byte == 1)
          ctx.fillRect(
            j * this.SIZE + this.WIDTH / 2 + 12,
            x + this.WIDTH / 2 - 12,
            this.SIZE,
            this.SIZE
          );
      });
      drawLines1(ctx, (i - 1) * this.SIZE, this.WIDTH, this.HEIGHT, this.SIZE);
    }
    drawLines1(ctx, (9 - 1) * this.SIZE, this.WIDTH, this.HEIGHT, this.SIZE);
    ctx.stroke();
  }
}
