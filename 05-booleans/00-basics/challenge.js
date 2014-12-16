module.exports.equalStrings = function(stringOne, stringTwo) {
return (stringOne === stringTwo); 
};

module.exports.notEqual = function(one, two) {
return !(one === two);
};

module.exports.inBetween = function(lower, middle, upper) {
return  (middle > lower && middle < upper);
};

module.exports.outsideRanges = function(number) {

	if (number == 1 || number == 6 || number == 42)
		return true;

	if (number == 10 || number == 20 ||  number == 75)
		return false;

	if ((number >42 && number < 75))
		return false;

	if ((number > 10 && number < 20))
		return false;

	if ( number > 1 && number < 6)
		return false;

	return true;
};

module.exports.nameAndPrice = function(name, price) {
return ((name ==  'NYTimes' || name ==  'LATimes') && price  >= 1) ;
};
