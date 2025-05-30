import { IParticleGroup } from "../particle-group/ParticleGroup";
import getParticleGroups from "../particle-group/particleGroups";
import applyForceRules from "./applyForceRules";
import updateParticlesPosition from "./updateParticlesPosition";

const resetForces = (groups: IParticleGroup[]) => {
  for (let i = 0; i < groups.length; i++) {
    const group = groups[i];
    const items = group.items;
    for (let j = 0; j < items.length; j++) {
      items[j].fx = 0;
      items[j].fy = 0;
    }
  }
};

const moveParticles = () => {
  const groups = getParticleGroups();

  resetForces(groups);
  applyForceRules(groups);
  updateParticlesPosition(groups);
};

export default moveParticles;
