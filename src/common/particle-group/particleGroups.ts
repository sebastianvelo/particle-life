import { getRandomColor } from "../color/colors";
import { randomVelocity } from "../utils";
import ParticleGroup, { IParticleGroup } from "./ParticleGroup";

const getRandomParticleGroups = (): IParticleGroup[] => {
  const pg: IParticleGroup[] = [];
  for (let i = 0; i < 4; i++) {
    let color: string = getRandomColor();
    while (pg.some(g => g.color === color)) {
      color = getRandomColor();
    }
    pg.push(ParticleGroup(color, 600, randomVelocity()));
  }
  return pg;
}

let particleGroups: IParticleGroup[] = getRandomParticleGroups();

export const setRandomParticleGroups = () => particleGroups = [...getRandomParticleGroups()];
export const getParticleGroups = () => particleGroups;

export const updateParticleGroupRules = (color: string, to: string, newValue: number) => {
  const idx = particleGroups.findIndex((group) => group.color === color);
  particleGroups[idx].rules[to].g = newValue;
}

export default getParticleGroups;