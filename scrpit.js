
// in each array add remaining alphabet letters, special charachters
var specialCharacter = ["@","%", "!", "?", "$","^","&"]
var numericalCharacter = ["0","1","2","3", "4", "5", "6", "7", "8", "9"]
var uppercaseCharacter = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var lowercaseCharacter = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var pwArr = [];
var pw = []

function getPasswordOption() {
  var passwordLength = prompt("How long would you like the password?")
  var specialOption = confirm("Do you want special characters?")
  var numericalOption = confirm("Do you want numerical characters?")
  var uppercaseOption = confirm("Do you wamt uppercase characters?")
  var lowercaseOption = confirm("Do you want lowercase characters ?")
  var option = {
    passwordLength: passwordLength,
    specialOption: specialOption,
    numericalOption: numericalOption,
    uppercaseOption: uppercaseOption,
    lowercaseOption: lowercaseOption,
  }
    // add if statement preventing someone entering a password length of less of 8 chars
    return option
  }

  function getRand (pwArr) {
    console.log(pwArr);
    
    var randIndex = Math.floor(Math.random() * pwArr.length);
    var rnadEl = pwArr[randIndex]
    return rnadEl
  }

function generatePassword(passwordOption) {
  var passwordOption = getPasswordOption()
// add tow more ifs
  if (passwordOption.specialOption) {
    pwArr = pwArr.concat(specialCharacter)
  
    // add logic to add at least one of this kind of letters to pw so we got the variety
  }
  if ( passwordOption.numericalOption) {
    pwArr = pwArr.concat(numericalCharacter)
        // add logic to add at least one of this kind of letters to pw so we got the variety
      //pw.push(getrand(numericalCharacter))
  }
  if (passwordOption.uppercaseOption) {
    pwArr = pwArr.concat(uppercaseCharacter)
  }
  if (passwordOption.lowercaseOption) {
    pwArr = pwArr.concat(lowercaseCharacter)
  }
  console.log(passwordOption.passwordLength);
  console.log(pwArr);
  // if uppercase
  // if lowerrcase
 // console.log(passwordOption.passwordLength);
  //console.log(pwArr);
  
  for (var i = 0; i < passwordOption.passwordLength; i++) {
    var possibleChar = getRand(pwArr);
    pw.push(possibleChar);    
  }
  //remove , from the pasword //regex expression to do that // splice()
  return pw;
}
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword("conjen2353");
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
