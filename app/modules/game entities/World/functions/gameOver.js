import { deathClassList } from '../../../constants/containers.js';
import { deathSound } from '../../../constants/audios.js';
export function GameOver() {
  clearInterval(this.interval);
  this.PlaySound(deathSound);
  this.DecreaseScore();
  this.snake.Destroy();
  this.apple.Destroy();
  deathClassList.add('active');
}
