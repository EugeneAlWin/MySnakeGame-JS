import { scoreContainer } from '../../../constants/containers.js';
export function IncreaseScore() {
  this.score++;
  scoreContainer.innerText = `Счёт: ${this.score}`;
}
