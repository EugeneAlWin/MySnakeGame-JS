import { formsPluses } from '../../constants/containers.js';
import { toggleActiveWrapper } from '../helpers/toggleActiveWrapper.js';

export function InitFormsWrapper() {
  formsPluses.forEach((formPlus) => {
    formPlus.addEventListener('click', (e) => {
      toggleActiveWrapper(e.target, false);
    });
  });
}
