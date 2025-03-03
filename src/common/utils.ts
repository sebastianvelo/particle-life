import colors from "./color/colors";
import config from "./simulator.config";

export const randomX = () =>
  Math.floor((Math.random() * (config.canvas.width / 4)) + config.canvas.width / 2 - config.canvas.width / 8);

export const randomY = () =>
  Math.floor((Math.random() * (config.canvas.height / 4)) + config.canvas.height / 2 - config.canvas.height / 8);


export const randomVelocity = (): number => {
  const r = Math.random() * 0.3 + 0.2;
  return +(r).toFixed(2);//+(r > 0.5 ? r / 2 : r).toFixed(2);
}

export const randomMass = (): number => {
  return Math.random() * 0.2 + 0.8;//1; //+(Math.random() + 0.1).toFixed(6);
}

export const randomColor = () => colors[Math.floor(Math.random() * colors.length)];
