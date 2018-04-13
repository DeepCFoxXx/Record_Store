function RecordCollector(name, cash) {
  this.name = name;
  this.cash = cash;
  this.collection = [];
}

RecordCollector.prototype.buyRecord = function (record) {
  if (this.cash < record.price) {
    return "Sorry you can't afford this record";
  }
  this.cash -= record.price;
  this.collection.push(record);
}

RecordCollector.prototype.sellRecord = function (record) {
  var recordIndex = this.collection.indexOf(record);
  this.collection.splice(recordIndex, 1);

  this.cash += record.price;
}

module.exports = RecordCollector;
