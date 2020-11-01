const chai = require('chai')

const { validateEmail } = require('./../')

const expect = chai.expect

describe('testing email', () => {
  it('an invalid email', () => {
    expect(validateEmail('invalidemail')).to.be.false
    expect(validateEmail('invalid-email')).to.be.false
    expect(validateEmail('invalid.email')).to.be.false
    expect(validateEmail('invalid@email')).to.be.false
    expect(validateEmail('invalid@emai.l')).to.be.false
  })

  it('a valid email', () => {
    expect(validateEmail('valid@email.com')).to.be.true
  })
})
