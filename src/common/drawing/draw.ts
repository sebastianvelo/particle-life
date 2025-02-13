import ctx from "../canvas/canvas";
import { IParticle } from "../particle/Particle";

export const drawInCanvas = (
  x: number,
  y: number,
  color: string,
  s: number
) => {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, s, s);
};

const drawCircle = (particle: IParticle, mass: number) => {
  ctx.beginPath();
  ctx.arc(particle.x, particle.y, mass, 0, 2 * Math.PI);
  ctx.fillStyle = particle.color;
  ctx.fill();
  ctx.lineWidth = 1;
  ctx.strokeStyle = particle.color;
  ctx.stroke();
};

export const drawParticle = (particle: IParticle, mass: number) => {
  //drawInCanvas(particle.x, particle.y, particle.color, 5);
  drawCircle(particle, mass);
};
