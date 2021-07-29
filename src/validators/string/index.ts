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
 export default (_string: any, options: any = { allowEmpty: false }) => {
  if (typeof _string !== 'string' || !_string as any instanceof String) return false
  if (!options.allowEmpty && _string === "") return false
  return true
}
