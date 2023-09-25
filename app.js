// Chapter 21 (Changing Case)
// Q # 2
var x = "Hello World"; // Assuming 'x' contains the string you want to convert
x = x.toLowerCase();
console.log(x)

// Q # 3
var y = "Hello World"; // Assuming 'y' contains the string you want to convert
y = y.toUpperCase();
console.log(y)

// Q # 4
var originalString = "Hello World";
var lowerCaseString = originalString.toLowerCase();
console.log(lowerCaseString)

// Q # 5
var myArray = ["Hello World", "This is OpenAI"];
var lowerCaseString = myArray[0].toLowerCase();
console.log(lowerCaseString)

// Q # 6
var myString = "Hello World";
var upperCaseString = myString.toUpperCase();

alert(upperCaseString);


// Q # 7
var cityName = "kaRacHi";

cityName = cityName.toLowerCase();

cityName = cityName.charAt(0).toUpperCase() + cityName.slice(1);

console.log(cityName);


// Chapter 22 - 25 (Strings)
// Q # 1

var sameWords = "captain";

var slicedString = sameWords.slice(1, 3);

console.log(slicedString);

// Q # 2
var sameWords = "captain";

var characterCount = sameWords.length;

console.log(characterCount);

// Q # 3
var animal = "elephant";
var middleIndex = Math.floor(animal.length / 2);

var seg = animal.slice(middleIndex - 2, middleIndex + 2);

console.log(seg);

// Q # 4
var myString = "This is a sample string";
var characterCount = myString.length;

console.log(characterCount);

// Q # 5
var myString = "YourInputString";
var characterCount = myString.length;

var slicedString = myString.slice(1, -3);

console.log(characterCount);
console.log(slicedString);

// Q # 6
var text = "To be or not to be.";
var indx = text.indexOf("be");
console.log(indx)

// Q # 7
var text = "To be or not to be.";
var indx = text.lastIndexOf("be");
console.log(indx)

// Q # 10
var myString = "abcde";
var characterAtIndex2 = myString.charAt(2);
console.log(characterAtIndex2);

// Q # 11
var text = "This is a sample text";
var cha = text.charAt(9);
console.log(cha);

// Q # 16
var str = "This is 1 example of 1.";
var newStr = str.replace("1", "one");

console.log(newStr);


// Chapter 26 (Rounding Numbers)
// Q # 1

var numberToRound = 3.7;
var roundedNumber = Math.round(numberToRound);

console.log(roundedNumber);

// Q # 2
var origNum = 4.2;
var roundNum = Math.ceil(origNum);

console.log(roundNum);

// Q # 3
var origNum = 4.8;
var roundNum = Math.floor(origNum);

console.log(roundNum);

// Q # 4
var originalNum = 4.5;
var roundedNum = Math.round(originalNum);

console.log(roundedNum); 

// Q # 5
var originalNum = 0.5;
var roundedNum = Math.floor(originalNum);

console.log(roundedNum);

      // Chapter 27 (Random Numbers)////

// Q # 1
var randomNumber = Math.floor(Math.random() * 50) + 1;

console.log(randomNumber);

// Q # 2
var newRandomNumber = Math.random();

console.log(newRandomNumber);

// Q # 3
function rollDice() {

    var randomNumber = Math.floor(Math.random() * 6) + 1;
  
    return randomNumber;
  }
  var diceResult = rollDice();
  console.log("You rolled a " + diceResult);
  
// Q # 4
function coinToss() {
    var randomNumber = Math.random();
  
    if (randomNumber < 0.5) {
      return "Head";
    } else {
      return "Tail";
    }
  }
  
  var tossResult = coinToss();
  console.log("The result of the coin toss is: " + tossResult);

// Chapter 28, 29 (Converting Strings)
// Q # 1
var str = "42"; 
var integer = parseInt(str);

console.log(integer);

// Q # 2
function stringToInteger(str) {
      return parseInt(str);
    }    
    var myString = "123";
    var myInteger = stringToInteger(myString);

    console.log(myInteger);
    
// Q # 3
var str = "3.14";
var floatNumber = parseFloat(str);

console.log(floatNumber);

// Q # 4
function isStringConvertibleToFloat(str) {
      var floatingPoint = parseFloat(str);
      return !isNaN(floatingPoint);
    }
    
    var str = "3.14";
    if (isStringConvertibleToFloat(str)) {
      var floatResult = parseFloat(str);
      console.log("Converted to float:", floatResult);
    } else {
      console.log("Cannot convert to float.");
    }
    

// Q # 5
var number = 42;
var stringNumber = number + "";

console.log(stringNumber);


// Q # 6
function numberToString() {
      var number = 42;
      var stringNumber = number.toString();
      return stringNumber;
    }
    
    var result = numberToString();
    console.log(result);
    
// Q # 7
var decimalString = "3.14";
var integerNumber = parseInt(decimalString);

console.log(integerNumber);


// Chapter 30 (Controlling the length of decimals)
// Q # 1
var num = 3.14159265359;
var newNum = num.toFixed(4).toString();

console.log(newNum);

// Q # 2
var myNumber = 3.4567;
myNumber = parseFloat(myNumber.toFixed(2));
console.log(myNumber)

// Q # 3
if (num.toFixed(2).toString().length > 4) {
      // The code to execute if the condition is true
    }

// Q # 4
var originalNumber = 3.14159265359;
var roundedNumber = originalNumber.toFixed(2).toString();

alert("Rounded to 2 decimal places: " + roundedNumber);

// *****************// COMPLETED/////******************