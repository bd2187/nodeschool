function countWords(inputWords) {
  var count = inputWords.reduce(function (obj, val){
    if (obj[val]) {
      obj[val]++;
    }
    else {
      obj[val] = 1;
    }
    return obj
  }, {});
  return count;
}

var words = ['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian'];

module.exports = countWords;
