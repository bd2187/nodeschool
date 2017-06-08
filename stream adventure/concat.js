var concat = require('concat-stream');

process.stdin
.pipe(concat(reverse));

function reverse(buff){
  var reversedBuff = buff.toString().split('').reverse().join('');
  console.log(reversedBuff);
}
