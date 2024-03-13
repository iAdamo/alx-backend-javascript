/* eslint-disable no-underscore-dangle */
export default class Airport {
  constructor(name, code) {
    if (typeof name || typeof code !== 'string') {
      throw new TypeError('name and code must be string');
    }
    this._name = name;
    this._code = code;
  }

  /**
   * returns a string description of the airport code
   */
  toString() {
    return `[object ${this._code}]`;
  }
}
