import { pauseClassList } from '../../../constants/containers.js';
export function SetPause() {
  this.isGamePaused = true;
  clearInterval(this.interval);
  pauseClassList.add('active');
  this.GenerateQuote();
}
