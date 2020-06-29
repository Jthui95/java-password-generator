// Assignment Code
var generateBtn = document.querySelector("#generate");
var pLength
var lower
var upper
var spChar



//Mywork
function genPassword(){
var userInput = prompt('How long would you like your password to be?');
userInput = 
console.log(userInput);

//Only runs if the user chooses valid input
if (userInput >= 8 || userInput <= 128){
  alert("Input recieved!");
} else if (userInput < 8 || userInput > 128) {
  alert("Invalid input");
}

var info = [
  {q: "Would you like to include lower case letters?" , a: "t"},
  {q: "Would you like to include upper case letters?" , a: "t"},
  {q: "Would you like to include numeric values?" , a: "t"},
  {q: "Would you like to include special characters?" , a: "t"},
];

for( var i = 0; i <info.length; i++) {
  var answer = confirm(info[i].q);

  if ((answer === true && info[i].a === "t") ||
  (answer === false && info[i].a === "f")) {
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

