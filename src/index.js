class Sorter {
  constructor() {
    this.data = [];
    this.comparator = null;
  }

  add(element) {
    this.data.push(element);
  }

  at(index) {
    return this.data[index];
  }

  get length() {
    return this.data.length;
  }

  toArray() {
    return this.data;
  }

  sort(indices) {
    indices.sort();

    var arrToSort = this.data.filter( function(item, i) {
      return indices.indexOf(i) > -1;
    });

    arrToSort.sort(this.comparator);

    this.data = this.data.map(function (item, i) {
      var index = indices.indexOf(i);
      return index > -1 ? arrToSort[index] : item;
    })

  }

  setComparator(compareFunction) {
    this.comparator = compareFunction;
  }
}

module.exports = Sorter;
