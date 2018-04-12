var assert = require('assert');
var Record = require('../record.js');

describe('Record', function() {

 var record1;

  beforeEach(function() {
    record1 = new Record('Queens of the stone age', 'Songs for the deaf', 9.99);
  });

  it('should have an artist', function() {
    assert.equal(record1.artist, 'Queens of the stone age');
  });

});
