// Assignment Code
var generateBtn = document.querySelector("#generate");
var pLength
var lower
var upper
var spChar



//Mywork
function genPassword(){
var length = prompt('How long would you like your password to be?');

// for ( var answer = < 8;){

//   alert("invalid input");
var questions = [
  {q: "Would you like to include lower case letters?" , a: "t"},
  {q: "Would you like to include upper case letters?" , a: "t"},
  {q: "Would you like to include numeric values?" , a: "t"},
  {q: "Would you like to include special characters?" , a: "t"},
];

for( var i = 0; i <questions.length; i++) {
  var answer = confirm(questions[i].q);

  if ((answer === true && questions[i].a === "t") ||
  (answer === false && questions[i].a === "f")) {
    alert("I will include this!");
  }
  else {
    alert("I will not include this!");
  }
}
}



generateBtn.addEventListener("click", genPassword)






// Write password to the #password input
function writePassword() {
  var password = generatePassword("#questions");
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// var amountChars = prompt('');
// var settings2 = prompt('');
// var settings3 = prompt('');

// if amountChars(){

// }

// if settings2(){

// }

// if settings3(){

// }

// result = allthingsthathappened 
// return result;

