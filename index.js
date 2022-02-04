import runGame from './modules/Core.js';
const canvas = document.getElementById('canvas'),
  context = canvas.getContext('2d');
let classes = document.getElementById('pause_container').classList;
const count_container = document.getElementById('counter');
const prev_count_container = document.getElementById('prev_counter');
export { context, classes, count_container, prev_count_container };
runGame();
