import { Apple } from './AppleSnake-obj.js';

function randMult(max, mult) {
  return Math.floor(Math.random() * (max / mult)) * mult;
}
export default function drawApple(context) {
  context.fillStyle = 'red';
  context.fillRect(
    (Apple.posX = randMult(840, 30)),
    (Apple.posY = randMult(660, 30)),
    30,
    30
  );
}
