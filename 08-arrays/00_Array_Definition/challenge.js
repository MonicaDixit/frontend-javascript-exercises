module.exports.newArray = function(arg1 , arg2, arg3, arg4){
	return [arg1, arg2, arg3 , arg4];
};

module.exports.firstAndLast = function(myArray){
	var newArray = [];
	 newArray.push(myArray[0] );
	 newArray.push((myArray[(myArray.length) -1]));
	 return newArray;
};