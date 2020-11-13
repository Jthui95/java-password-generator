// Assignment Code
var generateBtn = document.querySelector("#generate");
//Mywork

var sp = "~!@#$%^&*()_+{}|-=[]\;,./?><:";
var num = "1234567890";
var up = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lo = "abcdefghijklmnopqrstuvwxyz";

var pass = "";

var loSelection = false;
var uprSelection = false;
var spSelection = false;
var numSelection = false;


function generate(){
var confirmLength = ""; 
while(isNaN(confirmLength) || confirmLength < 8 || confirmLength > 128) {
  confirmLength = prompt('How long would you like your password to be? (Please choose a value between 8 and 128)');
  if(confirmLength === null) {
    break;
  }
}  

  if(confirmLength){

    if(confirm("Would you like your password to include lowercase characters?") == true) {
      loSelection = true;
    }

  

    if(confirm("Would you like your passweord to include uppercase characters?") == true) {
      upSelection = true;
    }

    if(confirm("Would you like your password to include special characters?") == true) {
      spSelection = true;

    }

    if(confirm("Would you like your password to include numbers?") == true) {
      numSelection = true;
    }
  // alerts the user to select at least one option 
  if(loSelection === false && upSelection === false && spSelection == false && numSelection == false) {
    alert("You must select one character type to have a secure password!")
  }

}
/// This function will generate a password
var characters = "";
characters += (loSelection ? lo: '');
characters += (upSelection ? up: '');
characters += (spSelection ? sp: '');
characters += (numSelection ? num: '');

pass = password(confirmLength, characters);

document.getElementById("password").innerHTML = pass;

}

function password(l, characters) {
  var pass = '';
  for (var i = 0; i < l; ++i) {
      pass += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return pass;
}


