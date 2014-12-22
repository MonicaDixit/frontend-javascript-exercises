module.exports.sumNumbers = function(myArr){ 


	if (myArr.length < 1)
		return 0;
    var sum = 0;

	for (var num in myArr){
		sum += myArr[num];

	}

	return sum;

};

module.exports.splitAndLowerCaseString = function(inputString){

	return inputString.toLowerCase().split(',');

};

module.exports.addIndex = function(arr){
  var modArr = [];

  for (i in arr){

    var text = i +" is "+arr[i];
    modArr.push(text);

  }
  return modArr;

};
 