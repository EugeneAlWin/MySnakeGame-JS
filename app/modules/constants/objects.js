import { step } from './values.js';

export const snakeColor = {};

export const appleColors = [
  { color: 'red' },
  { color: 'orange' },
  { color: 'blue' },
  { color: 'purple' },
  { color: 'pink' },
  { color: 'lime' },
];

export const snakeList = [
  { posX: 60, posY: 0 },
  { posX: 30, posY: 0 },
  { posX: 0, posY: 0 },
];

export const defaultSnake = JSON.stringify(snakeList);

export const snakeDirection = {
  dx: step,
  dy: 0,
};
