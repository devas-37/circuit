import {
  PINTYPE,
  POSITION,
  PROGRAMMATORTYPE,
  TOOLTYPE,
} from "../components/Enums";
import { Komponent } from "../components/Komponent";
import { Pin } from "../components/Pin";
import { Programmator } from "../components/Programmator";
import { drawLines1, getId } from "../utils/index";

export class PML extends Komponent {
  canvas: HTMLCanvasElement;
  andM = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
  ];
  orM = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 1, 0],
    [0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 1, 0],
    [0, 0, 1, 0, 1, 0, 0, 0],
    [0, 0, 1, 0, 1, 0, 1, 0],
    [1, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 1, 0],
    [1, 0, 0, 0, 1, 0, 0, 0],
    [1, 0, 0, 0, 1, 0, 1, 0],
    [1, 0, 1, 0, 0, 0, 0, 0],
    [1, 0, 1, 0, 0, 0, 1, 0],
    [1, 0, 1, 0, 1, 0, 0, 0],
    [1, 0, 1, 0, 1, 0, 1, 0],
  ];
  cells: HTMLCanvasElement;
  programmator: Programmator;
  helper: HTMLDivElement;
  constructor() {
    super("", TOOLTYPE.PLM, true);
    this.setSize({
      width: 140,
      height: 130,
    });
    this.setPos({
      x: 150,
      y: 0,
    });
    this.programmator = new Programmator(PROGRAMMATORTYPE.PLM);
    this.onSettingClick = () => {
      this.programmator.drawProgrammer(this.andM, this.orM);
      this.programmator.show();
    };
    this.programmator.onAndArrayChange = (data) => {
      console.log(data);
      this.andM[data.x][data.y] = this.andM[data.x][data.y] == 0 ? 1 : 0;
      this.drawProgram();
      this.programmator.drawProgrammer(this.andM, this.orM);
    };
    this.programmator.onOrArrayChange = (data) => {
      this.orM[data.x][data.y] = this.orM[data.x][data.y] == 0 ? 1 : 0;
      console.log(data);
      this.drawProgram();
      console.log(this.orM);
      this.programmator.drawProgrammer(this.andM, this.orM);
    };
    this.setPins({
      A: new Pin("A", PINTYPE.KIRISH, POSITION.TOP, "A"),
      B: new Pin("B", PINTYPE.KIRISH, POSITION.TOP, "B"),
      C: new Pin("C", PINTYPE.KIRISH, POSITION.TOP, "C"),
      D: new Pin("D", PINTYPE.KIRISH, POSITION.TOP, "D"),
      O0: new Pin("O0", PINTYPE.CHIQISH, POSITION.LEFT, "O0"),
      O1: new Pin("O1", PINTYPE.CHIQISH, POSITION.LEFT, "O1"),
      O2: new Pin("O2", PINTYPE.CHIQISH, POSITION.LEFT, "O2"),
      O3: new Pin("O3", PINTYPE.CHIQISH, POSITION.LEFT, "O3"),
      O4: new Pin("O4", PINTYPE.CHIQISH, POSITION.RIGHT, "O4"),
      O5: new Pin("O5", PINTYPE.CHIQISH, POSITION.RIGHT, "O5"),
      O6: new Pin("O6", PINTYPE.CHIQISH, POSITION.RIGHT, "O6"),
      O7: new Pin("O7", PINTYPE.CHIQISH, POSITION.RIGHT, "O7"),
    });
    this.canvas = document.createElement("canvas");
    this.parent.appendChild(this.canvas);
    this.canvas.width = 86;
    this.canvas.height = 81;

    this.drawProgram();
  }

  drawProgram() {
    let ctx = this.canvas.getContext("2d");
    ctx.clearRect(0.5, 0.5, 85, 80);
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.translate(0, 0);
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.strokeStyle = "#3B6772";
    ctx.translate(0.5, 0.5);
    ctx.fillStyle = "lime";
    let x = 0;
    for (let i = 1; i <= 8; i++) {
      x = (i - 1) * 5;
      this.andM[i - 1].forEach((byte, j) => {
        if (byte == 1) ctx.fillRect(j * 5, x, 5, 5);
      });
      this.andM[i + 8 - 1].forEach((byte, j) => {
        if (byte == 1) ctx.fillRect(j * 5, x + 40, 5, 5);
      });
      this.orM[i - 1].forEach((byte, j) => {
        if (byte == 1) ctx.fillRect(j * 5 + 45, x, 5, 5);
      });
      this.orM[i + 8 - 1].forEach((byte, j) => {
        if (byte == 1) ctx.fillRect(j * 5 + 45, x + 40, 5, 5);
      });
      drawLines1(ctx, (i - 1) * 5, 85, 80, 5);
    }
    drawLines1(ctx, 8 * 5, 85, 80, 5);

    ctx.stroke();
  }
}
