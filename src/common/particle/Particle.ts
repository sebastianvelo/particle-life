export interface IParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  color: string;
  fx: number;
  fy: number;
}

const Particle = (x: number, y: number, color: string): IParticle => ({
  x,
  y,
  color,
  vx: 0,
  vy: 0,
  fx: 0,
  fy: 0,
});

export default Particle;
