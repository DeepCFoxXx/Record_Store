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
    record3 = new Record('The Beatles', 'Revolver', 200.00);
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

  it("Record can't buy record if not enough cash", function() {
    assert.equal("Sorry you can't afford this record", recordCollector.buyRecord(record3));
    assert.equal(0, recordCollector.collection.length);
  });

  it("Record Collector can sell record", function() {
    recordCollector.buyRecord(record2);
    recordCollector.sellRecord(record2);
    assert.equal(0, recordCollector.collection.length);
  });

  it("Record Collectors cash increases when selling", function() {
    recordCollector.buyRecord(record2);
    recordCollector.sellRecord(record2);
    assert.equal(100.00, recordCollector.cash);
  });

});
