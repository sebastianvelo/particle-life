import { IParticleGroup } from "../particle-group/ParticleGroup";

export interface IParticleRule {
  color: string;
  g: number;
}

const ParticleRule = (particleGroup1: IParticleGroup, particleGroup2: IParticleGroup) => {
  const isAtraction = (particleGroup1.color === particleGroup2.color && Math.floor(Math.random() * 10) > 7) || Math.floor(Math.random() * 10) % 2 === 0;
  return ({
    color: particleGroup2.color,
    g: Math.random() * (isAtraction ? -1 : 1),
  });
};

export default ParticleRule;