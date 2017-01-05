'use strict';
const targetValue = require('../1.5.js');
var expect = require('chai').expect;

describe("targetValue", () => {
  it("output are two integers, from first argument array, equal to second argument", () => {
    expect(targetValue([1, 2, 3, 4, 5, 6, 7], 13)).to.deep.equal([6,7]);
  });
});
