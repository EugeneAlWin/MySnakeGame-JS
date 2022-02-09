export default function playSound(event) {
  if (!document.getElementById('sound_toggle').checked) return;
  event.play();
}
