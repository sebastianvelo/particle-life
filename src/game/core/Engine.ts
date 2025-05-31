import config from "@game/config/simulator.config";
import ParticleGroupManager from "@game/particle/ParticleGroupManager";
import CanvasRenderer from "./CanvasRenderer";
import PhysicsEngine from "./PhysicsEngine";

class Engine {
  private renderer: CanvasRenderer;
  private groupManager: ParticleGroupManager;
  private physicsEngine: PhysicsEngine;
  private status: boolean;
  private animationId: number | null;
  private isInitialized: boolean;

  constructor() {
    this.renderer = new CanvasRenderer(config);
    this.groupManager = new ParticleGroupManager();
    this.physicsEngine = new PhysicsEngine();
    this.status = true;
    this.animationId = null;
    this.isInitialized = false;
  }

  /**
   * Establece el canvas para el engine (método para React)
   */
  public setCanvas(canvas: HTMLCanvasElement): void {
    this.renderer = new CanvasRenderer(config, canvas);
    this.isInitialized = true;
  }

  /**
   * Inicializa el motor y comienza el loop de animación
   */
  public start(): void {
    if (!this.isInitialized) {
      console.warn('Engine not initialized. Use setCanvas() first or ensure canvas element exists.');
      return;
    }

    this.groupManager.fillParticleGroups();
    this.gameLoop();
  }

  /**
   * Detiene el motor de juego
   */
  public stop(): void {
    if (this.animationId !== null) {
      cancelAnimationFrame(this.animationId);
      this.animationId = null;
    }
    this.status = false;
  }

  /**
   * Pausa/reanuda el motor
   */
  public toggleStatus(): void {
    this.status = !this.status;
  }

  /**
   * Obtiene el estado actual del motor
   */
  public getStatus(): boolean {
    return this.status;
  }

  /**
   * Obtiene si el engine está inicializado
   */
  public getIsInitialized(): boolean {
    return this.isInitialized;
  }

  /**
   * Reinicia el motor con nuevos grupos de partículas
   */
  public restart(): void {
    if (!this.isInitialized) {
      console.warn('Engine not initialized. Cannot restart.');
      return;
    }

    this.groupManager.fillParticleGroups();
    if (!this.status) {
      this.start();
    }
  }

  /**
   * Loop principal del juego
   */
  private gameLoop(): void {
    const update = () => {
      if (!this.isInitialized) return;

      if (this.status) {
        const groups = this.groupManager.getParticleGroups();
        this.physicsEngine.updatePhysics(groups);
      }

      this.render();

      this.animationId = requestAnimationFrame(update);
    };

    update();
  }

  /**
   * Renderiza todo el frame actual
   */
  private render(): void {
    if (!this.isInitialized) return;

    this.renderer.clear();
    this.renderer.drawRectangle(
      0,
      0,
      config.canvas.bgColor,
      config.canvas.width,
      config.canvas.height
    );

    this.renderParticles();
  }

  /**
   * Renderiza todas las partículas de todos los grupos
   */
  private renderParticles(): void {
    const particleGroups = this.groupManager.getParticleGroups();

    particleGroups.forEach((particleGroup) => {
      particleGroup.items.forEach((particle) => {
        this.renderer.drawParticle(particle, particleGroup.size);
      });
    });
  }

  /**
   * Obtiene el motor de física para operaciones avanzadas
   */
  public getPhysicsEngine(): PhysicsEngine {
    return this.physicsEngine;
  }

  /**
   * Obtiene el renderer para operaciones avanzadas
   */
  public getRenderer(): CanvasRenderer {
    return this.renderer;
  }

  /**
   * Obtiene el administrador de grupos para operaciones avanzadas
   */
  public getGroupManager(): ParticleGroupManager {
    return this.groupManager;
  }

  /**
   * Obtiene estadísticas del motor
   */
  public getEngineStats(): {
    isRunning: boolean;
    canvasDimensions: { width: number; height: number };
    groupStats: any;
  } {
    return {
      isRunning: this.status,
      canvasDimensions: this.isInitialized ? this.renderer.getDimensions() : { width: 0, height: 0 },
      groupStats: this.groupManager.getGroupsStats()
    };
  }

  /**
   * Actualiza la configuración del canvas en tiempo real
   */
  public updateCanvasSize(width: number, height: number): void {
    if (!this.isInitialized) return;

    const canvas = this.renderer.getCanvas();
    canvas.width = width;
    canvas.height = height;
  }

  /**
   * Limpia todas las partículas sin regenerar grupos
   */
  public clearParticles(): void {
    this.groupManager.clearAllParticles();
  }

  /**
   * Método de utilidad para agregar reglas entre grupos
   */
  public addGroupRule(fromColor: string, toColor: string, rule: any): boolean {
    return this.groupManager.addRuleToGroup(fromColor, toColor, rule);
  }

  /**
   * Método de utilidad para actualizar reglas entre grupos
   */
  public updateGroupRule(fromColor: string, toColor: string, newValue: number): number {
    console.log(fromColor, toColor, newValue)
    return this.groupManager.updateParticleGroupRules(fromColor, toColor, newValue);
  }
}

export default Engine;