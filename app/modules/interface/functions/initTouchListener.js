import { canvas } from '../../constants/containers.js';
import MathClass from '../../math/IndexMath.js';

export function InitTouchListener() {
  let center = {},
    time = Date.now();
  canvas.addEventListener('touchstart', (e) => {
    e.preventDefault();
    center.X = e.touches[0].clientX;
    center.Y = e.touches[0].clientY;
    if (Date.now() - time < 200) this.worldInstance.SetPause();
    time = Date.now();
  });

  canvas.addEventListener('touchend', (e) => {
    e.preventDefault();
    const deltaX = e.changedTouches[0].clientX - center.X,
      deltaY = e.changedTouches[0].clientY - center.Y;
    if (MathClass.IsABSGreater(deltaX, deltaY))
      this.worldInstance.SwitchDirection(deltaX > 0 ? 'keyd' : 'keya');
    else this.worldInstance.SwitchDirection(deltaY > 0 ? 'keys' : 'keyw');
  });
}
