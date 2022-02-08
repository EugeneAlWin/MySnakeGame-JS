import {
  count_container,
  prev_count_container,
  last_count,
} from '../../index.js';

document.addEventListener('DOMContentLoaded', () => {
  BestCount = +localStorage.getItem('prev');
  prev_count_container.innerText =
    BestCount > 0 ? `Лучший счёт: ${BestCount}` : '';
});

let count = 0,
  BestCount = 0;

export function increase() {
  count++;
  count_container.innerText = `Счёт: ${count}`;
}

export function decrease() {
  if (count > BestCount) {
    BestCount = count;
    localStorage.setItem('prev', BestCount.toString());
  }
  last_count.innerText = `Игра окончена! Ваш счёт: ${count} \n Нажмите "Пробел", чтобы начать сначала.`;
  count = 0;
  count_container.innerText = `Счёт: ${count}`;
  prev_count_container.innerText = `Лучший счёт: ${BestCount}`;
}
