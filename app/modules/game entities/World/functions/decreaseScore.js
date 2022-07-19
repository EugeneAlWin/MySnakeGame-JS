import {
  bestScore,
  lastScore,
  scoreContainer,
} from '../../../constants/containers.js';
export function DecreaseScore() {
  let tempScore = +localStorage.getItem('prev');
  if (this.score > tempScore) {
    localStorage.setItem('prev', this.score.toString());
    tempScore = this.score;
    bestScore.innerText = `Лучший счёт: ${tempScore}`;
  }
  lastScore.innerHTML = `Игра окончена! 
    Ваш счёт: ${this.score}.<br/> 
    Лучший счёт: ${tempScore} <br/>
    Нажмите на экран или &#171;Ввод&#187;, чтобы начать сначала.`;
  this.score = 0;
  scoreContainer.innerText = `Счёт: ${this.score}`;
}
