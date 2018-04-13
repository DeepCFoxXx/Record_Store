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

  it('should have zero balance', function() {
    assert.equal(0, recordStore.balance);
  });

  it('should be able to add records', function() {
    recordStore.addRecord(record1);
    recordStore.addRecord(record2);
    assert.equal(2, recordStore.inventory.length);
  });

  it("Should be able to list the inventory", function() {
    recordStore.addRecord(record1);
    recordStore.addRecord(record2);
    assert.equal('Artist: Queens of the stone age, Title: Songs for the deaf, Price: 9.99', recordStore.listInventory()[0]);
  });

  it('should be able to sell records', function() {
    recordStore.addRecord(record1);
    recordStore.addRecord(record2);
    recordStore.sellRecord(record2);
    assert.equal(1, recordStore.inventory.length);
  });

});
