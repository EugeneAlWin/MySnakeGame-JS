import { soundSwitcher } from './forms.js';
export const soundFull = soundSwitcher.filter((e) => e.id === 'sound_full')[0], //config, defines may sound play or not
  keyEventSound = new Audio(
    `./resources/sounds/${
      soundSwitcher.filter((i) => i.id === 'event')[0].value
    }`
  ),
  pickAppleSound = new Audio(
    `./resources/sounds/${
      soundSwitcher.filter((i) => i.id === 'pickup')[0].value
    }`
  ),
  deathSound = new Audio(
    `./resources/sounds/${
      soundSwitcher.filter((i) => i.id === 'gameover')[0].value
    }`
  );
