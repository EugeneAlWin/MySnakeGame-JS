import { quotesContainer } from '../../../constants/containers.js';
import Wolf from '../../Wolf/IndexWolf.js';
export function GenerateQuote() {
  quotesContainer.forEach(
    (item) => (item.innerHTML = Wolf.quotesGenerator() + '<br /> &copy; Волк.')
  );
}
