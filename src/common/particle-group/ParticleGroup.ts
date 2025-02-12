import { IParticle } from "../particle/Particle";
import { IParticleRule } from "../rule/ParticleRule";

export interface IParticleGroup {
  color: string;
  size: number;
  items: IParticle[];
  rules: { [key: string]: IParticleRule }; // Mapa de reglas por color
  velocityDecay: number;
}

const ParticleGroup = (color: string, size: number, velocityDecay: number = 0.5): IParticleGroup => ({
  color,
  size,
  velocityDecay,
  items: [],
  rules: {},
});

export default ParticleGroup;
