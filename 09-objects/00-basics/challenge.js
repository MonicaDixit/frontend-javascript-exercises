module.exports.createCourse = function createCourse(courseTitle,courseDuration,courseStudents){
	var myObject = {
		title : courseTitle,
		duration : courseDuration,
		students : courseStudents,
	};

	return myObject
};

module.exports.addProperty = function(object , newProp, newValue){
	var prop = newProp ;
	if  (object.hasOwnProperty(newProp))
		return object;
	else{
		object[newProp] = newValue ;
		return object;
	}
};

module.exports.formLetter = function(letter){
	return "Hello "+letter.recipient+",\n\n"+letter.msg+"\n\nSincerely,\n"+letter.sender;

};

module.exports.canIGet = function(item, money){

	var priceChart = [
     {"name" : "MacBook Air" , "price" : 999},
     {"name" : "MacBook Pro" , "price" : 1299},
     {"name" : "Mac Pro" , "price" : 2499},
     {"name" : "Apple Sticker" , "price" : 1}
	] ;

	for (i = 0 ; i < priceChart.length;i++){
		if (item === priceChart[i].name && money >= priceChart[i].price){
			return true;
		}
	}

	return false;

};