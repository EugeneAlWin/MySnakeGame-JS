import { Thorns } from './MainObjs.js';
import { gameHeight, gameWidth, cubeHeight, cubeWidth } from '../Core.js';
import { randMult } from './drawApple.js';
export default function DrawThorns(context, isThorns) {
  if (isThorns) return;
  Thorns.push(
    { X: randMult(gameWidth, cubeWidth), Y: randMult(gameHeight, cubeHeight) },
    { X: randMult(gameWidth, cubeWidth), Y: randMult(gameHeight, cubeHeight) },
    { X: randMult(gameWidth, cubeWidth), Y: randMult(gameHeight, cubeHeight) },
    { X: randMult(gameWidth, cubeWidth), Y: randMult(gameHeight, cubeHeight) },
    { X: randMult(gameWidth, cubeWidth), Y: randMult(gameHeight, cubeHeight) }
  );
  Thorns.forEach((item) => {
    // the triangle
    context.beginPath();

    context.moveTo(item.X + 14.5, item.Y);
    context.lineTo(item.X, item.Y + 29);
    context.lineTo(item.X + 29, item.Y + 29);
    context.closePath();

    // the outline
    context.strokeStyle = '#666666';
    context.stroke();

    // the fill color
    context.fillStyle = '#FFCC00';
    context.fill();
  });
}
