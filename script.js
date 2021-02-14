// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  function generatePassword() {
    var letterNum = 0;
    var lowerLetter = false;
    var upperLetter = false;
    var upperLetterStore = "";
    var numbers = false;
    var specialCharacters = false;
    var newPassword = "";

    var letterArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    var specCharactersArray = ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "]", "[", "^", "_", "`", "{", "|", "}", "~"];
    var numberArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

    letterNum = prompt("Please put how many letters for your password (8 or more but no more than 128).");
    
    //if the user input any character or value out side of the parameters.
    while (letterNum < 8 || letterNum > 128 || isNaN(letterNum)) {
       if (letterNum === null) {
        return;
      }
      letterNum = prompt("Cannot compute. Please put how many letters for your password (8 or more but no more than 128)");
    }

    //user's choice for different password criterias.
    while (lowerLetter === false && upperLetter === false && numbers === false && specialCharacters === false) {
      lowerLetter = confirm("Does your password have lower case letters?");
      upperLetter = confirm("Does your password have Upper case letters?");
      numbers = confirm("Does your password has numbers?");
      specialCharacters = confirm("Does your password have special characters?");
      if (lowerLetter === false && upperLetter === false && numbers === false && specialCharacters === false) {
        alert("Pleasse pick at lease 1 option.");
      }
    }

    //password combinations of user's choice
    if (lowerLetter == true) {
      for (i = 0; i < letterNum; i++) {
        newPassword = newPassword + letterArray[Math.floor(letterArray.length * Math.random())];
        }
        if (upperLetter == true) {
          upperLetterStore = newPassword.toUpperCase();
          for (i = 0; i < letterNum/3; i++) {
          newPassword = newPassword.replace(newPassword[Math.floor(newPassword.length * Math.random())], upperLetterStore[Math.floor(upperLetterStore.length -1 * Math.random())]);
        }
      }
        if (numbers == true) {
          for (i = 0; i < letterNum/5; i++) {
          newPassword = newPassword.replace(newPassword[Math.floor(newPassword.length * Math.random())], numberArray[Math.floor(numberArray.length * Math.random())]);
        } 
      }
        if (specialCharacters == true) {
          for (i = 0; i < letterNum/5; i++) {
            newPassword = newPassword.replace(newPassword[Math.floor(newPassword.length * Math.random())], specCharactersArray[Math.floor(specCharactersArray.length * Math.random())]);
        }
      }
    } 
    
    else if (upperLetter == true) {
      for (i = 0; i < letterNum; i++) {
        newPassword = newPassword + letterArray[Math.floor(letterArray.length * Math.random())];
        newPassword = newPassword.toUpperCase();
        }
      if (numbers == true) {
        for (i = 0; i < letterNum/4; i++) {
          newPassword = newPassword.replace(newPassword[Math.floor(newPassword.length * Math.random())], numberArray[Math.floor(numberArray.length * Math.random())]);
        } 
      }
      if (specialCharacters == true) {
        for (i = 0; i < letterNum/4; i++) {
          newPassword = newPassword.replace(newPassword[Math.floor(newPassword.length * Math.random())], specCharactersArray[Math.floor(specCharactersArray.length * Math.random())]);
        }
      }
    }

    else if (numbers == true) {
      for (i = 0; i < letterNum; i++) {
        newPassword = newPassword + numberArray[Math.floor(numberArray.length * Math.random())];
        }
        if (specialCharacters == true) {
          for (i = 0; i < letterNum/3; i++) {
            newPassword = newPassword.replace(newPassword[Math.floor(newPassword.length * Math.random())], specCharactersArray[Math.floor(specCharactersArray.length * Math.random())]);
        }
      }
    }

    else if (specialCharacters == true) {
      for (i = 0; i < letterNum; i++) {
        newPassword = newPassword + specCharactersArray[Math.floor(specCharactersArray.length * Math.random())];
        }
    }
  
  var passwordText = document.querySelector("#password");
  passwordText.value = newPassword;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
