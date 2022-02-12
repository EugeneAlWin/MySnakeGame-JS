import { Snake, Apple, SnakeOnStart, Thorns } from './components/MainObjs.js';
import drawApple from './components/drawApple.js';
import AppleCollision from './components/AppleCollision.js';
import { context, classes, deathClasses } from '../index.js';
import pause from './components/Pause.js';
import { decrease } from './components/ChangeCounter.js';
import phraseGenerator from './components/Phrase.js';
import playSound from './components/playSound.js';
import DrawThorns from './components/DrawThorn.js';
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
  isPaused = false,
  isThorns = false;
const EventSound = new Audio();
EventSound.src = '../resources/sounds/Event.mp3';

export { gameWidth, gameHeight, cubeWidth, cubeHeight };
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
  DrawThorns(context, isThorns);
  isThorns = true;
  Movement = setInterval(() => {
    Snake.forEach((item, i) => {
      context.clearRect(item.posX, item.posY, cubeWidth, cubeHeight);

      if (i === 0) {
        context.fillStyle = 'yellow';
        prevX = item.posX;
        prevY = item.posY;
        item.posX += dx;
        item.posY += dy;
        // -
        item.posX > gameWidth - cubeWidth && (item.posX = 0);
        item.posX < 0 && (item.posX = gameWidth - cubeWidth);
        // |
        item.posY > gameHeight - cubeHeight && (item.posY = 0);
        item.posY < 0 && (item.posY = gameHeight - cubeHeight);
      } else {
        if (Snake[i].posX === Apple.posX && Snake[i].posY == Apple.posY)
          drawApple(context);
        context.fillStyle = 'red';
        curX = item.posX;
        curY = item.posY;
        item.posX = prevX;
        item.posY = prevY;
        prevX = curX;
        prevY = curY;
      }

      context.fillRect(item.posX, item.posY, cubeWidth, cubeHeight);
      if (Snake[0].posX === Apple.posX && Snake[0].posY == Apple.posY)
        AppleCollision(Snake, context);
      if (Snake[0].posX === item.posX && Snake[0].posY === item.posY && i !== 0)
        Death(context);
      Thorns.forEach((item) => {
        if (Snake[0].posX === item.X && Snake[0].posY === item.Y)
          Death(context);
      });
    });
  }, interval);
}
function Death(context) {
  clearInterval(Movement);
  deathClasses.add('active');
  isThorns = false;
  phraseGenerator();
  Snake.map(async (cube) => {
    context.clearRect(cube.posX, cube.posY, cubeWidth, cubeHeight);
  });
  Thorns.map(async (cube) =>
    context.clearRect(cube.X, cube.Y, cubeWidth, cubeHeight)
  );
  Snake.splice(0);
  Thorns.splice(0);
  Snake.push(...JSON.parse(SnakeOnStart));
  dx = step;
  dy = 0;
  [oppositeKey, oppositeKeyRus, oppositeArrow] = ['a', 'ф', 'arrowleft'];
  decrease();
}
let [oppositeKey, oppositeKeyRus, oppositeArrow] = ['a', 'ф', 'arrowleft'];
let start;
document.addEventListener('keydown', (e) => {
  if (new Date() - start < interval - 20) return;
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
      if (deathClasses.contains('active')) {
        deathClasses.remove('active');
        isPaused = true;
      }
      runGame();
      break;
  }
  playSound(EventSound);
  start = new Date();
});
