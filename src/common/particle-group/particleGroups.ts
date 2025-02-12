import { randomVelocity } from "../utils";
import ParticleGroup, { IParticleGroup } from "./ParticleGroup";

//cobalt, indigo, violet, pink, magenta, crimson, red, orange
//lime, pink, emerland, magenta, cyan, crimson,  indigo, red
//lime, pink, green, magenta, cyan, crimson, cobalt, amber
//lime, cyan, pink, red, orange, olive, steel, yellow
const particleGroups: IParticleGroup[] = [
  ParticleGroup("lime", 400, randomVelocity()),
  ParticleGroup("crimson", 400, randomVelocity()),
  ParticleGroup("magenta", 400, randomVelocity()),
  ParticleGroup("cyan", 400, randomVelocity()),
  //ParticleGroup("white", 400, randomVelocity()),
  ParticleGroup("yellow", 400, randomVelocity()),
  //ParticleGroup("steel", 150),
  //ParticleGroup("orange", 150),
];

export const updateParticleGroupRules = (color: string, to: string, newValue: number) => {
  const idx = particleGroups.findIndex((group) => group.color === color);
  particleGroups[idx].rules[to].g = newValue;
}

export default particleGroups;