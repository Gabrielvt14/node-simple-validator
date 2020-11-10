const chai = require('chai')

const { isEmail } = require('./../')

const expect = chai.expect

describe('testing isEmail', () => {
  it('an invalid email', () => {
    expect(isEmail('invalidemail')).to.be.false
    expect(isEmail('invalid-email')).to.be.false
    expect(isEmail('invalid.email')).to.be.false
    expect(isEmail('invalid@email')).to.be.false
    expect(isEmail('invalid@emai.l')).to.be.false
  })

  it('a valid email', () => {
    expect(isEmail('valid@email.com')).to.be.true
  })
})
