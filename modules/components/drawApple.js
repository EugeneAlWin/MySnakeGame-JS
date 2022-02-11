import { cubeHeight, cubeWidth, gameHeight, gameWidth } from '../Core.js';
import { Apple } from './AppleSnake-obj.js';
import { getRandomInt } from './GetRandomInt.js';

const colors = [
  { color: 'red' },
  { color: 'orange' },
  { color: 'blue' },
  { color: 'purple' },
  { color: 'pink' },
];

function randMult(max, mult) {
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
  // let x = randMult(840, 30);
  // let y = randMult(660, 30);

  // // the triangle
  // context.beginPath();

  // context.moveTo(x + 14.5, y);
  // context.lineTo(x, y + 29);
  // context.lineTo(x + 29, y + 29);
  // context.closePath();

  // // the outline
  // context.strokeStyle = '#666666';
  // context.stroke();

  // // the fill color
  // context.fillStyle = '#FFCC00';
  // context.fill();
}
