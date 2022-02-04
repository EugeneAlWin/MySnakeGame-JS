import drawApple from './drawApple.js';
import { Apple } from './AppleAndSnake.js';

let count_container = document.getElementById('counter');
let prev_count_container = document.getElementById('prev_counter');
let count = 0,
  prevCount = 0;
async function increase() {
  count++;
  count_container.innerText = `Счёт: ${count}`;
}
document.addEventListener('DOMContentLoaded', () => {
  prevCount = +localStorage.getItem('prev');
  prev_count_container.innerText =
    prevCount > 0 ? `Лучший счёт: ${prevCount}` : '';
});

export function decrease() {
  if (count > prevCount) {
    prevCount = count;
    localStorage.setItem('prev', prevCount.toString());
  }
  count = 0;

  count_container.innerText = `Счёт: ${count}`;
  prev_count_container.innerText = `Лучший счёт: ${prevCount}`;
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
