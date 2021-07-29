/**
 * @param {*} number a number value
 * 
 * @return boolean
 * 
 * @example
 * const { isNumber } = require("node-simple-validator")
 * isNumber(1) // true
 */
 export default (number: any) => {
  return typeof number === 'number'
}
