const chai = require('chai')

const { isNumberString } = require('./../')

const expect = chai.expect

describe('testing isNumberString', () => {
  it('an invalid numberString - test with number string', () => expect(isNumberString('1')).to.be.true)

  it('a valid numberString - test with number', () => expect(isNumberString(1)).to.be.true)

  it('an invalid numberString - test with no number string', () => expect(isNumberString('test')).to.be.false)

  it('an invalid numberString - test with boolean', () => expect(isNumberString(true)).to.be.false)

  it('an invalid numberString - test with undefined', () => expect(isNumberString(undefined)).to.be.false)

  it('an invalid numberString - test with null', () => expect(isNumberString(null)).to.be.false)

  it('an invalid numberString - test with object', () => expect(isNumberString({})).to.be.false)

  it('an invalid numberString - test with function', () => expect(isNumberString(() => {})).to.be.false)
})
