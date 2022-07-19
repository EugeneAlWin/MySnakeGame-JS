import { keyPressDispatcher } from '../helpers/keyPressDispatcher.js';

export function InitKeyboardListener() {
  document.addEventListener('keydown', (e) => {
    let pressedKey = e.code.toLowerCase();
    const moveKeys =
      pressedKey.match(/key[w,a,s,d]/) ??
      pressedKey.match(/arrow(up|down|left|right)/) ??
      pressedKey.match(/space|enter/);
    const soundKeys = pressedKey.match(/key[h,j,k,l]/);
    const wrapKeys = pressedKey.match(/\$*[1-9]/);
    if (!(moveKeys ?? soundKeys ?? wrapKeys)) return;
    keyPressDispatcher(moveKeys, soundKeys, wrapKeys, e, this.worldInstance);
  });
}
