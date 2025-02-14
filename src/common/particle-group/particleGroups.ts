import config from "../simulator.config";
import { randomColor, randomVelocity } from "../utils";
import ParticleGroup, { IParticleGroup } from "./ParticleGroup";

const getRandomParticleGroups = (): IParticleGroup[] => {
  const particleGroups: IParticleGroup[] = [];
  for (let i = 0; i < config.particleGroups.size; i++) {
    let color: string = randomColor();
    while (particleGroups.some(g => g.color === color)) {
      color = randomColor();
    }
    particleGroups.push(ParticleGroup(color, config.particleGroups.length, randomVelocity()));
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