import colors from "./color/colors";
import config from "./simulator.config";

export const randomX = () =>
  Math.floor(Math.random() * (config.canvas.width / 3)) + config.canvas.width / 3;

export const randomY = () =>
  Math.floor(Math.random() * (config.canvas.height / 3)) + config.canvas.height / 3;

export const randomVelocity = (): number => {
  const r = Math.random();
  return +(r > 0.5 ? r / 2 : r).toFixed(2);
}

export const randomMass = (): number => {
  return Math.random() * 0.2 + 0.8;//1; //+(Math.random() + 0.1).toFixed(6);
}

export const randomColor = () => colors[Math.floor(Math.random() * colors.length)];
