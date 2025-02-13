import { IParticle } from "../particle/Particle";
import { IParticleRule } from "../rule/ParticleRule";
import { randomMass } from "../utils";

export interface IParticleGroup {
  id: string;
  color: string;
  size: number;
  items: IParticle[];
  mass: number;
  velocityDecay: number;
  rules: { [key: string]: IParticleRule }; // Mapa de reglas por color
}

const ParticleGroup = (color: string, size: number, velocityDecay: number = 0.5): IParticleGroup => ({
  id: (Date.now() * 100).toString(16),
  color,
  size,
  velocityDecay,
  mass: randomMass(),
  items: [],
  rules: {},
});

export default ParticleGroup;
