import MathClass from './MathClass.js';
export default class Snake {
  snakeList = [
    { posX: 60, posY: 0 },
    { posX: 30, posY: 0 },
    { posX: 0, posY: 0 },
  ];
  snakeOnStart = JSON.stringify(this.snakeList);
  constructor(props) {
    this.context = props.canvas.getContext('2d');
    this.pixelSize = props.pixelSize;
    this.dx = props.dx;
    this.dy = props.dy;
    this.worldWidth = props.worldWidth;
    this.worldHeight = props.worldHeight;
    this.bodyColorTumbs = props.bodyColorTumbs;
    this.headColorTumbs = props.headColorTumbs;
    this.isDead = true;
  }
  DrawSnake() {
    this.snakeList.forEach((pixel, i) => {
      this.context.clearRect(
        pixel.posX,
        pixel.posY,
        this.pixelSize,
        this.pixelSize
      );
      if (i === 0) {
        this.context.fillStyle = this.snakeColor.head;
        this.prevX = pixel.posX;
        this.prevY = pixel.posY;
        pixel.posX += this.dx;
        pixel.posY += this.dy;
        //-- horizontal collision with border
        pixel.posX > this.worldWidth - this.pixelSize && (pixel.posX = 0);
        pixel.posX < 0 && (pixel.posX = this.worldWidth - this.pixelSize);

        //-- vertical collision with border
        if (pixel.posY > this.worldHeight - this.pixelSize) pixel.posY = 0;
        if (pixel.posY < 0) pixel.posY = this.worldHeight - this.pixelSize;
      } else {
        this.context.fillStyle = this.snakeColor.body;
        let currX = pixel.posX,
          currY = pixel.posY;
        pixel.posX = this.prevX;
        pixel.posY = this.prevY;
        this.prevX = currX;
        this.prevY = currY;
      }
      this.context.fillRect(
        pixel.posX,
        pixel.posY,
        this.pixelSize,
        this.pixelSize
      );
    });
    if (
      this.snakeList
        .slice(1)
        .findIndex(
          (e) =>
            e.posX === this.snakeList[0].posX &&
            e.posY === this.snakeList[0].posY
        ) !== -1
    )
      this.isDead = true;
  }

  SetDirection(dx, dy) {
    if (
      (!MathClass.CheckABS(this.dx, dx) && !MathClass.CheckABS(this.dy, dy)) ||
      this.isDead
    ) {
      this.dx = dx;
      this.dy = dy;
    }
  }
  IncreaseLength() {
    this.snakeList.push({
      posX: this.snakeList[this.snakeList.length - 1].posX,
      posY: this.snakeList[this.snakeList.length - 1].posY,
    });
  }
  SetColor(snakeColor = null) {
    //don't forget to send the color to the snake in World.js
    this.snakeColor = snakeColor ?? {
      body: `rgb(${this.bodyColorTumbs[0].value},
        ${this.bodyColorTumbs[1].value},
        ${this.bodyColorTumbs[2].value})`,
      head: `rgb(${this.headColorTumbs[0].value},
        ${this.headColorTumbs[1].value},
        ${this.headColorTumbs[2].value})`,
    };
  }
  Destroy() {
    this.snakeList.map((pixel) =>
      this.context.clearRect(
        pixel.posX,
        pixel.posY,
        this.pixelSize,
        this.pixelSize
      )
    );
    this.snakeList.splice(0);
    this.snakeList.push(...JSON.parse(this.snakeOnStart));
  }
}
