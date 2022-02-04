import { Snake, Apple, SnakeOnStart } from './components/AppleSnake-obj.js';
import drawApple from './components/drawApple.js';
import AppleCollision from './components/AppleCollision.js';
import { context, classes } from '../index.js';
import pause from './components/Pause.js';
import { decrease } from './components/ChangeCounter.js';
//#Configs
const gameWidth = 840,
  gameHeight = 660,
  cubeWidth = 30,
  cubeHeight = 30;
const interval = 200,
  step = 30;
let dx = step,
  dy = 0;
let prevX, prevY, curX, curY;
let Movement,
  isPaused = false;
//#Configs

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
          AppleCollision(Snake, context);
      } else {
        context.fillStyle = 'red';
        if (Snake[i].posX === Apple.posX && Snake[i].posY == Apple.posY)
          drawApple(context);
        curX = item.posX;
        curY = item.posY;
        item.posX = prevX;
        item.posY = prevY;
        prevX = curX;
        prevY = curY;
      }

      //Горизонталь
      item.posX > gameWidth - cubeWidth && (item.posX = 0);
      item.posX < 0 && (item.posX = gameWidth - cubeWidth);
      //Вертикаль
      item.posY > gameHeight - cubeHeight && (item.posY = 0);
      item.posY < 0 && (item.posY = gameHeight - cubeHeight);

      context.fillRect(item.posX, item.posY, cubeWidth, cubeHeight);

      if (Snake[0].posX === item.posX && Snake[0].posY === item.posY && i !== 0)
        Death(context);
    });
  }, interval);

  function Death(context) {
    //Death required instead оf pause
    pause(Movement);
    //isPaused = true;
    Snake.forEach((cube) => {
      context.clearRect(cube.posX, cube.posY, cubeWidth, cubeHeight);
    });
    Snake.splice(0, Snake.length);
    Snake.push(...JSON.parse(SnakeOnStart));
    dx = step;
    dy = 0;
    [oppositeKey, oppositeKeyRus, oppositeArrow] = ['a', 'ф', 'arrowleft'];
    decrease();
    runGame();
  }
}
let [oppositeKey, oppositeKeyRus, oppositeArrow] = ['a', 'ф', 'arrowleft'];
let start;
document.addEventListener('keydown', (e) => {
  if (new Date() - start < interval) return;

  const key = e.key.toLowerCase();
  if (oppositeKey === key || oppositeKeyRus === key || oppositeArrow === key)
    return;
  switch (key) {
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
  start = new Date();
});
