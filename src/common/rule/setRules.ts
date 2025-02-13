import canvasProps from "../canvas/canvasProps";
import { IParticle } from "../particle/Particle";
import getParticleGroups from "../particle-group/particleGroups";
import { IParticleGroup } from "../particle-group/ParticleGroup";
import { IParticleRule } from "./ParticleRule";

const findRule = (p1: IParticleGroup, p2: IParticleGroup): IParticleRule => {
  return p1.rules[p2.color];
};

const applyRule = (particle1: IParticle, particle2: IParticle, g: number) => {
  const dx = particle1.x - particle2.x;
  const dy = particle1.y - particle2.y;
  const dSquared = dx * dx + dy * dy;
  const minDistance = 0.1;
  const threshold = 80 * 80;
  if (dSquared > minDistance * minDistance && dSquared < threshold) {
    const d = Math.sqrt(dSquared);
    const F = (g * 1) / d;
    return { fx: F * dx, fy: F * dy };
  }
  return { fx: 0, fy: 0 };
};

const createRuleBetween = (particles1: IParticle[], particles2: IParticle[], g: number) => {
  particles1.forEach((particle1) => {
    particles2.forEach((particle2) => {
      const { fx, fy } = applyRule(particle1, particle2, g);
      particle1.fx += fx;
      particle1.fy += fy;
    });
  });
};

const setRules = () => {

  getParticleGroups().forEach((particleGroup) => {
    particleGroup.items.forEach((particle) => {
      particle.fx = 0;
      particle.fy = 0;
    });
  });

  getParticleGroups().forEach((particleGroup1: IParticleGroup) => {
    getParticleGroups().forEach((particleGroup2: IParticleGroup) => {
      const rule = findRule(particleGroup1, particleGroup2);
      if (rule) {
        createRuleBetween(
          particleGroup1.items,
          particleGroup2.items,
          rule.g
        );
      }
    });
  });

  getParticleGroups().forEach((particleGroup) => {
    particleGroup.items.forEach((particle) => {
      particle.vx = (particle.vx + particle.fx) * particleGroup.velocityDecay;
      particle.vy = (particle.vy + particle.fy) * particleGroup.velocityDecay;

      particle.x += particle.vx;
      particle.y += particle.vy;

      if (particle.x <= 0 || particle.x >= canvasProps.w) {
        particle.vx *= -1;
      }
      if (particle.y <= 0 || particle.y >= canvasProps.h) {
        particle.vy *= -1;
      }
    });
  });
};

export default setRules;
