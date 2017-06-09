function checkUsersValid(goodUsers){
  return function allUsersValid(submittedUsers){

    return submittedUsers.every(function(obj1){
      return goodUsers.some(function(obj2){
        return obj1.id === obj2.id;

      });
    });
  }
}

var users = [
  {id: 1,},
  {id: 2},
  {id: 3}
];


module.exports = checkUsersValid;
