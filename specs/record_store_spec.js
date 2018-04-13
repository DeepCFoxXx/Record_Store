var assert = require('assert');
var RecordStore = require('../record_store.js');
var Record = require('../record.js');

describe('Record Store tests', function() {

  var recordStore;
  var record1;
  var record2;

  beforeEach('Setup', function(){
    recordStore = new RecordStore('Deaf Factory', 'Edinburgh');
    record1 = new Record('Queens of the stone age', 'Songs for the deaf', 9.99);
    record2 = new Record('Marina and the diamonds', 'Family jewels', 9.99);
  });

  it('should have a name', function() {
    assert.equal(recordStore.name, 'Deaf Factory');
  });

  it('should have a city', function() {
    assert.equal(recordStore.city, 'Edinburgh');
  });

  it('should start empty', function() {
    assert.equal(0, recordStore.inventory.length);
  });

});
