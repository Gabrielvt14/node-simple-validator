"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @param {*} number a number value
 *
 * @return boolean
 *
 * @example
 * const { isNumber } = require("node-simple-validator")
 * isNumber(1) // true
 */
exports.default = (function (number) {
    return typeof number === 'number';
});
