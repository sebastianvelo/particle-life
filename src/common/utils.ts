import colors from "./color/colors";
import config from "./simulator.config";

export const randomX = () =>
  Math.floor(Math.random() * (config.canvas.width / 2)) + config.canvas.width / 4;

export const randomY = () =>
  Math.floor(Math.random() * (config.canvas.height / 2)) + config.canvas.height / 4;

export const randomVelocity = (): number => {
  const r = Math.random();
  return +(r > 0.5 ? r / 2 : r).toFixed(2);
}

export const randomMass = (): number => {
  return +(Math.random() + 0.1).toFixed(6);
}

export const randomColor = () => colors[Math.floor(Math.random() * colors.length)];
