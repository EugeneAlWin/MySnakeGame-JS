import drawApple from './drawApple.js';
import { Apple } from './AppleAndSnake.js';

let count_container = document.getElementById('counter');
let count = 0;

async function increase() {
  count++;
  count_container.innerText = `Счёт: ${count}`;
}
export default function Apple_HeadCollision(Snake, context) {
  let len = Snake.length - 1;
  Snake.push({
    PosX: Snake[len].posX - 30,
    PosY: Snake[len].posY,
  });
  increase();
  drawApple(context, Apple);
}
