export function ResetInterval(frequency) {
  this.frequency = frequency;
  if (!this.interval) return;
  clearInterval(this.interval);
  this.SetInterval(this.frequency);
}
