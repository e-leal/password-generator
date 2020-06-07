// Assignment code here
function passwordLength(){
  var length = window.prompt('Please choose password length between 8 and 128 characters');
  length = parseInt(length);
  if (length < 8 || length > 128){
    alert("The password length you chose is invalid. Please try again.")
    passwordLength();
  }
  return length;

}

/*function lowercaseLetter(){
  var lowerConfirm = window.prompt('Please choose a lowercase letter to have in your password.');
  if (lowerConfirm === "" || lowerConfirm === null || lowerConfirm.length > 1){
    alert("The character(s) you chose is invalid. Please try again.")
    lowercaseLetter();
  }
  return lowerConfirm.toLowerCase();
}*/
function lowercaseLetter(){
  var letter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'g', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  return letter[Math.floor(Math.random()*letter.length)];
}

/*function upperCaseLetter(){
  var upperConfirm = window.prompt('Please choose an uppercase letter to have in your password.');
  if(upperConfirm === "" || upperConfirm === null || upperConfirm.length > 1){
    alert("The character(s) you chose is invalid. Please try again.")
    upperCaseLetter();
  }
  return upperConfirm.toUpperCase();
}*/
function upperCaseLetter(){
  var letter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'g', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  return letter[Math.floor(Math.random()*letter.length)].toUpperCase();
}

/*function getNumber(){
  var numberConfirm = window.prompt('Please select a number to have in your password.');
  if(numberConfirm === "" || numberConfirm === null || numberConfirm.length > 1){
    alert("The character(s) you chose is invalid. Please try again.")
    getNumber();
  }
  return parseInt(numberConfirm);
}*/
function getNumber(){
  return Math.floor(Math.random() * 10);
}

/*function getSpecial(){
  //var pattern = /[\s~`!@#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?()\._]/;
  var specialConfirm = window.prompt('Please select a special character to have in your password. ( !"#$%&\'()*+,-./:;<=>?@[\]^_`{|}~');
  if(specialConfirm === null || !/[\s~`!@#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?()\._]/g.test(specialConfirm) || specialConfirm.length > 1){
    alert('The character(s) you chose is invalid. Please try again.')
    getSpecial();
  }
  return specialConfirm;
}*/

function getSpecial(){
  var special = ['@', '\\', '!', '#', '$', '^', '%', '^', '+', '=', '-', '[', ']', '\'', ';', '.', '/', '{', '}', '|', '"', ':', '<', '>', '?', '*', '&'];
  return special[Math.floor(Math.random()*special.length)];
}

function chooseRandom(lower, upper, specialChar, number){
  var selected;
  var special = ['@', '\\', '!', '#', '$', '^', '%', '^', '+', '=', '-', '[', ']', '\'', ';', '.', '/', '{', '}', '|', '"', ':', '<', '>', '?', '*', '&'];
  var letter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'g', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  if(lower && upper && specialChar && number){
    var choice = Math.floor(Math.random() * 4);
    switch(choice){
      case 0:
        selected = special[Math.floor(Math.random()*special.length)];
        break;
      case 1:
        selected = letter[Math.floor(Math.random()*letter.length)];
        break;
      case 2:
        selected = letter[Math.floor(Math.random()*letter.length)].toUpperCase();
        break;
      case 3:
        selected = Math.floor(Math.random() * 10);
        break;
      default:
        alert("Looks like there has been an issue with the random selection.");
        console.log("We're going to used a devault value of: -");
        selected = '-';
        break;
    }
  }

  return selected;
}


function generatePassword(){
  var password = "";
  var passLength = passwordLength();
  var lowerLetter = "";
  var upperLetter = "";
  var selectNumber = "";
  var selectSpecial;
  var lowerPrompt = window.confirm('Would you like to include a lowercase letter?');
  var upperPrompt = window.confirm('Would you like to include an uppercase letter?');
  var numberPrompt = window.confirm('Would you like to include a number?');
  var specialPrompt = window.confirm('Would you like to include a special character?');
  var iterate = 0;
  while (iterate < passLength){
    console.log("password is now: " + password);
    if(lowerPrompt){
      lowerLetter = lowercaseLetter();
      password += lowerLetter;
      iterate++;
      console.log("password is now: " + password);
    }
    if(upperPrompt){
      upperLetter = upperCaseLetter();
      password += upperLetter;
      iterate++;
      console.log("password is now: " + password);
    }
    if(numberPrompt){
      selectNumber = getNumber();
      password += selectNumber;
      iterate++;
      console.log("password is now: " + password);
    }
    if(specialPrompt){
      selectSpecial = getSpecial();
      password += selectSpecial;
      iterate ++;
      console.log("password is now: " + password);
    }
  }
  return password;

}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);