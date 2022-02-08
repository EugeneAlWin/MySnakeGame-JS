import phraseGenerator from './Phrase.js';

function pause(Movement) {
  clearInterval(Movement);
  phraseGenerator();
}

export default pause;
