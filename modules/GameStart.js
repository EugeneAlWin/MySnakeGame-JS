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

      //Горизонталь
      if (item.posX > gameWidth - cubeWidth) item.posX = 0;
      if (item.posX < 0) item.posX = gameWidth - cubeWidth;

      //Вертикаль
      if (item.posY > gameHeight - cubeHeight) item.posY = 0;
      if (item.posY < 0) item.posY = gameHeight - cubeHeight;

      context.fillRect(item.posX, item.posY, cubeWidth, cubeHeight);
    });
  }, interval);
}

let [oppositeKey, oppositeKeyRus, oppositeArrow] = ['a', 'ф', 'arrowleft'];
document.addEventListener('keydown', (e) => {
  const key = e.key.toLowerCase();
  if (oppositeKey === key || oppositeKeyRus === key || oppositeArrow === key)
    return;

  switch (key.toLowerCase()) {
    case 'w':
    case 'ц':
    case 'arrowup':
      e.preventDefault();
      dx = 0;
      dy = -step;
      [oppositeKey, oppositeKeyRus, oppositeArrow] = ['s', 'ы', 'arrowdown'];
      break;
    case 's':
    case 'ы':
    case 'arrowdown':
      e.preventDefault();
      dx = 0;
      dy = step;
      [oppositeKey, oppositeKeyRus, oppositeArrow] = ['w', 'ц', 'arrowup'];
      break;
    case 'a':
    case 'ф':
    case 'arrowleft':
      e.preventDefault();
      dx = -step;
      dy = 0;
      [oppositeKey, oppositeKeyRus, oppositeArrow] = ['d', 'в', 'arrowright'];
      break;
    case 'd':
    case 'в':
    case 'arrowright':
      e.preventDefault();
      dx = step;
      dy = 0;
      [oppositeKey, oppositeKeyRus, oppositeArrow] = ['a', 'ф', 'arrowleft'];
      break;

    case ' ':
      e.preventDefault();
      runGame();
      break;
  }
});
