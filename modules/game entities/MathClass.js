export default class MathClass {
  constructor() {}
  static getRandomInt = (max) => Math.floor(Math.random() * max);
  /**
   * @param {number} max
   *@param {number} multiple
   *@returns {number} returns a random number within max and a multiple of mult
   */
  static getCoordinates = (max, mult) =>
    Math.floor(Math.random() * (max / mult)) * mult;
  /**
   * @param {number} fnum first num
   *@param {number} snum second num
   *@returns {boolean} true if absolute values of nums is equals
   */
  static CheckABS = (fnum, snum) => Math.abs(fnum) === Math.abs(snum);
}
