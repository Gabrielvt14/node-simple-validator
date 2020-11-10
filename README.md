# node-simple-validator
[![Version](https://img.shields.io/npm/v/node-simple-validator.svg)](https://www.npmjs.com/package/node-simple-validator) [![Downloads](https://img.shields.io/npm/dt/node-simple-validator.svg)](https://www.npmjs.com/package/node-simple-validator) ![Test](https://github.com/Gabrielvt14/node-simple-validator/workflows/Test/badge.svg?branch=main)

A simple data validator

#### Validators
* CPF
* Email
* Number
* Number String (Example: "2500" or 2500)
* String

#### Installation
```bash
# Using npm
npm install --save node-simple-validator

# Using yarn
yarn add node-simple-validator
```

#### To validate CPF
```js
const { isCpf } = require('node-simple-validator')
isCpf('CPF')
// if valid, return true
```

#### To validate Email
```js
const { isEmail } = require('node-simple-validator')
isEmail('valid@email.com') // true
```

#### To validate Number
```js
const { isNumber } = require('node-simple-validator')
isNumber(2500) // true
```

#### To validate Number String
```js
const { isNumberString } = require('node-simple-validator')
isNumberString("2500") // true
isNumberString(2500) // true
```

#### To validate String
```js
const { isString } = require('node-simple-validator')
isString('valid string') // true
isString('', { allowEmpty: true }) // true
```

---

#### To more validations, you can contribute.
Just open pull request with a new folder on `src/validators` path, write a validator function and modify `index.js` file in validators folder. The validator function must be return only a boolean.

---

#### Run tests
```bash
npm run test
```
