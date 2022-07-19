import { appleColors } from '../../../constants/objects.js';
import {
  pixelSize,
  worldHeight,
  worldWidth,
} from '../../../constants/values.js';
import MathClass from '../../../math/IndexMath.js';
import { drawCircle } from '../helpers/drawCircle.js';
export function DrawApple(snakeList = undefined) {
  this.posX = MathClass.getCoordinates(worldWidth, pixelSize);
  this.posY = MathClass.getCoordinates(worldHeight, pixelSize);
  if (snakeList) {
    if (
      snakeList.findIndex(
        (el) => el.posX === this.posX && el.posY === this.posY
      ) !== -1
    )
      this.DrawApple(snakeList);
  }
  this.context.fillStyle =
    appleColors[MathClass.getRandomInt(appleColors.length)].color;

  drawCircle(this.context, this.posX, this.posY, pixelSize);
}
