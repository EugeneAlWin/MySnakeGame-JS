import { canvas } from '../../constants/containers.js';
import { CheckAppleCollision } from './functions/checkAppleCollision.js';
import { Destroy } from './functions/destroy.js';
import { DrawApple } from './functions/drawApple.js';
export default class Apple {
  posX = 0;
  posY = 0;
  constructor() {
    this.context = canvas.getContext('2d');
    this.DrawApple = DrawApple;
    this.CheckAppleCollision = CheckAppleCollision;
    this.Destroy = Destroy;
  }
}
