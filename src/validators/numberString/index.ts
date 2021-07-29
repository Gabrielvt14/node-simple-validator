/**
 * Validate if is number string
 * @param {*} numberString number or string value
 * @param {*} options object
 * @param {*} options.onlyString boolean to validate if first param is only string with number, example: "2500"
 * 
 * @return boolean
 * 
 * @example
 * const { isNumberString } = require("node-simple-validator")
 * isNumberString("2500") // true
 * isNumberString(2500) // true
 * isNumberString("test") // false
 */
 export default (numberString: string) => {
  return new RegExp(/^\d+$/g).test(numberString)
}
