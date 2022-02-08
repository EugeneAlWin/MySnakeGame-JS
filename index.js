import runGame from './modules/Core.js';

const canvas = document.getElementById('canvas'),
  context = canvas.getContext('2d');
let classes = document.getElementById('pause_container').classList,
  deathClasses = document.getElementById('death_container').classList;
const count_container = document.getElementById('counter'),
  prev_count_container = document.getElementById('prev_counter'),
  last_count = document.getElementById('last_count');
const phrase = document.querySelectorAll('.phrase');
document.getElementById('pause_container').addEventListener('click', runGame);

export {
  context,
  classes,
  deathClasses,
  count_container,
  prev_count_container,
  last_count,
  phrase,
};
runGame();
