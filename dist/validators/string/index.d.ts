declare const _default: (_string: any, options?: any) => boolean;
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
export default _default;
