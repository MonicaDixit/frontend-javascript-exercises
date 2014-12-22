module.exports.getKeys = function(myObj){
var arr = []
for (var key in myObj){
  if (myObj.hasOwnProperty(key)){
    arr.push(key);
  };
};
return arr;

};

module.exports.getValues = function(myObj){
  var arr = [];
  for (var key in myObj){
  if (myObj.hasOwnProperty(key)){
    arr.push(myObj[key]);
  };
};
return arr;

};


module.exports.objectToArray = function(myObj){
var arr = [];
for (var key in myObj){
  if (myObj.hasOwnProperty(key)){
    var text = key+" is "+ myObj[key];
    arr.push(text);
  };
};
return arr;
};

