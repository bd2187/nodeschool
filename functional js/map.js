function doubleAll(numbers) {
  var doubleNum = numbers.map(function(num){
    return num * 2;
  });
  return doubleNum;
}


module.exports = doubleAll;
