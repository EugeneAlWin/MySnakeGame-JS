import { HUDChangeRadios } from '../../constants/forms.js';
import { switchHUD } from '../helpers/switchHUD.js';

export function InitHUDChanger() {
  HUDChangeRadios.forEach((e) => {
    e.addEventListener('change', () => {
      switchHUD(this.currentHUD, e.value);
      this.currentHUD = e.value;
      localStorage.setItem('HUD', this.currentHUD);
    });
  });
}
