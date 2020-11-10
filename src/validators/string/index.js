/**
 * @param {*} string a string value
 * 
 * @return boolean
 * 
 * @example
 * const { isString } = require("node-simple-validator")
 * isString("test") // true
 */
module.exports = (string) => {
  return typeof string === 'string' || string instanceof String
}
