import runGame from './modules/GameStart.js';
const canvas = document.getElementById('canvas'),
  context = canvas.getContext('2d');

export { context };
runGame();
