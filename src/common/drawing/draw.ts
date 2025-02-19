import ctx from "../canvas/canvas";
import { IParticle } from "../particle/Particle";

export const drawRectangle = (
  x: number,
  y: number,
  color: string,
  w: number,
  h: number
) => {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, w, h);
};

export const drawSquare = (
  x: number,
  y: number,
  color: string,
  s: number
) => {
  drawRectangle(x, y, color, s, s);
};

const drawCircle = (particle: IParticle, size: number) => {
  ctx.beginPath();
  ctx.arc(particle.x, particle.y, size, 0, 2 * Math.PI);
  ctx.fillStyle = particle.color;
  ctx.fill();
  ctx.lineWidth = 1;
  ctx.strokeStyle = particle.color;
  ctx.stroke();
};

export const drawParticle = (particle: IParticle, size: number) => {
  //drawInCanvas(particle.x, particle.y, particle.color, 5);
  drawCircle(particle, size);
};
