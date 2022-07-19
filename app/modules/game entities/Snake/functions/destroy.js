import { defaultSnake, snakeList } from '../../../constants/objects.js';
import { pixelSize } from '../../../constants/values.js';

export function Destroy() {
  snakeList.map((pixel) =>
    this.context.clearRect(pixel.posX, pixel.posY, pixelSize, pixelSize)
  );
  snakeList.splice(0);
  snakeList.push(...JSON.parse(defaultSnake));
}
