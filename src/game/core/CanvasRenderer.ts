import { SimulatorConfig } from "@game/config/simulator.config";
import { IParticle } from "../particle/Particle";

class CanvasRenderer {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;

  constructor(config: SimulatorConfig) {
    this.canvas = document.getElementById(config.canvas.id) as HTMLCanvasElement;

    if (!this.canvas) {
      throw new Error(`Canvas element with id '${config.canvas.id}' not found`);
    }

    this.canvas.width = config.canvas.width;
    this.canvas.height = config.canvas.height;

    const context = this.canvas.getContext("2d");
    if (!context) {
      throw new Error("Could not get 2D context from canvas");
    }

    this.ctx = context;
  }

  /**
   * Dibuja un rectángulo en el canvas
   */
  public drawRectangle(x: number, y: number, color: string, w: number, h: number): void {
    this.ctx.fillStyle = color;
    this.ctx.fillRect(x, y, w, h);
  }

  /**
   * Dibuja un cuadrado en el canvas
   */
  public drawSquare(x: number, y: number, color: string, s: number): void {
    this.drawRectangle(x, y, color, s, s);
  }

  /**
   * Dibuja un círculo para una partícula
   */
  private drawCircle(particle: IParticle, size: number): void {
    this.ctx.beginPath();
    this.ctx.arc(particle.x, particle.y, size, 0, 2 * Math.PI);
    this.ctx.fillStyle = particle.color;
    this.ctx.fill();
    this.ctx.lineWidth = 1;
    this.ctx.strokeStyle = particle.color;
    this.ctx.stroke();
  }

  /**
   * Dibuja una partícula en el canvas
   */
  public drawParticle(particle: IParticle, size: number): void {
    this.drawCircle(particle, size);
  }

  /**
   * Limpia todo el canvas
   */
  public clear(): void {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  /**
   * Obtiene las dimensiones del canvas
   */
  public getDimensions(): { width: number; height: number } {
    return {
      width: this.canvas.width,
      height: this.canvas.height
    };
  }

  /**
   * Obtiene el contexto 2D del canvas (para operaciones avanzadas)
   */
  public getContext(): CanvasRenderingContext2D {
    return this.ctx;
  }

  /**
   * Obtiene el elemento canvas
   */
  public getCanvas(): HTMLCanvasElement {
    return this.canvas;
  }

  /**
   * Cambia el borde del canvas usando un gradiente de colores
   */
  public setCanvasBorderGradient(colors: string[]): void {
    if (!this.canvas) return;
    this.canvas.style.borderImage = `linear-gradient(${colors.join(",")}) 1`;
  }
}

export default CanvasRenderer;