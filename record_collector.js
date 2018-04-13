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

module.exports = RecordCollector;
