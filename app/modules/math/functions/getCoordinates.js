export function getCoordinates(max, mult) {
  return Math.floor(Math.random() * (max / mult)) * mult;
}
