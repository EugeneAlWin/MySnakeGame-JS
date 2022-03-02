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
const TLength = Thorns.length;
export function randMult(max, mult) {
  return Math.floor(Math.random() * (max / mult)) * mult;
}

export default function drawApple(context) {
  context.fillStyle = colors[getRandomInt(colors.length - 1)].color;
  // Thorns.forEach((item) => {
  //   if (item.X === Apple.posX && item.Y === Apple.posY) {
  //     drawApple(context);
  //     return;
  //   }
  // });
  for (let i = 0; i < TLength; i++) {
    if (Thorns[i].X === Apple.posX && Thorns[i].Y === Apple.posY) {
      drawApple(context);
      break;
    }
  }
  context.fillRect(
    (Apple.posX = randMult(gameWidth, cubeWidth)),
    (Apple.posY = randMult(gameHeight, cubeHeight)),
    cubeWidth,
    cubeHeight
  );
}
