module.exports.stream = function(conditionalFn,actionFn){

if (!conditionalFn()){
  return false;
}
 var i = true;
  while(i == true){
    i = conditionalFn();
    actionFn();
    
  }
};

module.exports.sumNumbers = function(arr){
  var sum = 0 ;
  while(arr.length > 0){
  sum += arr.pop();
  }
  return sum; 
};

