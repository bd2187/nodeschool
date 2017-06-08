function repeat(operation, num = 1) {
  for (let i = 0; i < num; i++) {
    operation();
  }
}

function hello() {
  console.log('hello');
}

module.exports = repeat;
