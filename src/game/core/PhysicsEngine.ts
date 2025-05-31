import config from "@game/config/simulator.config";
import { IParticle } from "@game/particle/Particle";
import { ParticleGroup } from "@game/particle/ParticleGroupManager";
import { IParticleRule } from "@game/particle/ParticleRule";

class PhysicsEngine {
  private readonly MIN_DISTANCE = 0.1;
  private readonly MIN_DISTANCE_SQ = this.MIN_DISTANCE * this.MIN_DISTANCE;
  private readonly THRESHOLD = 80;
  private readonly THRESHOLD_SQ = this.THRESHOLD * this.THRESHOLD;
  
  private canvasWidth: number;
  private canvasHeight: number;

  constructor() {
    this.canvasWidth = config.canvas.width;
    this.canvasHeight = config.canvas.height;
  }

  /**
   * Actualiza la física de todas las partículas
   */
  public updatePhysics(groups: ParticleGroup[]): void {
    this.resetForces(groups);
    this.applyForceRules(groups);
    this.updateParticlesPosition(groups);
  }

  /**
   * Resetea todas las fuerzas de las partículas
   */
  private resetForces(groups: ParticleGroup[]): void {
    for (const group of groups) {
      for (const particle of group.items) {
        particle.fx = 0;
        particle.fy = 0;
      }
    }
  }

  /**
   * Aplica las reglas de fuerza entre todos los grupos
   */
  private applyForceRules(groups: ParticleGroup[]): void {
    for (const group1 of groups) {
      for (const group2 of groups) {
        const rule = this.findRule(group1, group2);
        if (rule) {
          this.applyForcesBetween(group1, group2, rule);
        }
      }
    }
  }

  /**
   * Busca la regla entre dos grupos
   */
  private findRule(group1: ParticleGroup, group2: ParticleGroup): IParticleRule | undefined {
    return group1.rules[group2.color];
  }

  /**
   * Aplica fuerzas entre dos grupos específicos según una regla
   */
  private applyForcesBetween(group1: ParticleGroup, group2: ParticleGroup, rule: IParticleRule): void {
    const g = rule.g;
    const mass1 = group1.mass;
    const mass2 = group2.mass;
    const items1 = group1.items;
    const items2 = group2.items;

    // Iterar sobre cada combinación de partículas entre los dos grupos
    for (const p1 of items1) {
      for (const p2 of items2) {
        this.applyForceBetweenParticles(p1, p2, g, mass1, mass2);
      }
    }
  }

  /**
   * Aplica fuerza entre dos partículas específicas
   */
  private applyForceBetweenParticles(
    p1: IParticle, 
    p2: IParticle, 
    g: number, 
    mass1: number, 
    mass2: number
  ): void {
    const dx = p1.x - p2.x;
    const dy = p1.y - p2.y;
    const dSquared = dx * dx + dy * dy;

    if (dSquared > this.MIN_DISTANCE_SQ && dSquared < this.THRESHOLD_SQ) {
      const d = Math.sqrt(dSquared);
      const F = (g * mass1 * mass2) / d;
      p1.fx += F * dx;
      p1.fy += F * dy;
    }
  }

  /**
   * Actualiza las posiciones de todas las partículas
   */
  private updateParticlesPosition(groups: ParticleGroup[]): void {
    for (const group of groups) {
      for (const particle of group.items) {
        this.updateParticlePosition(particle, group.velocityDecay);
      }
    }
  }

  /**
   * Actualiza la posición de una partícula individual
   */
  private updateParticlePosition(particle: IParticle, velocityDecay: number): void {
    // Actualizar velocidad con las fuerzas aplicadas
    particle.vx = (particle.vx + particle.fx) * velocityDecay;
    particle.vy = (particle.vy + particle.fy) * velocityDecay;

    // Actualizar posición
    particle.x += particle.vx;
    particle.y += particle.vy;

    // Manejo de límites del canvas (wrap around)
    this.handleCanvasBounds(particle);
  }

  /**
   * Maneja los límites del canvas
   */
  private handleCanvasBounds(particle: IParticle): void {
    if (particle.x <= 0) {
      particle.x = this.canvasWidth * 0.99;
    } else if (particle.x >= this.canvasWidth) {
      particle.x = 5;
    }

    if (particle.y <= 0) {
      particle.y = this.canvasHeight * 0.99;
    } else if (particle.y >= this.canvasHeight) {
      particle.y = 5;
    }
  }

  /**
   * Actualiza las dimensiones del canvas para los cálculos de límites
   */
  public updateCanvasDimensions(width: number, height: number): void {
    this.canvasWidth = width;
    this.canvasHeight = height;
  }

  /**
   * Configura nuevos parámetros de física
   */
  public updatePhysicsConstants(params: {
    minDistance?: number;
    threshold?: number;
  }): void {
    if (params.minDistance !== undefined) {
      (this as any).MIN_DISTANCE = params.minDistance;
      (this as any).MIN_DISTANCE_SQ = params.minDistance * params.minDistance;
    }
    
    if (params.threshold !== undefined) {
      (this as any).THRESHOLD = params.threshold;
      (this as any).THRESHOLD_SQ = params.threshold * params.threshold;
    }
  }

  /**
   * Obtiene los parámetros actuales de física
   */
  public getPhysicsConstants(): {
    minDistance: number;
    threshold: number;
    canvasWidth: number;
    canvasHeight: number;
  } {
    return {
      minDistance: this.MIN_DISTANCE,
      threshold: this.THRESHOLD,
      canvasWidth: this.canvasWidth,
      canvasHeight: this.canvasHeight
    };
  }

  /**
   * Aplica una fuerza externa a todas las partículas de un grupo
   */
  public applyExternalForce(
    groups: ParticleGroup[], 
    groupColor: string, 
    forceX: number, 
    forceY: number
  ): void {
    const targetGroup = groups.find(group => group.color === groupColor);
    if (targetGroup) {
      for (const particle of targetGroup.items) {
        particle.fx += forceX;
        particle.fy += forceY;
      }
    }
  }

  /**
   * Calcula la energía cinética total del sistema
   */
  public calculateTotalKineticEnergy(groups: ParticleGroup[]): number {
    let totalEnergy = 0;
    
    for (const group of groups) {
      for (const particle of group.items) {
        const vSquared = particle.vx * particle.vx + particle.vy * particle.vy;
        totalEnergy += 0.5 * group.mass * vSquared;
      }
    }
    
    return totalEnergy;
  }

  /**
   * Obtiene estadísticas de física del sistema
   */
  public getPhysicsStats(groups: ParticleGroup[]): {
    totalKineticEnergy: number;
    totalParticles: number;
    averageSpeed: number;
  } {
    let totalSpeed = 0;
    let totalParticles = 0;
    
    for (const group of groups) {
      for (const particle of group.items) {
        const speed = Math.sqrt(particle.vx * particle.vx + particle.vy * particle.vy);
        totalSpeed += speed;
        totalParticles++;
      }
    }
    
    return {
      totalKineticEnergy: this.calculateTotalKineticEnergy(groups),
      totalParticles,
      averageSpeed: totalParticles > 0 ? totalSpeed / totalParticles : 0
    };
  }
}

export default PhysicsEngine;