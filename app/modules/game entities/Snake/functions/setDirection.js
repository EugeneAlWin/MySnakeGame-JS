import MathClass from '../../../math/IndexMath.js';

export function SetDirection(dx, dy) {
  if (
    !(
      MathClass.IsABSEquals(this.dx, dx) && MathClass.IsABSEquals(this.dy, dy)
    ) ||
    this.isDead
  ) {
    this.dx = dx;
    this.dy = dy;
  }
}
