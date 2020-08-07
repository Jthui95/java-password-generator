// Assignment Code
var generateBtn = document.querySelector("#generate");
//Mywork
function passwordSelection(){
  const array = [ "~!@#$%^&*()_+{}|-=[]\;,./?><:","1234567890","ABCDEFGHIJKLMNOPQRSTUVWXYZ","abcdefghijklmnopqrstuvwxyz",];
var sp = array["~!@#$%^&*()_+{}|-=[]\;,./?><:"];
var num = array["1234567890"];
var up = array["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var lo = array["abcdefghijklmnopqrstuvwxyz"];
let password = "";
let i = 0;
// create variable for each index
//make a loop that will populate my string based on 
// console.log(array);
var userP = prompt('How long would you like your password to be?');
// while (userP <= userP){
if (userP > 8 && userP < 128 ){
  alert(`Your password will include ${userP} characters`);
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
// console.log(array); 
var confirmUpper = confirm("Would you like to include upper case letters?");
if (confirmUpper){
  alert("Upper case letters will be included in your password.");
}
else {
  alert("Upper case letters will not be included in your password.");
  array.splice(2,1);
} 
// console.log(confirmUpper);
// console.log(array); 
var confirmNumeric = confirm("Would you like to include numbers?");
if (confirmNumeric) {
  alert("Numbers will be included in your password.");
}
else {
  alert("Numbers will not be included in your password.");
  array.splice(1,1);
}
// console.log(confirmNumeric);
// console.log(array); 
var confirmSpecial = confirm("Would you like to include special characters?");
if (confirmSpecial){
  alert("Special characters will be included in your password.");
}
else {
  alert("Special Characters will not be included in your password.");
  array.splice(0,1);
}
// console.log(confirmSpecial);
// console.log(array); 
function generatePassword() {
  while ( i> 8 && i < 128){
    if (confirmLower === true){
      password += lo[Math.floor(Math.random()*26)];
      i++;
    }
    if (confirmUpper === true){
      password += password = up[Math.floor(Math.random()*26)];
      i++;
    }
    if (confirmNumeric === true){
      password += num[Math.floor(Math.random()*10)];
      i++;
    }
    if (confirmSpecial === true){
      password += sp[Math.floor(Math.random()*19)];
      i++;
    }
    console.log(password);
    return password;
  }
//   var password = toString(genPassword);
//   var passwordText = document.querySelector("#password");
//   var passLength = userP
//   var choice = Math.floor(Math.random()* passLength)
// var password = ""

//   for (var i = 0; i< choice; i++)
//  password += array.charAt(Math.floor(Math.random()* array.length))
// return password;
}
generateBtn.addEventListener("click", passwordSelection, generatePassword);








// // Write password to the #password input
// function writePassword() {
//   var password = toString(genPassword);
//   var passwordText = document.querySelector("#password");
//   var passLength = userP
//   var choice = Math.floor(Math.random()* passLength)
// var password = ""

//   for (var i = 0; i< choice; i++)
//  password += array.charAt(Math.floor(Math.random()* array.length))
// return password;
  // passwordText.value = password;
 

}

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
