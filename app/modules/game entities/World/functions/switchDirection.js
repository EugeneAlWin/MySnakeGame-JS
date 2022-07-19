import { keys } from '../../../constants/keys.js';
import { deathClassList } from '../../../constants/containers.js';
import { step } from '../../../constants/values.js';
import { keyEventSound } from '../../../constants/audios.js';
import { snakeDirection } from '../../../constants/objects.js';
export function SwitchDirection(key) {
  if (new Date() - this.timeStart < this.frequency - 100) return; //return if user pressed key too fast
  if (keys.left.indexOf(key) !== -1) {
    snakeDirection.dx = -step;
    snakeDirection.dy = 0;
  } else if (keys.right.indexOf(key) !== -1) {
    snakeDirection.dx = step;
    snakeDirection.dy = 0;
  } else if (keys.up.indexOf(key) !== -1) {
    snakeDirection.dx = 0;
    snakeDirection.dy = -step;
  } else if (keys.down.indexOf(key) !== -1) {
    snakeDirection.dx = 0;
    snakeDirection.dy = step;
  } else if (keys.space === key) {
    if (this.snake.isDead) return;
    !this.isGamePaused ? this.SetPause() : this.SetPlay();
  } else if (keys.enter === key) {
    if (!this.snake.isDead) return;
    snakeDirection.dx = step;
    snakeDirection.dy = 0; // must be before snake.SetDirection()
    this.snake.SetDirection(snakeDirection.dx, snakeDirection.dy); // must be before snake.isDead = false
    this.snake.isDead = false; // must be before this.InitWorld()
    deathClassList.remove('active');
    this.InitWorld();
    return;
  }
  this.PlaySound(keyEventSound);
  this.snake.SetDirection(snakeDirection.dx, snakeDirection.dy);
  this.timeStart = new Date();
}
