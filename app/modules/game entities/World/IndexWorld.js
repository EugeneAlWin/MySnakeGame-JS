import Snake from '../Snake/IndexSnake.js';
import Apple from '../Apple/IndexApple.js';
import { SetInterval } from './functions/setInterval.js';
import { ResetInterval } from './functions/resetInterval.js';
import { InitWorld } from './functions/initWorld.js';
import { SetPause } from './functions/setPause.js';
import { SetPlay } from './functions/setPlay.js';
import { GenerateQuote } from './functions/genetareQuote.js';
import { IncreaseScore } from './functions/increaseScore.js';
import { DecreaseScore } from './functions/decreaseScore.js';
import { PlaySound } from './functions/playSound.js';
import { GameOver } from './functions/gameOver.js';
import { SwitchDirection } from './functions/switchDirection.js';

export default class World {
  timeStart = 0;
  isGamePaused = false;
  score = 0;
  constructor() {
    this.SetInterval = SetInterval;
    this.ResetInterval = ResetInterval;
    this.InitWorld = InitWorld;
    this.SetPause = SetPause;
    this.SetPlay = SetPlay;
    this.GenerateQuote = GenerateQuote;
    this.IncreaseScore = IncreaseScore;
    this.DecreaseScore = DecreaseScore;
    this.PlaySound = PlaySound;
    this.GameOver = GameOver;
    this.SwitchDirection = SwitchDirection;

    this.apple = new Apple();
    this.snake = new Snake();
    this.GenerateQuote();
  }
}
