
var Numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','R','S','T','U','V','W','X','Y','Z'];
var specialChars=['!','"','#','$','%','&','(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','[',']','\\','`','{','}','|','~'];
 


function getPassword() {
  var length = parseInt(window.prompt('Please choose a length for your password between 8 and 128 characters. '));
  if (isNaN(length) === true) {
    alert('Length of password must be specified!');
    return;
  }
  if (length < 8 || length > 128) {
  window.alert("Password must be between 8 and 128 characters!");
  };

  var incNumbers = confrim('Would you like your password to inculde numbers?');
  var incLower = confirm('Would you like your password to inculde lowercase characters?');
  var incUpper = confirm('Would you like your password to inculde uppercase characters?');
  var incSpecialChars = confrim('Would you like your password to inculde special characters?');

  if (
    incNumbers === fasle &&
    incLower === false &&
    incUpper === false &&
    incSpecialChars === false 
  ) {
    alert('Please select at least one chcracter type!');
    return;
  }
  var Options = {
    length:length,
    incNumbers: incNumbers,
    incLower: incLower,
    incUpper: incUpper,
    incSpecialChars: incSpecialChars
  }
  return Options;
};
function getRandom(ran) {
  var Index = MAth.floor(math.random() * ran.length);
  var random = ran[Index];
  return random;
}

function generatePassword(){ 
  var passOptions = getPassword();
  var result = [];
  var probChars = [];
  var actualChars = [];

  if (passOptions.incNumbers) {
    probChars = probChars.concat(Numbers);
    actualChars.push(getRandom(Numbers));
  }  
  if (passOptions.incLower) {
    probChars = probChars.concat(lower);
    actualChars.push(getRandom(lower));
  } 
  if (passOptions.incUpper) {
    probChars = probChars.concat(upper);
    actualChars.push(getRandom(upper));
  } 
  if (passOptions.incSpecialChars) {
    probChars = probChars.concat(specialChars);
    actualChars.push(getRandom(specialChars));
  }

  for (var i = 0; i < passOptions.length; i++){
    var possibleChars = getRandom(probChars);
    result.push(possibleChars);
  }
  for (var i = 0; i < actualChars.length; i++){
    result[i]
  }
  if(passOptions.in)
  return result.join('');    
};
// Get references to the #generate element
var generateBtn = document.querySelector('#generate');
// Write password to the #password input
function writePassword() {
  var enterPass = "";
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  while (enterPass === "" || enterPass === null) {}
 
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
