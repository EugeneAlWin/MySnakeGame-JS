/**
 * @returns {boolean} true if apple is eaten, false in other case
 */
export function CheckAppleCollision(snakeList) {
  if (snakeList[0].posX === this.posX && snakeList[0].posY === this.posY) {
    this.DrawApple(snakeList);
    return true;
  }
  return false;
}
