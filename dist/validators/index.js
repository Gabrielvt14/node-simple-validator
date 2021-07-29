"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNumberString = exports.isNumber = exports.isString = exports.isEmail = exports.isCpf = void 0;
var cpf_1 = __importDefault(require("./cpf"));
exports.isCpf = cpf_1.default;
var email_1 = __importDefault(require("./email"));
exports.isEmail = email_1.default;
var string_1 = __importDefault(require("./string"));
exports.isString = string_1.default;
var number_1 = __importDefault(require("./number"));
exports.isNumber = number_1.default;
var numberString_1 = __importDefault(require("./numberString"));
exports.isNumberString = numberString_1.default;
