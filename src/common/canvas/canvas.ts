import config from "../simulator.config";

const canvas = document.getElementById("life") as HTMLCanvasElement;
canvas.width = config.canvas.width;
canvas.height = config.canvas.height;
const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

export default ctx;
