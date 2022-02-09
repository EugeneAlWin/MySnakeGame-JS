import {
  count_container,
  prev_count_container,
  last_count,
} from '../../index.js';
import playSound from './playSound.js';
let count = 0,
  BestCount = 0;
const pickApple = new Audio();
pickApple.src = './resources/sounds/PickUp.mp3';
const gameOver = new Audio();
gameOver.src = './resources/sounds/GameOver.mp3';

document.addEventListener('DOMContentLoaded', () => {
  BestCount = +localStorage.getItem('prev');
  prev_count_container.innerText =
    BestCount > 0 ? `Лучший счёт: ${BestCount}` : '';
});

export function increase() {
  count++;
  count_container.innerText = `Счёт: ${count}`;
  playSound(pickApple);
}

export function decrease() {
  if (count > BestCount) {
    BestCount = count;
    localStorage.setItem('prev', BestCount.toString());
  }
  playSound(gameOver);
  last_count.innerText = `Игра окончена! Ваш счёт: ${count} \n Нажмите "Пробел", чтобы начать сначала.`;
  count = 0;
  count_container.innerText = `Счёт: ${count}`;
  prev_count_container.innerText = `Лучший счёт: ${BestCount}`;
}
