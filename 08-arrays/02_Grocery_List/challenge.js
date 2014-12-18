module.exports.addItem = function addItem(item , arr){

 if (arr.length < 0)
   return;

  var matchFound = false;

  for (var i = 0 ; i < arr.length; i++){
   if (arr[i] === item){
   	  matchFound = true;
   	  break;
   }
  }

  if (!matchFound)
  	 arr.push(item);

  	return arr;

};

module.exports.reverseSortedList = function reverseSortedList(arr){

  var highest ;

  for (var i = 0 ; i < arr.length; i++){
  	if (arr[i] < arr[i+1]){

  		 highest = arr[i+1];
  		 arr[i+1] = arr[i];
  		 arr[i] = highest;

  	}
  }

  return arr;

};