import { phrase } from '../../index.js';
import { getRandomInt } from './GetRandomInt.js';
const phrases = [
  { text: `Главное не то, что было будет, а то, что будет было` },
  { text: `Сначала потом, затем снова опять` },
  { text: `Глупо рассказывать людям о 狼迹等待着, всё равно не поймут` },
  { text: `Если тебя съели - у тебя есть два выхода` },
  { text: `Настоящий отец - мать сын троюродный дед` },
  { text: `В этой жизни ты либо волк, либо не волк` },
  { text: `Враги не предают, предают враги` },
  { text: `Я редко когда думаю, а ещё реже думаю` },
];
export default function phraseGenerator() {
  phrase.forEach(
    (item) => (item.innerText = phrases[getRandomInt(phrases.length)].text)
  );
}
