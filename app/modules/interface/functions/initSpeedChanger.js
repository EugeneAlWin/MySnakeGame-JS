import { speedTumb } from '../../constants/forms.js';
import { speedLimit } from '../../constants/values.js';
export function InitSpeedChanger() {
  speedTumb.addEventListener('change', () => {
    this.worldInstance.ResetInterval(speedLimit - +speedTumb.value);
    localStorage.setItem('Speed', speedTumb.value);
  });
}
