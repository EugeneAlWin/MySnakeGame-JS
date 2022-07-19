import MathClass from '../../../math/IndexMath.js';
import Wolf from '../IndexWolf.js';

export function QuotesGenerator() {
  return Wolf.quotes[MathClass.getRandomInt(Wolf.quotes.length)].text;
}
