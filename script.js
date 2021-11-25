// Assignment Code
var generateBtn = document.querySelector("#generate");

const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const specialCharacters = "!@#$%^&*()-=?<"
const pwlength = "20";

function generatePassword() {
  console.log("Hey! You Clicked the Button!");

  userPassword = "";
  passwordCharacters = "";

  // ask user the length of password
  let pwlength = prompt(
    "Please select the length of your password. (Between 8 - 20 characters)"
  );

  // check if password between 8 and 20 characters
  if (pwlength >= 8 && pwlength <= 20) {
      password.length = pwlength;

      // does user want lowercase letters
      var isLowercase = confirm("Include lowercase letters in password");
      // does user want uppercase letters
      var isUppercase = confirm("Include uppercase letters in password");
      // does user want numbers
      var isNumeric = confirm("Include numbers in password");
      // does user want special characters
      var hasSpecialChars = confirm("Include special characters in password")
  } else {
      alert("Please select a password between 8-20 characters");
     }

    // Conditional Statements
    if (isLowercase === true) {
      passwordCharacters += lowercase;
    }
    if (isUppercase === true) {
      passwordCharacters += uppercase;
    }
    if (isNumeric === true) {
      passwordCharacters += numbers;
    }
    if (hasSpecialChars === true) {
      passwordCharacters += specialCharacters;
    } else {
      alert("Error: Cannot generate a password");
    }
    for (var index = 0; index < pwlength; index++) {
      userPassword += passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
    }
    // console.log(userPassword);
    return userPassword
 
    }


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
