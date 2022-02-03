import { Snake, Apple } from './AppleAndSnake.js';
import drawApple from './drawApple.js';
import Apple_HeadCollision from './AppleHeadCollision.js';
import { context } from '../index.js';
import pause from './Pause.js';
//#Configs
let interval = 200,
  step = 30,
  dx = step,
  dy = 0,
  prevX,
  prevY,
  curX,
  curY,
  gameWidth = 840,
  gameHeight = 660,
  cubeWidth = 30,
  cubeHeight = 30,
  Movement,
  isPaused = false;
let classes = document.getElementById('pause_container').classList;

export default function runGame() {
  if (!isPaused) {
    classes.add('active');
    pause(Movement);
    isPaused = true;
  } else {
    classes.remove('active');
    GameStart(context);
    isPaused = false;
  }
}

function GameStart(context) {
  Movement = setInterval(() => {
    Snake.forEach((item, i) => {
      context.clearRect(item.posX, item.posY, cubeWidth, cubeHeight);
      if (i === 0) {
        context.fillStyle = 'yellow';

        if (item.posX > gameWidth) item.posX = 0;
        if (item.posX < 0) item.posX = gameWidth;
        if (item.posY > gameHeight) item.posY = 0;
        if (item.posY < 0) item.posY = gameHeight;
        prevX = item.posX;
        prevY = item.posY;
        item.posX += dx;
        item.posY += dy;
        if (Snake[i].posX === Apple.posX && Snake[i].posY == Apple.posY)
          Apple_HeadCollision(Snake, context);
      } else {
        context.fillStyle = 'red';
        if (Snake[i].posX === Apple.posX && Snake[i].posY == Apple.posY)
          drawApple(context, Apple);
        curX = item.posX;
        curY = item.posY;
        item.posX = prevX;
        item.posY = prevY;
        prevX = curX;
        prevY = curY;
      }
      if (Snake[0].posX === item.posX && Snake[0].posY === item.posY && i !== 0)
        console.log('Столкновение');

      context.fillRect(item.posX, item.posY, cubeWidth, cubeHeight);
    });
  }, interval);
}

let [oppositeKey, oppositeKeyRus] = ['a', 'ф'];
document.addEventListener('keypress', (e) => {
  if (oppositeKey === e.key || oppositeKeyRus === e.key) return;
  e.preventDefault();
  switch (e.key) {
    case 'w':
    case 'ц':
      dx = 0;
      dy = -step;
      [oppositeKey, oppositeKeyRus] = ['s', 'ы'];
      break;
    case 'a':
    case 'ф':
      dx = -step;
      dy = 0;
      [oppositeKey, oppositeKeyRus] = ['d', 'в'];
      break;
    case 's':
    case 'ы':
      dx = 0;
      dy = step;
      [oppositeKey, oppositeKeyRus] = ['w', 'ц'];
      break;
    case 'd':
    case 'в':
      dx = step;
      dy = 0;
      [oppositeKey, oppositeKeyRus] = ['a', 'ф'];
      break;
    case ' ':
      runGame();
      break;
  }
});
