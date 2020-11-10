/**
 * @param {*} number a number value
 * 
 * @return boolean
 * 
 * @example
 * const { isNumber } = require("node-simple-validator")
 * isNumber(1) // true
 */
module.exports = (number) => {
  return typeof number === 'number'
}
