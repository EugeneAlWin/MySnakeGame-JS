import { pauseClassList } from '../../../constants/containers.js';
export function SetPlay() {
  this.isGamePaused = false;
   pauseClassList.remove('active');
  this.SetInterval(this.frequency);
}
