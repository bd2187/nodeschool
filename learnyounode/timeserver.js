var net = require('net');

var port = Number(process.argv[2]);

var server = net.createServer(function(socket){
  socket.end(`${getDate()}\n`)
});
server.listen(port);

function zeroCheck(num) {
  return num < 10 ? `0${num}` : num;
}

function getDate() {
  var d           = new Date();
  var year        = d.getFullYear();
  var month       = zeroCheck(d.getMonth() + 1);
  var date        = zeroCheck(d.getDate());
  var hours       = zeroCheck(d.getHours());
  var min         = zeroCheck(d.getMinutes());
  var currentTime = `${year}-${month}-${date} ${hours}:${min}`;

  return currentTime;
}
