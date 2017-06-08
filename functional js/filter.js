function getShortMessages(message = []) {
  var messages = message.filter(function(obj){
    return obj.message.length < 50;
  }).map(function(obj){
    return obj.message;
  });

  return messages;
}

var arr = [
  {
    user: 'bd',
    message: 'Hello'
  },
  {
    user: 'eg',
    message: 'Hola'
  }
];

module.exports = getShortMessages;
