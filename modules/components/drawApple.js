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
