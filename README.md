# validify-js
A simple data validator

#### Validators
* CPF
* Email

#### Installation
```bash
# Using npm
npm install --save validify-js

# Using yarn
yarn add validify-js
```

#### To validate CPF
```js
const { validateCpf } = require('validify-js')
validateCpf('CPF')
// if valid, return true
```

#### To validate Email
```js
const { validateEmail } = require('validify-js')
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
