import { canvas } from "./canvas/canvas";
import { IParticleGroup } from "./particle-group/ParticleGroup";
import getParticleGroups, { setRandomParticleGroups } from "./particle-group/particleGroups";
import Particle from "./particle/Particle";
import ParticleRule from "./rule/ParticleRule";
import { randomX, randomY } from "./utils";

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

const fillParticleGroups = () => {
    setRandomParticleGroups();
    getParticleGroups().forEach((particleGroup: IParticleGroup) => {
        fillParticleGroupItems(particleGroup);
        fillParticleGroupRules(particleGroup);
    });
};

const init = () => {
    fillParticleGroups();
    const colors = getParticleGroups().map(pg => pg.color).join(",");
    canvas.style.borderImage = `linear-gradient(${colors}) 1`;
}

export default init;