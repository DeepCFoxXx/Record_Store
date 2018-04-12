var assert = require('assert');
var Record = require('../record.js');

describe('Record', function() {

  var record1;

  beforeEach(function() {
    record1 = new Record('Queens of the stone age', 'Songs for the deaf', 9.99);
  });

  it('should have a artist', function() {
    assert.equal(record1.artist, 'Queens of the stone age');
  });

  it('should have a title', function() {
    assert.equal(record1.title, 'Songs for the deaf');
  });

  it('should have a price', function() {
    assert.equal(record1.price, 9.99);
  });

  it('Prints out details as a string', function() {
    assert.equal('Artist: Queens of the stone age, Title: Songs for the deaf, Price: 9.99', record1.prettyPrint());
  });

});
