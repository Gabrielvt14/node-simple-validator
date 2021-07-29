"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
exports.default = (function (_string, options) {
    if (options === void 0) { options = { allowEmpty: false }; }
    if (typeof _string !== 'string' || !_string instanceof String)
        return false;
    if (!options.allowEmpty && _string === "")
        return false;
    return true;
});
