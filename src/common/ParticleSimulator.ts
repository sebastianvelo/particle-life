import ctx from "../common/canvas/canvas";
import { drawInCanvas, drawParticle } from "../common/drawing/draw";
import getParticleGroups, { setRandomParticleGroups } from "../common/particle-group/particleGroups";
import applyRules from "./rule/applyRules";
import { IParticleGroup } from "./particle-group/ParticleGroup";
import Particle from "./particle/Particle";
import ParticleRule from "./rule/ParticleRule";
import { randomX, randomY } from "./utils";
import config from "./simulator.config";

let status = true;
export const toggleGameStatus = () => status = !status;
export const getStatus = () => status;

const fillParticleGroupRules = (particleGroup: IParticleGroup) => {
  particleGroup.rules = {};
  getParticleGroups().forEach((particleGroup2: IParticleGroup) => {
    particleGroup.rules[particleGroup2.color] = ParticleRule(particleGroup, particleGroup2);
  });
};

const fillParticleGroupItems = (particleGroup: IParticleGroup) => {
  particleGroup.items = [];
  for (let i = 0; i < particleGroup.length; i++) {
    const particle = Particle(randomX(), randomY(), particleGroup.color);
    particleGroup.items.push(particle);
  }
};

export const fillParticleGroups = () => {
  setRandomParticleGroups();
  getParticleGroups().forEach((particleGroup: IParticleGroup) => {
    fillParticleGroupItems(particleGroup);
    fillParticleGroupRules(particleGroup);
  });
}

const start = () => {
  fillParticleGroups();
  const update = () => {
    if (status)
      applyRules();
    ctx.clearRect(0, 0, config.canvas.width, config.canvas.height);
    drawInCanvas(0, 0, config.canvas.bgColor, config.canvas.width);
    getParticleGroups().forEach((particleGroup) => {
      particleGroup.items.forEach((particle) => drawParticle(particle, particleGroup.size));
    });
    requestAnimationFrame(update);
  };
  update();
};

export default start;
