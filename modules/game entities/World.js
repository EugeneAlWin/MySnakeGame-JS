import Apple from './Apple.js';
import Snake from './Snake.js';
import Wolf from './Wolf.js';
export default class World {
  score = 0;
  constructor(props) {
    this.worldHeight = props.canvas.height;
    this.worldWidth = props.canvas.width;
    this.pixelSize = Math.round(this.worldWidth / 28);
    this.frequency = props.frequency;
    this.pauseClassList = props.pauseClassList;
    this.deathClassList = props.deathClassList;
    this.quotesContainer = props.quotesContainer;
    this.scoreContainer = props.scoreContainer;
    this.lastScore = props.lastScore;
    this.bestScore = props.bestScore;
    this.pickAppleSound = props.pickAppleSound;
    this.deathSound = props.deathSound;
    this.soundSwitcher = props.soundSwitcher;
    this.apple = new Apple({
      canvas,
      pixelSize: this.pixelSize,
      worldHeight: this.worldHeight,
      worldWidth: this.worldWidth,
    });
    this.snake = new Snake({
      canvas,
      worldHeight: this.worldHeight,
      worldWidth: this.worldWidth,
      pixelSize: this.pixelSize,
      bodyColorTumbs: props.bodyColorTumbs,
      headColorTumbs: props.headColorTumbs,
      step: props.step,
      dx: props.dx,
      dy: props.dy,
    });
    this.GenerateQuote();
  }
  SetInterval(frequency) {
    this.interval = setInterval(() => {
      this.snake.DrawSnake();
      if (this.apple.CheckAppleCollision(this.snake.snakeList)) {
        this.snake.IncreaseLength();
        this.IncreaseScore();
        this.PlaySound(this.pickAppleSound);
      }
      if (this.snake.isDead) this.GameOver();
    }, frequency);
  }
  ReSetInterval(frequency) {
    this.frequency = frequency;
    if (!this.interval) return;
    clearInterval(this.interval);
    this.SetInterval(this.frequency);
  }
  InitWorld() {
    this.apple.DrawApple();
    this.SetInterval(this.frequency);
  }
  SetPause() {
    clearInterval(this.interval);
    this.pauseClassList.add('active');
    this.GenerateQuote();
  }
  SetPlay() {
    this.pauseClassList.remove('active');
    this.SetInterval(this.frequency);
  }
  GenerateQuote() {
    this.quotesContainer.forEach(
      (item) =>
        (item.innerHTML = Wolf.quotesGenerator() + '<br /> &copy; Волк.')
    );
  }
  IncreaseScore() {
    this.score++;
    this.scoreContainer.innerText = `Счёт: ${this.score}`;
  }
  DecreaseScore() {
    let tempScore = +localStorage.getItem('prev');
    if (this.score > tempScore) {
      localStorage.setItem('prev', this.score.toString());
      tempScore = this.score;
      this.bestScore.innerText = `Лучший счёт: ${tempScore}`;
    }
    this.lastScore.innerHTML = `Игра окончена! 
    Ваш счёт: ${this.score}.<br/> 
    Лучший счёт: ${tempScore} <br/>
    Нажмите &#171;Ввод&#187;, чтобы начать сначала.`;
    this.score = 0;
    this.scoreContainer.innerText = `Счёт: ${this.score}`;
  }
  PlaySound(sound) {
    if (!this.soundSwitcher[0].checked) return;
    const soundName = sound.src.match(/[^\/]+$/)[0];
    const switcher = [...this.soundSwitcher].filter(
      (i) => i.value === soundName
    );
    if (!switcher[0].checked) return;
    sound.play();
  }

  GameOver() {
    clearInterval(this.interval);
    this.PlaySound(this.deathSound);
    this.DecreaseScore();
    this.snake.Destroy();
    this.apple.Destroy();
    this.deathClassList.add('active');
  }
}
