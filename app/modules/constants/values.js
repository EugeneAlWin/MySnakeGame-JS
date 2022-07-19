import { canvas } from './containers.js';
import { speedTumb } from './forms.js';
export const step = 30,
  worldHeight = canvas.height,
  worldWidth = canvas.width,
  pixelSize = Math.round(worldWidth / 28),
  speedLimit = +speedTumb.max + +speedTumb.min;
