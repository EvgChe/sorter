class Sorter {
  constructor() {
    this.data = [];
    this.place = [];
  this.compareFunc;
  }

  add(element) {
  this.data.push(element);
  }

  get length() {
    return this.data.length;
  }

  toArray() {
    return this.data;
  }

  sort(indices) {
  this.place = [];
  indices.sort();
    for (var i = 0; i < indices.length; i++ ){
      this.place.push(this.data[indices[i]]);
    }

  this.place.sort(this.Compare);

  for (var i = 0; i < indices.length; i++  ){
      this.data[indices[i]] = this.place[i];
    }
  }

  setComparator(CompareFunction) {
  this.Compare = CompareFunction;
  }

  at(index){
  return this.data[index];
  }

  Compare(left,right)
  {
  return left-right;
  }

}

module.exports = Sorter;
