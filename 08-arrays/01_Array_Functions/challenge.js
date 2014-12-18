module.exports.reversePlusOne = function(arr){
 if (arr.length < 2)
 	return ;

 var newArray = [1];

  while (arr.length > 0){

  	newArray.push(arr.pop());

  }

  return newArray;

};

module.exports.plusesEverywhere = function plusesEverywhere(arr){
	if (arr.length < 2)
		return ;

    var resultString = "";
	for (var i = 0 ; i < arr.length ; i++){
    resultString += arr[i] +  "+" ;
	}
    
	resultString = resultString.substring(0, resultString.length-1);
	return resultString;
};

module.exports.arrayQuantityPlusOne = function arrayQuantityPlusOne(arr){

return arr.length + 1;

};