import canvasProps from "./canvas/canvasProps";

export const randomX = () =>
  Math.floor(Math.random() * (canvasProps.w / 2)) + canvasProps.w / 4;

export const randomY = () =>
  Math.floor(Math.random() * (canvasProps.h / 2)) + canvasProps.h / 4;

export const randomVelocity = (): number => {
  const r = Math.random();
  return +(r > 0.5 ? r / 2 : r).toFixed(2);
}

export const randomMass = (): number => {
  return +(Math.random() + 0.5).toFixed(6);
}
