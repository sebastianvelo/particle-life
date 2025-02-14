import ctx from "../common/canvas/canvas";
import { drawInCanvas, drawParticle } from "../common/drawing/draw";
import getParticleGroups from "../common/particle-group/particleGroups";
import moveParticles from "./behavior/moveParticles";
import fillParticleGroups from "./initialSettings";
import config from "./simulator.config";

let status = true;
export const toggleGameStatus = () => status = !status;
export const getStatus = () => status;

const start = () => {
  fillParticleGroups();
  const update = () => {
    if (status)
      moveParticles();
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
