export function drawCircle(context, posX, posY, pixelSize) {
  context.beginPath();
  context.arc(
    posX + pixelSize / 2,
    posY + pixelSize / 2,
    pixelSize / 2 - 2,
    0,
    2 * Math.PI
  );
  context.fill();
  context.stroke();
  context.closePath();
}
