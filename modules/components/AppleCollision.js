import drawApple from './drawApple.js';
import { increase } from './ChangeCounter.js';
export default function AppleCollision(Snake, context) {
  let len = Snake.length - 1;
  Snake.push({
    PosX: Snake[len].posX - 30,
    PosY: Snake[len].posY - 30,
  });

  increase();
  drawApple(context);
}
