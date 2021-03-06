var code = require('../main');
var expect = require('chai').expect;

describe("leapYear", function() {
  it("should return true for 2016", function() {
    expect(code.leapYear(2016)).to.equal(true);
  });
  it("should return false for 2015", function() {
    expect(code.leapYear(2015)).to.equal(false);
  });
  it("should return true for 1600", function() {
    expect(code.leapYear(1600)).to.equal(true);
  });
  it("should return false for 1700", function() {
    expect(code.leapYear(1700)).to.equal(false);
  });
});
