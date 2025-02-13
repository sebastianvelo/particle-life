import { IParticle } from "../particle/Particle";
import { IParticleRule } from "../rule/ParticleRule";

export interface IParticleGroup {
  id: string;
  color: string;
  size: number;
  items: IParticle[];
  rules: { [key: string]: IParticleRule }; // Mapa de reglas por color
  velocityDecay: number;
}

const ParticleGroup = (color: string, size: number, velocityDecay: number = 0.5): IParticleGroup => ({
  id: (Date.now() * 100).toString(16),
  color,
  size,
  velocityDecay,
  items: [],
  rules: {},
});

export default ParticleGroup;
