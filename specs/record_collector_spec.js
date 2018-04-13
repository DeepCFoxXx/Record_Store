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
    recordCollector = new RecordCollector('Kara', 10.00);
  });

});
