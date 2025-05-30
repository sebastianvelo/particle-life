import { IParticleGroup } from "../particle-group/ParticleGroup";
import { IParticle } from "../particle/Particle";
import config from "../simulator.config";

const canvasWidth = config.canvas.width;
const canvasHeight = config.canvas.height;

const updateParticlePosition = (particle: IParticle, velocityDecay: number) => {
    particle.vx = (particle.vx + particle.fx) * velocityDecay;
    particle.vy = (particle.vy + particle.fy) * velocityDecay;

    particle.x += particle.vx;
    particle.y += particle.vy;

    // Manejo de límites del canvas
    if (particle.x <= 0) {
        particle.x = canvasWidth * 0.99;
    }
    if (particle.y <= 0) {
        particle.y = canvasHeight * 0.99;
    }
    if (particle.x >= canvasWidth) {
        particle.x = 5;
    }
    if (particle.y >= canvasHeight) {
        particle.y = 5;
    }
};

const updateParticlesPosition = (groups: IParticleGroup[]) => {
    for (let i = 0; i < groups.length; i++) {
        const group = groups[i];
        const items = group.items;
        const velocityDecay = group.velocityDecay;
        for (let j = 0; j < items.length; j++) {
            updateParticlePosition(items[j], velocityDecay);
        }
    }
};

export default updateParticlesPosition;