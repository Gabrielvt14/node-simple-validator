/**
 * @param {*} string a string value
 * @param {*} options
 * @param {*} options.allowEmpty accept an empty string - Default is false
 * 
 * @return boolean
 * 
 * @example
 * const { isString } = require("node-simple-validator")
 * isString("test") // true
 * isString("", { allowEmpty: true }) // true
 * isString("") // false
 */
module.exports = (string, options = { allowEmpty: false }) => {
  if (typeof string !== 'string' || !string instanceof String) return false
  if (!options.allowEmpty && string === "") return false
  return true
}
