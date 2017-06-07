var numsArr = process.argv.splice(2);

var sum = numsArr.reduce(function(acc, val){
  return Number(acc) + Number(val);
}, 0);

console.log(sum);
