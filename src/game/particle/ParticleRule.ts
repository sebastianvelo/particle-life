import { ParticleGroup } from "./ParticleGroupManager";

export interface IParticleRule {
  color: string;
  g: number;
}

export class ParticleRule implements IParticleRule {
  public color: string;
  public g: number;

  constructor(particleGroup1: ParticleGroup, particleGroup2: ParticleGroup) {
    this.color = particleGroup2.color;
    this.g = this.calculateForceStrength(particleGroup1, particleGroup2);
  }

  /**
   * Calcula la fuerza de interacción entre dos grupos
   */
  private calculateForceStrength(group1: ParticleGroup, group2: ParticleGroup): number {
    const isAttraction = this.determineAttraction(group1, group2);
    const baseForce = Math.random();
    return baseForce * (isAttraction ? -1 : 1);
  }

  /**
   * Determina si la interacción es atractiva o repulsiva
   */
  private determineAttraction(group1: ParticleGroup, group2: ParticleGroup): boolean {
    // Mismo color: 80% probabilidad de atracción
    const sameColorAttraction = group1.color === group2.color && Math.floor(Math.random() * 10) < 8;

    // Diferente color: 50% probabilidad de atracción
    const randomAttraction = Math.floor(Math.random() * 10) % 2 === 0;

    return sameColorAttraction || randomAttraction;
  }

  /**
   * Actualiza la fuerza de la regla
   */
  public updateForce(newForce: number): void {
    this.g = newForce;
  }

  /**
   * Invierte la fuerza (atracción <-> repulsión)
   */
  public invertForce(): void {
    this.g = -this.g;
  }

  /**
   * Verifica si la regla es atractiva
   */
  public isAttractive(): boolean {
    return this.g < 0;
  }

  /**
   * Verifica si la regla es repulsiva
   */
  public isRepulsive(): boolean {
    return this.g > 0;
  }

  /**
   * Obtiene la intensidad absoluta de la fuerza
   */
  public getForceIntensity(): number {
    return Math.abs(this.g);
  }

  /**
   * Obtiene información descriptiva de la regla
   */
  public getDescription(): string {
    const type = this.isAttractive() ? "atracción" : "repulsión";
    const intensity = (this.getForceIntensity() * 100).toFixed(1);
    return `${type} hacia ${this.color} (${intensity}%)`;
  }

  /**
   * Crea una copia de la regla
   */
  public clone(): ParticleRule {
    const cloned = Object.create(ParticleRule.prototype);
    cloned.color = this.color;
    cloned.g = this.g;
    return cloned;
  }

  /**
   * Convierte la regla a un objeto plano
   */
  public toJSON(): IParticleRule {
    return {
      color: this.color,
      g: this.g
    };
  }

  /**
   * Crea una regla desde un objeto plano
   */
  public static fromJSON(data: IParticleRule): ParticleRule {
    const rule = Object.create(ParticleRule.prototype);
    rule.color = data.color;
    rule.g = data.g;
    return rule;
  }

  /**
   * Método factory para crear reglas con configuraciones específicas
   */
  public static createCustomRule(
    targetColor: string,
    force: number,
    isAttractive: boolean = false
  ): ParticleRule {
    const rule = Object.create(ParticleRule.prototype);
    rule.color = targetColor;
    rule.g = Math.abs(force) * (isAttractive ? -1 : 1);
    return rule;
  }

  /**
   * Método factory para crear regla de atracción fuerte
   */
  public static createStrongAttraction(targetColor: string): ParticleRule {
    return ParticleRule.createCustomRule(targetColor, 0.8, true);
  }

  /**
   * Método factory para crear regla de repulsión fuerte
   */
  public static createStrongRepulsion(targetColor: string): ParticleRule {
    return ParticleRule.createCustomRule(targetColor, 0.8, false);
  }

  /**
   * Método factory para crear regla neutral (fuerza muy débil)
   */
  public static createNeutralRule(targetColor: string): ParticleRule {
    return ParticleRule.createCustomRule(targetColor, 0.1, Math.random() < 0.5);
  }
}

/**
 * Factory class para crear múltiples reglas de forma eficiente
 */
export class ParticleRuleFactory {
  /**
   * Crea una regla usando la lógica original
   */
  public static create(group1: ParticleGroup, group2: ParticleGroup): ParticleRule {
    return new ParticleRule(group1, group2);
  }

  /**
   * Crea reglas entre todos los grupos de una lista
   */
  public static createRulesMatrix(groups: ParticleGroup[]): Map<string, Map<string, ParticleRule>> {
    const rulesMatrix = new Map<string, Map<string, ParticleRule>>();

    for (const group1 of groups) {
      const groupRules = new Map<string, ParticleRule>();

      for (const group2 of groups) {
        const rule = ParticleRuleFactory.create(group1, group2);
        groupRules.set(group2.color, rule);
      }

      rulesMatrix.set(group1.color, groupRules);
    }

    return rulesMatrix;
  }

  /**
   * Crea reglas predefinidas para escenarios específicos
   */
  public static createScenarioRules(
    groups: ParticleGroup[],
    scenario: 'chaos' | 'harmony' | 'segregation' | 'orbit'
  ): Map<string, Map<string, ParticleRule>> {
    const rulesMatrix = new Map<string, Map<string, ParticleRule>>();

    for (const group1 of groups) {
      const groupRules = new Map<string, ParticleRule>();

      for (const group2 of groups) {
        let rule: ParticleRule;

        switch (scenario) {
          case 'chaos':
            rule = new ParticleRule(group1, group2); // Aleatorio original
            break;
          case 'harmony':
            rule = ParticleRule.createStrongAttraction(group2.color);
            break;
          case 'segregation':
            rule = group1.color === group2.color
              ? ParticleRule.createStrongAttraction(group2.color)
              : ParticleRule.createStrongRepulsion(group2.color);
            break;
          case 'orbit':
            rule = group1.color === group2.color
              ? ParticleRule.createNeutralRule(group2.color)
              : ParticleRule.createCustomRule(group2.color, 0.3, true);
            break;
          default:
            rule = new ParticleRule(group1, group2);
        }

        groupRules.set(group2.color, rule);
      }

      rulesMatrix.set(group1.color, groupRules);
    }

    return rulesMatrix;
  }
}

// Función de compatibilidad para migración gradual
export const createParticleRule = (group1: ParticleGroup, group2: ParticleGroup): IParticleRule => {
  return new ParticleRule(group1, group2).toJSON();
};

// Ejemplo de uso:
/*
// Uso básico (compatible con código original):
const rule = new ParticleRule(group1, group2);

// Métodos útiles:
console.log(rule.getDescription()); // "atracción hacia red (75.3%)"
rule.updateForce(0.5);
rule.invertForce();

// Factory methods:
const strongAttraction = ParticleRule.createStrongAttraction("blue");
const neutralRule = ParticleRule.createNeutralRule("green");

// Crear matriz completa de reglas:
const factory = new ParticleRuleFactory();
const rulesMatrix = factory.createRulesMatrix(groups);

// Escenarios predefinidos:
const harmonyRules = factory.createScenarioRules(groups, 'harmony');
const chaosRules = factory.createScenarioRules(groups, 'chaos');
*/