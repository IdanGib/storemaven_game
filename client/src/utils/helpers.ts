import { shapesList } from "./constants";

export function random(min: number, max: number) {
  const diff = Math.floor(Math.random() * (max - min));
  return min + diff;
}

export function getRandomShape() {
  return shapesList[random(0, shapesList.length)];
}
