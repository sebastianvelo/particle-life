import { IParticle } from "../particle/Particle";
import { IParticleRule } from "../rule/ParticleRule";
import config from "../simulator.config";
import { randomMass } from "../utils";

interface ParticleRules {
  [key: string]: IParticleRule
};

export interface IParticleGroup {
  id: string;
  color: string;
  length: number;
  items: IParticle[];
  size: number;
  mass: number;
  velocityDecay: number;
  rules: ParticleRules;
}

const ParticleGroup = (color: string, length: number, velocityDecay: number): IParticleGroup => {
  const mass = randomMass();
  const size = mass + config.particle.minSize;
  return ({
    id: config.particle.generateId(),
    color,
    length,
    velocityDecay,
    mass,
    size,
    items: [],
    rules: {},
  });
};

export default ParticleGroup;
