var assert = require('assert');
var RecordCollector = require('../record_collector.js');
var RecordStore = require('../record_store.js');
var Record = require('../record.js');

describe('Record Collector Tests', function() {

  var recordStore;
  var record1;
  var record2;
  var recordCollector;

  beforeEach("Setup", function() {
    recordStore = new RecordStore('Deaf Factory', 'Edinburgh');
    record1 = new Record('Queens of the stone age', 'Songs for the deaf', 9.99);
    record2 = new Record('Marina and the diamonds', 'Family jewels', 9.99);
    recordCollector = new RecordCollector('Kara', 100.00);
  });

  it('should have a name', function() {
    assert.equal(recordCollector.name, 'Kara');
  });

  it('should have cash', function() {
    assert.equal(100, recordCollector.cash);
  });

  it('should buy a record', function() {
    recordCollector.buyRecord(record1);
    assert.equal(1, recordCollector.collection.length);
  });

  it("Record collector's cash goes down when buying record", function() {
    recordCollector.buyRecord(record1);
    assert.equal(90.01, recordCollector.cash);
  });

});
