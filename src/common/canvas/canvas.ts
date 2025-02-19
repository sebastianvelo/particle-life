import config from "../simulator.config";

export const canvas = document.getElementById(config.canvas.id) as HTMLCanvasElement;
canvas.width = config.canvas.width;
canvas.height = config.canvas.height;
const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

export default ctx;
