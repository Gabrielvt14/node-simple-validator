"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @param {*} email a valid email
 *
 * @return boolean
 *
 * @example
 * const { isEmail } = require("node-simple-validator")
 * isEmail("invalid.email.com") // false
 */
exports.default = (function (email) {
    var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
});
