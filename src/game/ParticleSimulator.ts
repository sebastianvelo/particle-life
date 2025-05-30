import ctx from "./canvas/canvas";
import { drawParticle, drawRectangle } from "./drawing/draw";
import getParticleGroups from "./particle-group/particleGroups";
import moveParticles from "./behavior/moveParticles";
import init from "./initialSettings";
import config from "./simulator.config";

let status = true;
export const toggleGameStatus = () => status = !status;
export const getStatus = () => status;

const start = () => {
  init();
  const update = () => {
    if (status) {
      moveParticles();
    }
    ctx.clearRect(0, 0, config.canvas.width, config.canvas.height);
    drawRectangle(0, 0, config.canvas.bgColor, config.canvas.width, config.canvas.height);
    getParticleGroups().forEach((particleGroup) => {
      particleGroup.items.forEach((particle) => drawParticle(particle, particleGroup.size));
    });
    requestAnimationFrame(update);
  };
  update();
};

export default start;
