import { pixelSize } from '../../../constants/values.js';

export function Destroy() {
  this.context.clearRect(this.posX, this.posY, pixelSize, pixelSize);
}
