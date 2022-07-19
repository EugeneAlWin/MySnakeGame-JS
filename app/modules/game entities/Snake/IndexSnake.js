import { canvas } from '../../constants/containers.js';
import { snakeDirection } from '../../constants/objects.js';
import { Destroy } from './functions/destroy.js';
import { DrawSnake } from './functions/drawSnake.js';
import { IncreaseLength } from './functions/increaceLength.js';
import { SetColor } from './functions/setColor.js';
import { SetDirection } from './functions/setDirection.js';
export default class Snake {
  constructor() {
    this.context = canvas.getContext('2d');
    this.dx = snakeDirection.dx;
    this.dy = snakeDirection.dy;
    this.isDead = true;
    this.DrawSnake = DrawSnake;
    this.SetDirection = SetDirection;
    this.IncreaseLength = IncreaseLength;
    this.SetColor = SetColor;
    this.Destroy = Destroy;
  }
}
