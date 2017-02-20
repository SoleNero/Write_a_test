'use strict';
const twoSums = require('../1.5.js');
var expect = require('chai').expect;

describe("twoSums", () => {
  it("output is an array of two indexes of two integers in array, when added together, give the target value", () => {
    expect(twoSums([1, 2, 3, 4, 5, 6, 7], 13)).to.deep.equal([5,6]);
    expect(twoSums([1,2,3,4],5)).to.deep.equal([1,2]);
  });

  it("in case there is no match, function return an empty array", () => {
    expect(twoSums([1,2,3],10)).to.deep.equal([]);
  });
});
