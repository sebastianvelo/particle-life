import { getRandomColor, randomVelocity } from "../utils";
import ParticleGroup, { IParticleGroup } from "./ParticleGroup";

const GROUPS = 4;
const PARTICLES = 700;

const getRandomParticleGroups = (): IParticleGroup[] => {
  const particleGroups: IParticleGroup[] = [];
  for (let i = 0; i < GROUPS; i++) {
    let color: string = getRandomColor();
    while (particleGroups.some(g => g.color === color)) {
      color = getRandomColor();
    }
    particleGroups.push(ParticleGroup(color, PARTICLES, randomVelocity()));
  }
  return particleGroups.sort((pgA, pgB) => pgA.color > pgB.color ? 1 : -1);
}

let particleGroups: IParticleGroup[] = getRandomParticleGroups();

export const setRandomParticleGroups = () => particleGroups = [...getRandomParticleGroups()];
export const getParticleGroups = () => particleGroups;

export const updateParticleGroupRules = (color: string, to: string, newValue: number) => {
  const idx = particleGroups.findIndex((group) => group.color === color);
  particleGroups[idx].rules[to].g = newValue;
}

export default getParticleGroups;