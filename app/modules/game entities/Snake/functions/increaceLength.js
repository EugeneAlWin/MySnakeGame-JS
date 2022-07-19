import { snakeList } from '../../../constants/objects.js';

export function IncreaseLength() {
  snakeList.push({
    posX: snakeList[snakeList.length - 1].posX,
    posY: snakeList[snakeList.length - 1].posY,
  });
}
