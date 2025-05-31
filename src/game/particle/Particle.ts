export interface IParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  color: string;
  fx: number;
  fy: number;
}

class Particle implements IParticle {
  public x: number;
  public y: number;
  public vx: number;
  public vy: number;
  public color: string;
  public fx: number;
  public fy: number;

  constructor(x: number, y: number, color: string) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.vx = 0;
    this.vy = 0;
    this.fx = 0;
    this.fy = 0;
  }

  // Métodos útiles que podrías agregar:
  public updatePosition(): void {
    this.x += this.vx;
    this.y += this.vy;
  }

  public applyForce(): void {
    this.vx += this.fx;
    this.vy += this.fy;
  }

  public resetForces(): void {
    this.fx = 0;
    this.fy = 0;
  }
}

export default Particle;