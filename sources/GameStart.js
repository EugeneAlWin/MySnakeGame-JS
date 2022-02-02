let Snake = [
  { posX: 120, posY: 0 },
  { posX: 90, posY: 0 },
  { posX: 60, posY: 0 },
  { posX: 30, posY: 0 },
  { posX: 0, posY: 0 },
];
function randMult(max, mult) {
  return Math.floor(Math.random() * (max / mult)) * mult;
}
let Apple = {
  posX: 0,
  posY: 0,
};
let AppleX, AppleY;
let dx = 30,
  dy = 0;
let prevX, prevY, curX, curY;
let width = 30;
export default function GameStart(context) {
  drawApple();
  setInterval(() => {
    Snake.map((item, i) => {
      context.clearRect(item.posX, item.posY, width, 30);
      if (i === 0) {
        prevX = item.posX;
        prevY = item.posY;
        item.posX += dx;
        item.posY += dy;
        if (Snake[i].posX === Apple.posX && Snake[i].posY == Apple.posY) {
          Apple_HeadCollision(true);
        }
      } else {
        if (Snake[i].posX === Apple.posX && Snake[i].posY == Apple.posY)
          drawApple();
        curX = item.posX;
        curY = item.posY;
        item.posX = prevX;
        item.posY = prevY;
        prevX = curX;
        prevY = curY;
      }
      context.fillRect(item.posX, item.posY, width, 30);
    });
  }, 300);

  function Apple_HeadCollision() {
    let len = Snake.length - 1;
    Snake.push({
      PosX: Snake[len].posX - 30,
      PosY: Snake[len].posY,
    });
    console.log(Snake);
    drawApple();
  }
  function drawApple() {
    context.fillRect(
      (Apple.posX = randMult(840, 30)),
      (Apple.posY = randMult(660, 30)),
      30,
      30
    );
  }
}

document.addEventListener('keypress', (e) => {
  switch (e.key) {
    case 'w':
    case 'ц':
      dx = 0;
      dy = -30;
      break;
    case 'a':
    case 'ф':
      dx = -30;
      dy = 0;
      break;
    case 's':
    case 'ы':
      dx = 0;
      dy = 30;
      break;
    case 'd':
    case 'в':
      dx = 30;
      dy = 0;
      break;
  }
});
