import { formsPluses, wrappers } from '../../constants/containers.js';

export const toggleActiveWrapper = (currentPlusOrKey, isByKey = false) => {
  let currentPlus = currentPlusOrKey;
  if (isByKey) {
    let key = +currentPlusOrKey;
    if (!(key >= 1 && key <= 9 && key <= wrappers.length)) return;
    currentPlus = formsPluses[--key];
  }
  const currWrapper = currentPlus.parentNode.nextElementSibling;
  const currWrapperClasses = currWrapper.classList;
  if (currWrapperClasses.contains('active')) {
    currWrapperClasses.remove('active');
    currentPlus.innerText = '+';
  } else {
    wrappers.forEach((wrapper) => wrapper.classList.remove('active'));
    formsPluses.forEach((formPlus) => (formPlus.innerText = '+'));
    currWrapperClasses.toggle('active');
    currentPlus.innerText = currentPlus.innerText === '+' ? '-' : '+';
  }
};
