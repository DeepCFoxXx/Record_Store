function RecordStore(name, city) {
  this.name = name;
  this.city = city;
  this.inventory = [];
  this.balance = 0;
}

RecordStore.prototype.addRecord = function(record) {
  this.inventory.push(record);
}

RecordStore.prototype.listInventory = function() {
  var inventoryList = this.inventory.map(function(record) {
    return record.prettyPrint()
  })
  return inventoryList
}

module.exports = RecordStore;
