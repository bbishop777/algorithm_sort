var chai = require('chai');
chai.should();
var expect = chai.expect;

var bubble  = require('../bubble_sort.js');

describe('bubble', function() {
  it('should exist', function() {
    expect(bubble).to.exist;
    expect(bubble).to.be.a('function');
  });

  it('should return a sorted array, if given an unsorted array.', function(){
    var result = bubble([3, 2, 1]);

    expect(result).to.be.a('array');
    expect(result).to.deep.equal([1, 2, 3]);


  });

});