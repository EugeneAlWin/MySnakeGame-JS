import { IsABSEquals } from './functions/isABSEquals.js';
import { getCoordinates } from './functions/getCoordinates.js';
import { getRandomInt } from './functions/getRandomInt.js';
import { IsABSGreater } from './functions/isABSGreater.js';

export default class MathClass {
  static getRandomInt = getRandomInt;
  /**
   * @param {number} max
   *@param {number} multiple
   *@returns {number} returns a random number within max and a multiple of mult
   */
  static getCoordinates = getCoordinates;
  /**
   * @param {number} fnum first num
   *@param {number} snum second num
   *@returns {boolean} true if absolute values of numbers is equals
   */
  static IsABSEquals = IsABSEquals;
  /**
   * @param {number} fnum first number
   * @param {number} snum second number
   * @returns {boolean} true if absolute fnum is greater than snum
   */
  static IsABSGreater = IsABSGreater;
}
