// Assignment Code
var generateBtn = document.querySelector("#generate");


//Mywork
function genPassword(){

var userInput = prompt('How long would you like your password to be?');
if (userInput > 8 && userInput < 128 ){
  alert(`Your password will include ${userInput} characters`);
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
}
else {
  alert("Special Characters will not be included in your password.");
}
//Only runs if the user chooses valid input
// if (userInput > 8 || userInput < 128){
//   alert("Input recieved!");
// } else if (userInput < 8 || userInput > 128) {
//   alert("Invalid input");
// }
}

// var info = [
//   {q1: "Would you like to include lower case letters?" , a: "t"},
//   {q2: "Would you like to include upper case letters?" , a: "t"},
//   {q3: "Would you like to include numeric values?" , a: "t"},
//   {q4: "Would you like to include special characters?" , a: "t"},
// ];

// for( var i = 0; i <info.length; i++) {
//   var answer = confirm(info[i].q);

//   if ((answer === true && info[i].a === "t") ||
//   (answer === false && info[i].a === "f")) {
//     alert("I will include this!");
//   }
//   else {
//     alert("I will not include this!");
//   }
// }



generateBtn.addEventListener("click", genPassword);






// Write password to the #password input
function writePassword() {
  var password = generatePassword("#questions");
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

