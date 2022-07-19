import { soundSwitcher } from '../../../constants/forms.js';
export function PlaySound(sound) {
  if (!soundSwitcher[0].checked) return;
  const soundName = sound.src.match(/[^\/]+$/)[0];
  const switcher = soundSwitcher.filter((i) => i.value === soundName);
  if (!switcher[0].checked) return;
  sound.play();
}
