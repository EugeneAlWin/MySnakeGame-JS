import { pickAppleSound } from '../../../constants/audios.js';
import { snakeList } from '../../../constants/objects.js';

export function SetInterval(frequency) {
  this.interval = setInterval(() => {
    this.snake.DrawSnake();
    if (this.apple.CheckAppleCollision(snakeList)) {
      this.snake.IncreaseLength();
      this.IncreaseScore();
      this.PlaySound(pickAppleSound);
    }
    if (this.snake.isDead) this.GameOver();
  }, frequency);
}
