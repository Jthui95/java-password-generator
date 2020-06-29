// Assignment Code
var generateBtn = document.querySelector("#generate");
var choice= Math.floor(Math.random()*4)
var password = genPassword[choice]
//Mywork
function genPassword(){

var plength = prompt('How long would you like your password to be?');
if (plength > 8 && plength < 128 ){
  alert(`Your password will include ${plength} characters`);
}
else {
  alert('Your password is too short. Please choose a number between 8 and 128');
  attempt++;
}
var confirmLower = confirm("Would you like to include lower case letters?");
if (confirmLower){
  alert("Lower case letters will be included in your password.");
}
else {
  alert("Lower case letters will not be included in your password.");
}
var confirmUpper = confirm("Would you like to include upper case letters?");
if (confirmUpper){
  alert("Upper case letters will be included in your password.");
}
else {
  alert("Upper case letters will not be included in your password.");
}
var confirmNumeric = confirm("Would you like to include numbers?");
if (confirmNumeric){
  alert("Numbers will be included in your password.");
}
else {
  alert("Numbers will not be included in your password.");
}
var confirmSpecial = confirm("Would you like to include special characters?");
if (confirmSpecial){
  alert("Special characters will be included in your password.");
  confirmSpecial = []
}
else {
  alert("Special Characters will not be included in your password.");
}
}
generateBtn.addEventListener("click", genPassword);






// Write password to the #password input
function writePassword() {
  var password = generatePassword("#genPassword");
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  password = (`Your password is ${plength}${confirmLower}${confirmUpper}${confirmNumeric}${confirmSpecial}`)

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

