import config from "../simulator.config";
import { randomColor } from "../utils";
import { IParticleGroup } from "./ParticleGroup";
import ParticleGroupImpl from "./ParticleGroupImpl";

const getRandomParticleGroups = (): IParticleGroup[] => {
  const particleGroups: IParticleGroup[] = [];
  const usedColors = new Set<string>();
  const totalGroups = config.particleGroups.size;

  for (let i = 0; i < totalGroups; i++) {
    let color = randomColor();
    while (usedColors.has(color)) {
      color = randomColor();
    }
    usedColors.add(color);
    particleGroups.push(ParticleGroupImpl(color));
  }

  return particleGroups.sort((a, b) => a.color.localeCompare(b.color));
}

let particleGroups: IParticleGroup[] = getRandomParticleGroups();

export const setRandomParticleGroups = () => particleGroups = [...getRandomParticleGroups()];
export const getParticleGroups = () => particleGroups;

export const updateParticleGroupRules = (color: string, to: string, newValue: number) => {
  const idx = particleGroups.findIndex((group) => group.color === color);
  particleGroups[idx].rules[to].g = newValue;
};

export default getParticleGroups;