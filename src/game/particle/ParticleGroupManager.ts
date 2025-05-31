import config from "@game/config/simulator.config";
import RandomUtils from "@game/utils/RandomUtils";
import { IParticle } from "./Particle";
import { IParticleRule, ParticleRuleFactory } from "./ParticleRule";

interface ParticleRules {
    [key: string]: IParticleRule;
}

export interface ParticleGroup {
    id: string;
    color: string;
    length: number;
    items: IParticle[];
    size: number;
    mass: number;
    velocityDecay: number;
    rules: ParticleRules;
}

class ParticleGroupManager {
    private particleGroups: ParticleGroup[];

    constructor() {
        this.particleGroups = this.generateRandomParticleGroups();
    }

    /**
     * Llena las reglas de un grupo de partículas
     */
    public fillParticleGroupRules(particleGroup: ParticleGroup): void {
        particleGroup.rules = {};
        this.getParticleGroups().forEach((particleGroup2: ParticleGroup) => {
            particleGroup.rules[particleGroup2.color] = new (require("./ParticleRule").ParticleRule)(particleGroup, particleGroup2);
        });
    }

    /**
     * Llena las partículas de un grupo
     */
    public fillParticleGroupItems(particleGroup: ParticleGroup): void {
        const RandomUtils = require("../utils/RandomUtils").default;
        const Particle = require("../particle/Particle").default;
        particleGroup.items = [];
        for (let i = 0; i < particleGroup.length; i++) {
            const particle = new Particle(
                RandomUtils.randomX(),
                RandomUtils.randomY(),
                particleGroup.color
            );
            particleGroup.items.push(particle);
        }
    }

    /**
     * Llena todos los grupos con partículas y reglas
     */
    public fillParticleGroups(): void {
        this.regenerateRandomGroups();
        this.getParticleGroups().forEach((particleGroup: ParticleGroup) => {
            this.fillParticleGroupItems(particleGroup);
            this.fillParticleGroupRules(particleGroup);
        });
    }

    public initializeRules(): void {
        const groups = this.getParticleGroups();
        const rulesMatrix = ParticleRuleFactory.createRulesMatrix(groups);

        for (const [fromColor, groupRules] of Array.from(rulesMatrix)) {
            const group = this.getParticleGroupByColor(fromColor);
            if (group) {
                group.rules = {};
                for (const [toColor, rule] of Array.from(groupRules)) {
                    group.rules[toColor] = rule.toJSON();
                }
            }
        }
    }

    // Método para cambiar escenarios:
    public setScenario(scenario: 'chaos' | 'harmony' | 'segregation' | 'orbit'): void {
        const groups = this.getParticleGroups();
        const rulesMatrix = ParticleRuleFactory.createScenarioRules(groups, scenario);

        // Aplicar nuevas reglas...
    }
    /**
     * Crea una nueva instancia de grupo de partículas
     */
    private createParticleGroup(color: string, length: number, velocityDecay: number): ParticleGroup {
        const mass = RandomUtils.randomMass();
        const size = mass + config.particle.minSize;

        return {
            id: config.particle.generateId(),
            color,
            length,
            velocityDecay,
            mass,
            size,
            items: [],
            rules: {},
        };
    }

    /**
     * Crea un grupo de partículas con configuración por defecto
     */
    private createDefaultParticleGroup(color: string): ParticleGroup {
        return this.createParticleGroup(
            color,
            config.particleGroups.length,
            RandomUtils.randomVelocity()
        );
    }

    /**
     * Genera grupos de partículas aleatorios con colores únicos
     */
    private generateRandomParticleGroups(): ParticleGroup[] {
        const groups: ParticleGroup[] = [];
        const usedColors = new Set<string>();
        const totalGroups = config.particleGroups.size;

        for (let i = 0; i < totalGroups; i++) {
            let color = RandomUtils.randomColor();

            // Asegurar que el color sea único
            while (usedColors.has(color)) {
                color = RandomUtils.randomColor();
            }

            usedColors.add(color);
            groups.push(this.createDefaultParticleGroup(color));
        }

        // Ordenar por color para consistencia
        return groups.sort((a, b) => a.color.localeCompare(b.color));
    }

    /**
     * Obtiene todos los grupos de partículas
     */
    public getParticleGroups(): ParticleGroup[] {
        return [...this.particleGroups]; // Retorna una copia para evitar mutaciones externas
    }

    /**
     * Obtiene un grupo específico por color
     */
    public getParticleGroupByColor(color: string): ParticleGroup | undefined {
        return this.particleGroups.find(group => group.color === color);
    }

    /**
     * Obtiene un grupo específico por ID
     */
    public getParticleGroupById(id: string): ParticleGroup | undefined {
        return this.particleGroups.find(group => group.id === id);
    }

    /**
     * Regenera todos los grupos de partículas con nuevos valores aleatorios
     */
    public regenerateRandomGroups(): void {
        this.particleGroups = this.generateRandomParticleGroups();
    }

    /**
     * Actualiza las reglas de un grupo específico
     */
    public updateParticleGroupRules(fromColor: string, toColor: string, newValue: number): number {
        const group = this.getParticleGroupByColor(fromColor);

        if (!group) {
            console.warn(`Grupo con color ${fromColor} no encontrado`);
            return -1;
        }

        if (!group.rules[toColor]) {
            console.warn(`Regla hacia ${toColor} no existe en el grupo ${fromColor}`);
            return -1;
        }

        group.rules[toColor].g = newValue;
        return newValue;
    }

    /**
     * Agrega una nueva regla a un grupo
     */
    public addRuleToGroup(fromColor: string, toColor: string, rule: IParticleRule): boolean {
        const group = this.getParticleGroupByColor(fromColor);

        if (!group) {
            console.warn(`Grupo con color ${fromColor} no encontrado`);
            return false;
        }

        group.rules[toColor] = rule;
        return true;
    }

    /**
     * Elimina una regla de un grupo
     */
    public removeRuleFromGroup(fromColor: string, toColor: string): boolean {
        const group = this.getParticleGroupByColor(fromColor);

        if (!group) {
            console.warn(`Grupo con color ${fromColor} no encontrado`);
            return false;
        }

        if (group.rules[toColor]) {
            delete group.rules[toColor];
            return true;
        }

        return false;
    }

    /**
     * Obtiene las reglas de un grupo específico
     */
    public getGroupRules(color: string): ParticleRules | undefined {
        const group = this.getParticleGroupByColor(color);
        return group ? { ...group.rules } : undefined; // Retorna copia
    }

    /**
     * Obtiene estadísticas de los grupos
     */
    public getGroupsStats(): {
        totalGroups: number;
        totalParticles: number;
        groupsWithRules: number;
        averageGroupSize: number;
    } {
        const totalGroups = this.particleGroups.length;
        const totalParticles = this.particleGroups.reduce((sum, group) => sum + group.items.length, 0);
        const groupsWithRules = this.particleGroups.filter(group => Object.keys(group.rules).length > 0).length;
        const averageGroupSize = totalGroups > 0 ? totalParticles / totalGroups : 0;

        return {
            totalGroups,
            totalParticles,
            groupsWithRules,
            averageGroupSize: Math.round(averageGroupSize * 100) / 100
        };
    }

    /**
     * Reinicia todos los grupos (mantiene la estructura pero limpia las partículas)
     */
    public clearAllParticles(): void {
        this.particleGroups.forEach(group => {
            group.items = [];
        });
    }

    /**
     * Método factory estático para crear grupos individuales (para compatibilidad)
     */
    public static createGroup(color: string, length: number, velocityDecay: number): ParticleGroup {
        const mass = RandomUtils.randomMass();
        const size = mass + config.particle.minSize;

        return {
            id: config.particle.generateId(),
            color,
            length,
            velocityDecay,
            mass,
            size,
            items: [],
            rules: {},
        };
    }
}

export default ParticleGroupManager;