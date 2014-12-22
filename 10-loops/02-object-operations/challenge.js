module.exports.copy = function(obj){
  var testObj = new Object;
  for(var key in obj){
    if(obj.hasOwnProperty(key)){
      var myKey = key;
      testObj[myKey] = obj[key];
    }
  }
  return testObj;
};

module.exports.extend = function(dest, src){
for (var key in src){
  if (src.hasOwnProperty(key)){
  var addKey = key;
   dest[addKey] = src[key];

  }
}

return dest;

};

module.exports.hasElems = function(obj, arr){
  var present = false;
  if (arr.length < 1)
   return true;
 var counter = 0;
  for (var key in obj){
     if (arr.indexOf(key) == -1)
      break;
      else
        present = true;
      counter++;
  }

  if ( present && (arr.length) > counter)
    return false;

  return present;
};