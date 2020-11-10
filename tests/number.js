const chai = require('chai')

const { isNumber } = require('./../')

const expect = chai.expect

describe('testing isNumber', () => {
  it('a valid number - test with number', () => expect(isNumber(1)).to.be.true)

  it('an invalid number - test with boolean', () => expect(isNumber(true)).to.be.false)

  it('an invalid number - test with undefined', () => expect(isNumber(undefined)).to.be.false)

  it('an invalid number - test with null', () => expect(isNumber(null)).to.be.false)

  it('an invalid number - test with object', () => expect(isNumber({})).to.be.false)

  it('an invalid number - test with function', () => expect(isNumber(() => {})).to.be.false)
  
  it('an invalid number - test with string', () => expect(isNumber('1')).to.be.false)
})
