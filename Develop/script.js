// Assignment Code
var generateBtn = document.querySelector("#generate");
var choice= Math.floor(Math.random()*4)
var password = genPassword[choice]
//Mywork
function genPassword(){
const array = [ "~!@#$%^&*()_+{}|-=[]\;',./?><:","1234567890","ABCDEFGHIJKLMNOPQRSTUVWXYZ","abcdefghijklmnopqrstuvwxyz",];
// console.log(array);


var pLength = prompt('How long would you like your password to be?');
if (pLength > 8 && pLength < 128 ){
  alert(`Your password will include ${pLength} characters`);
}
else {
  alert('Invalid input, please choose a number between 8 and 128');
  attempt++;
}
var confirmLower = confirm("Would you like to include lower case letters?");
if (confirmLower){
 
  alert("Lower case letters will be included in your password." );
}
else {
  alert("Lower case letters will not be included in your password." );
  array.splice(3,1);
}
// console.log(confirmLower);
console.log(array); 
var confirmUpper = confirm("Would you like to include upper case letters?");
if (confirmUpper){
 
  alert("Upper case letters will be included in your password.");
}
else {
  alert("Upper case letters will not be included in your password.");
  array.splice(2,1);
} 
// console.log(confirmUpper);
console.log(array); 
var confirmNumeric = confirm("Would you like to include numbers?");
if (confirmNumeric) {
 
  alert("Numbers will be included in your password.");
}
else {
  alert("Numbers will not be included in your password.");
  array.splice(1,1);
}
// console.log(confirmNumeric);
console.log(array); 
var confirmSpecial = confirm("Would you like to include special characters?");
if (confirmSpecial){
  alert("Special characters will be included in your password.");
}
else {
  alert("Special Characters will not be included in your password.");
  array.splice(0,1);
}
// console.log(confirmSpecial);
console.log(array); 
}
generateBtn.addEventListener("click", genPassword);






// Write password to the #password input
function writePassword() {
  var password = generatePassword("#genPassword");
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
 

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
