import canvasProps from "./canvasProps";

const canvas = document.getElementById("life") as HTMLCanvasElement;
canvas.width = canvasProps.w;
canvas.height = canvasProps.h;
const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

export default ctx;
