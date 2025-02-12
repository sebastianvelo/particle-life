import canvasProps from "../common/canvas/canvasProps";
import ctx from "../common/canvas/canvas";
import { drawInCanvas, drawParticle } from "../common/drawing/draw";
import setRules from "../common/rule/setRules";
import particleGroups from "../common/particle-group/particleGroups";
import Particle from "./particle/Particle";
import { randomX, randomY } from "./utils";
import ParticleRule from "./rule/ParticleRule";
import { IParticleGroup } from "./particle-group/ParticleGroup";

const fillParticleGroupRules = (particleGroup: IParticleGroup) => {
  particleGroup.rules = {};
  particleGroups.forEach((particleGroup2: IParticleGroup) => {
    particleGroup.rules[particleGroup2.color] = ParticleRule(particleGroup, particleGroup2);
  });
};

const fillParticleGroupItems = (particleGroup: IParticleGroup) => {
  particleGroup.items = [];
  for (let i = 0; i < particleGroup.size; i++) {
    const particle = Particle(randomX(), randomY(), particleGroup.color);
    particleGroup.items.push(particle);
  }
};

export const fillParticleGroups = () => particleGroups.forEach((particleGroup: IParticleGroup) => {
  fillParticleGroupItems(particleGroup);
  fillParticleGroupRules(particleGroup);
});

const start = () => {
  fillParticleGroups();
  const update = () => {
    setRules();
    ctx.clearRect(0, 0, canvasProps.w, canvasProps.h);
    drawInCanvas(0, 0, "#000", canvasProps.w);
    particleGroups.forEach((particleGroup) => {
      particleGroup.items.forEach(drawParticle);
    });
    requestAnimationFrame(update);
  };
  update();
};

export default start;
