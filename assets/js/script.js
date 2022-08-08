//1. window prompts for the password and criteria
function getPassword() {
  var
}
//2. Select password criteria from list

var passwordCri = {
  chars: "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*ABCDEFGHIJKLMNOPRSTUVWXYZ",
 
};
var generateBtn = document.querySelector('#generate');
//3. password length of at least 8 characters and no more than 128 characters (Math(8,128))
//4. Character types = lowercase, uppercase, numeric and/or special characters
//5.Each input validated and at least one character type should be selected
if (passwordCri.length < 8 || passwordCri.length> 128) {
  window.alert("Password does not meet character length requirement.");
}

//6. Password generated matching selected criteria
//7. Password displayed in an alert or written to the page
// Assignment code her/e


// Get references to the #generate element

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
