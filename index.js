import GameStart from './sources/GameStart.js';
let canvas = document.getElementById('canvas'),
  context = canvas.getContext('2d');
context.fillStyle = 'red';

GameStart(context);
