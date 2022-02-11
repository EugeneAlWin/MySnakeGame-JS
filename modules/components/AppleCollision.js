import drawApple from './drawApple.js';
import { increase } from './ChangeCounter.js';
export default function AppleCollision(Snake, context) {
  let len = Snake.length - 1;
  Snake.push({
    PosX: Snake[len].posX,
    PosY: Snake[len].posY,
  });

  increase();
  drawApple(context);
}
