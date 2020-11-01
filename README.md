# validation-js
A simple data validator

#### Validators
* CPF
* Email

#### Install
```bash
npm install --save validation-js
```

#### To validate CPF
```js
const { validateCpf } = require('validation-js')
validateCpf('CPF')
// if valid, return true
```

#### To validate Email
```js
const { validateEmail } = require('validation-js')
validateEmail('valid@email.com') // true
```

---

#### To more validations, you can contribute.
Just open pull request with a new folder on `src/validators` path, write a validator function and modify `index.js` file in validators folder. The validator function must be return only a boolean.


