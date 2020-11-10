const chai = require('chai')

const { isString } = require('./../')

const expect = chai.expect

describe('testing isString', () => {
  it('an invalid string - test with number', () => expect(isString(1)).to.be.false)

  it('an invalid string - test with boolean', () => expect(isString(true)).to.be.false)

  it('an invalid string - test with undefined', () => expect(isString(undefined)).to.be.false)

  it('an invalid string - test with null', () => expect(isString(null)).to.be.false)

  it('an invalid string - test with object', () => expect(isString({})).to.be.false)

  it('an invalid string - test with function', () => expect(isString(() => {})).to.be.false)

  it('a valid string', () => expect(isString('string')).to.be.true)
})
