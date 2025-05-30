import { IParticleGroup } from "../particle-group/ParticleGroup";
import { IParticleRule } from "../rule/ParticleRule";

const MIN_DISTANCE = 0.1;
const MIN_DISTANCE_SQ = MIN_DISTANCE * MIN_DISTANCE;
const THRESHOLD = 80;
const THRESHOLD_SQ = THRESHOLD * THRESHOLD;

const findRule = (p1: IParticleGroup, p2: IParticleGroup): IParticleRule | undefined => {
    return p1.rules[p2.color];
};

const applyForcesBetween = (group1: IParticleGroup, group2: IParticleGroup, rule: IParticleRule) => {
    const g = rule.g;
    const mass1 = group1.mass;
    const mass2 = group2.mass;
    const items1 = group1.items;
    const items2 = group2.items;

    // Iterar sobre cada combinación de partículas entre los dos grupos
    for (let a = 0; a < items1.length; a++) {
        const p1 = items1[a];
        for (let b = 0; b < items2.length; b++) {
            const p2 = items2[b];
            const dx = p1.x - p2.x;
            const dy = p1.y - p2.y;
            const dSquared = dx * dx + dy * dy;

            if (dSquared > MIN_DISTANCE_SQ && dSquared < THRESHOLD_SQ) {
                const d = Math.sqrt(dSquared);
                // Evitar división por cero ya que d siempre es > minDistance
                const F = (g * mass1 * mass2) / d;
                p1.fx += F * dx;
                p1.fy += F * dy;
            }
        }
    }
};

const applyForceRules = (groups: IParticleGroup[]) => {
    for (let i = 0; i < groups.length; i++) {
        const group1 = groups[i];
        for (let j = 0; j < groups.length; j++) {
            const group2 = groups[j];
            const rule = findRule(group1, group2);
            if (!rule) continue;
            applyForcesBetween(group1, group2, rule);
        }
    }
};

export default applyForceRules;