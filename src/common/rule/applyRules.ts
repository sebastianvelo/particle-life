import { IParticleGroup } from "../particle-group/ParticleGroup";
import getParticleGroups from "../particle-group/particleGroups";
import { IParticle } from "../particle/Particle";
import config from "../simulator.config";
import { IParticleRule } from "./ParticleRule";

// Precalcular constantes
const MIN_DISTANCE = 0.1;
const MIN_DISTANCE_SQ = MIN_DISTANCE * MIN_DISTANCE;
const THRESHOLD = 80;
const THRESHOLD_SQ = THRESHOLD * THRESHOLD;
const canvasWidth = config.canvas.width;
const canvasHeight = config.canvas.height;

const findRule = (p1: IParticleGroup, p2: IParticleGroup): IParticleRule | undefined => {
  return p1.rules[p2.color];
};

const resetForces = (groups: IParticleGroup[]) => {
  // 1. Reiniciar fuerzas en cada partícula
  for (let i = 0; i < groups.length; i++) {
    const group = groups[i];
    const items = group.items;
    for (let j = 0; j < items.length; j++) {
      items[j].fx = 0;
      items[j].fy = 0;
    }
  }
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

const updateParticlePosition = (particle: IParticle, velocityDecay: number) => {
  particle.vx = (particle.vx + particle.fx) * velocityDecay;
  particle.vy = (particle.vy + particle.fy) * velocityDecay;

  particle.x += particle.vx;
  particle.y += particle.vy;

  // Manejo de límites del canvas
  if (particle.x <= 0) {
    particle.x = canvasWidth * 0.99;
  }
  if (particle.y <= 0) {
    particle.y = canvasHeight * 0.99;
  }
  if (particle.x >= canvasWidth) {
    particle.x = 5;
  }
  if (particle.y >= canvasHeight) {
    particle.y = 5;
  }
}

const applyRules = () => {
  const groups = getParticleGroups();

  resetForces(groups);

  for (let i = 0; i < groups.length; i++) {
    const group1 = groups[i];
    for (let j = 0; j < groups.length; j++) {
      const group2 = groups[j];
      const rule = findRule(group1, group2);
      if (!rule) continue;
      applyForcesBetween(group1, group2, rule);
    }
  }

  for (let i = 0; i < groups.length; i++) {
    const group = groups[i];
    const items = group.items;
    const velocityDecay = group.velocityDecay;
    for (let j = 0; j < items.length; j++) {
      updateParticlePosition(items[j], velocityDecay);
    }
  }
};

export default applyRules;
