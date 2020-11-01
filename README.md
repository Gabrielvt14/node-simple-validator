# node-simple-validator
A simple data validator

#### Validators
* CPF
* Email

#### Installation
```bash
# Using npm
npm install --save node-simple-validator

# Using yarn
yarn add node-simple-validator
```

#### To validate CPF
```js
const { validateCpf } = require('node-simple-validator')
validateCpf('CPF')
// if valid, return true
```

#### To validate Email
```js
const { validateEmail } = require('node-simple-validator')
validateEmail('valid@email.com') // true
```

---

#### To more validations, you can contribute.
Just open pull request with a new folder on `src/validators` path, write a validator function and modify `index.js` file in validators folder. The validator function must be return only a boolean.

---

#### Run tests
```bash
npm run test
```
