import MathClass from './MathClass.js';
export default class Apple {
  posX = 0;
  posY = 0;
  colors = [
    { color: 'red' },
    { color: 'orange' },
    { color: 'blue' },
    { color: 'purple' },
    { color: 'pink' },
  ];
  constructor(props) {
    this.context = props.canvas.getContext('2d');
    this.pixelSize = props.pixelSize;
    this.worldHeight = props.worldHeight;
    this.worldWidth = props.worldWidth;
  }
  DrawApple(snakeList = undefined) {
    this.posX = MathClass.getCoordinates(this.worldWidth, this.pixelSize);
    this.posY = MathClass.getCoordinates(this.worldHeight, this.pixelSize);
    if (snakeList) {
      if (
        snakeList.findIndex(
          (el) => el.posX === this.posX && el.posY === this.posY
        ) !== -1
      )
        this.DrawApple(snakeList);
    }
    this.context.fillStyle =
      this.colors[MathClass.getRandomInt(this.colors.length - 1)].color;

    this.context.beginPath();
    this.context.arc(
      this.posX + this.pixelSize / 2,
      this.posY + this.pixelSize / 2,
      this.pixelSize / 2 - 2,
      0,
      2 * Math.PI
    );
    this.context.fill();
    this.context.stroke();
    this.context.closePath();
  }
  Destroy() {
    this.context.clearRect(
      this.posX,
      this.posY,
      this.pixelSize,
      this.pixelSize
    );
  }
  /**
   * @returns {boolean} true if apple is eaten, false in another case
   */
  CheckAppleCollision(snakeList) {
    for (let i = snakeList.length - 1; i >= 0; i--) {
      if (i === 0) {
        if (
          snakeList[i].posX === this.posX &&
          snakeList[i].posY === this.posY
        ) {
          this.DrawApple(snakeList);
          return true;
        }
      } else {
        if (
          snakeList[i].posX === this.posX &&
          snakeList[i].posY === this.posY
        ) {
          this.DrawApple(snakeList);
          return false;
        }
      }
    }
    return false;
  }
}
