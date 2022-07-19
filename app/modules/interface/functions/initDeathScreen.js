import {
  deathClassList,
  deathContainer,
  pauseContainer,
} from '../../constants/containers.js';
import { step } from '../../constants/values.js';

export function InitDeathScreen() {
  pauseContainer.addEventListener('click', () => {
    this.worldInstance.isGamePaused = !this.worldInstance.isGamePaused;
    this.worldInstance.SetPlay();
  });
  deathContainer.addEventListener('click', () => {
    this.worldInstance.dx = step;
    this.worldInstance.dy = 0; // must be before snake.SetDirection()
    this.worldInstance.snake.SetDirection(
      this.worldInstance.dx,
      this.worldInstance.dy
    ); // must be before snake.isDead = false
    this.worldInstance.snake.isDead = false; // must be before InitWorld()
    deathClassList.remove('active');
    this.worldInstance.InitWorld();
  });
}
