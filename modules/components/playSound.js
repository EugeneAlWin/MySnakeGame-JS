const soundSwitcher = document.getElementById('sound_toggle');
let soundSwitcherClasses = soundSwitcher.classList;
let flag = true;
document.getElementById('sound_toggle').addEventListener('click', () => {
  soundSwitcherClasses.contains('switch-on')
    ? soundSwitcherClasses.remove('switch-on')
    : soundSwitcherClasses.add('switch-on');
  flag = soundSwitcherClasses.contains('switch-on');
});
export default function playSound(event) {
  if (!flag) return;
  event.play();
}
