import { cubeHeight, cubeWidth, gameHeight, gameWidth } from '../Core.js';
import { Apple } from './MainObjs.js';
import { getRandomInt } from './GetRandomInt.js';
import { Thorns } from './MainObjs.js';
const colors = [
  { color: 'red' },
  { color: 'orange' },
  { color: 'blue' },
  { color: 'purple' },
  { color: 'pink' },
];

export function randMult(max, mult) {
  return Math.floor(Math.random() * (max / mult)) * mult;
}

export default function drawApple(context) {
  context.fillStyle = colors[getRandomInt(colors.length)].color;
  context.fillRect(
    (Apple.posX = randMult(gameWidth, cubeWidth)),
    (Apple.posY = randMult(gameHeight, cubeHeight)),
    cubeWidth,
    cubeHeight
  );
  Thorns.forEach((item) => {
    if (item.X === Apple.posX && item.Y === Apple.posY) drawApple();
  });
}
