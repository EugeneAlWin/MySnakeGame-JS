import { snakeColor, snakeList } from '../../../constants/objects.js';
import {
  pixelSize,
  worldHeight,
  worldWidth,
} from '../../../constants/values.js';

export function DrawSnake() {
  snakeList.forEach((pixel, i) => {
    this.context.clearRect(pixel.posX, pixel.posY, pixelSize, pixelSize);
    if (i === 0) {
      this.context.fillStyle = snakeColor.head;
      this.prevX = pixel.posX;
      this.prevY = pixel.posY;
      pixel.posX += this.dx;
      pixel.posY += this.dy;
      //-- horizontal collision with border
      if (pixel.posX > worldWidth - pixelSize) pixel.posX = 0;
      if (pixel.posX < 0) pixel.posX = worldWidth - pixelSize;

      //-- vertical collision with border
      if (pixel.posY > worldHeight - pixelSize) pixel.posY = 0;
      if (pixel.posY < 0) pixel.posY = worldHeight - pixelSize;
    } else {
      this.context.fillStyle = snakeColor.body;
      let currX = pixel.posX,
        currY = pixel.posY;
      pixel.posX = this.prevX;
      pixel.posY = this.prevY;
      this.prevX = currX;
      this.prevY = currY;
    }
    this.context.fillRect(pixel.posX, pixel.posY, pixelSize, pixelSize);
  });
  if (
    snakeList
      .slice(1)
      .findIndex(
        (e) => e.posX === snakeList[0].posX && e.posY === snakeList[0].posY
      ) !== -1
  )
    this.isDead = true;
}
