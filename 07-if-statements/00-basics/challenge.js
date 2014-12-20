module.exports.favoriteNumber = function(fav, guess){
if (guess == fav){
	return "You got it!"
}
 
if (guess > fav){
	return "Too high" ;
}

 return "Too low" ;
};

module.exports.checkLock = function(num1, num2, num3, num4){

var validfirst = false;
var validSecond = false;
var validThird = false;
var validFourth = false;

if (num1 == 3 || num1 == 5 || num1 == 7)
  validfirst = true;


if (num2 == 2)
  validSecond = true;

if ((num3 == 5 ) || (num3 == 100) || (5 < num3 < 100)) 
  validThird = true;

if ((num3 < 5) || (num3 > 100))
  validThird = false;


if ( num4 < 9 || num4 > 20)
  validFourth = true;

if (num4 == 9 || num4 == 20)
    validFourth = false;


  if (validfirst && validFourth && validThird && validSecond)
    return "correct" ;

  if (!validfirst || !validSecond || !validThird || !validFourth)
    return "incorrect" ;


};
module.exports.canIGet = function(item , money){

if (item =='MacBook Air' )
	 if (money >= 999)
	 	return true;

if (item == 'MacBook Pro')
    if (money >= 1299)
      return true;

 if (item == 'Mac Pro')
     if  (money >= 2499)
     	 return true;
      
   if (item == 'Apple Sticker')
     if (money >= 1)
        return true;
 
 return false;
};

