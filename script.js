// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercaseCharArray = "abcdefghijklmnopqrstuvwxyz".split("");
var uppercaseCharArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var numericalCharArray = "0123456789".split("");
var specialCharArray = "!#$%&'()*+-./:;<=>?@[\^_`]{|}~".split("");

// Write password to the #password input
function generatePassword() {

  var message = "please select a length between 8 and 128 characters for yout password.";
  var passwordLength
  do {
    alert(
      "password must be between 8 and 128 characters"
    );
    passwordLength = promptCheck(passwordLength, message);
  } while (passwordLength < 8 || passwordLength > 128);

  while (!numbers && !uppercaseChar && !lowercaseChar && !specialChar) {
    var numbers = confirm("Would you like your password to contain numbers?");
    var uppercaseChar = confirm("Would you like your password to contain upperchase letters?");
    var lowercaseChar = confirm("Would you like your password to contain lowercase letters?");
    var specialChar = confirm("Would you like to include special characters?");
    if(!numbers && !uppercaseChar && !lowercaseChar && !specialChar) {
      alert("you must choose at least one criteria");
    }
  }
  
  var passwordNew = [];
  var pool = [];
  if(numbers) {
    passwordNew.push(
      numericalCharArray[Math.floor(Math.random() * numericalCharArray.length)]
    );
    passwordLength--;
    pool = pool.concat(numericalCharArray)
  }

  if (uppercaseChar) {
    passwordNew.push(
      uppercaseCharArray[Math.floor(Math.random() * uppercaseCharArray.length)]
    );
    passwordLength--;
    pool = pool.concat(uppercaseCharArray)
  }

  if (lowercaseChar) {
    passwordNew.push(
      lowercaseCharArray[Math.floor(Math.random() * lowercaseCharArray.length)]
    );
    passwordLength--;
    pool = pool.concat(lowercaseCharArray)
  }

  if(specialChar) {
    passwordNew.push(
      specialCharArray[Math.floor(Math.random() * specialCharArray.length)]
    );
    passwordLength--;
    pool = pool.concat(specialCharArray)
  }

  for (let i = 0; i < passwordLength; i++) {
    passwordNew.push(pool[Math.floor(Math.random() * pool.length)]);
  }

  return passwordNew.join("");
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  }

function promptCheck (numberInput, message) {
  var isNumber = false;
  while (!isNumber) {
    numberInput = prompt(message);
    if (numberInput == null){
      alert("please enter a value");
    } else if (isNaN(parseInt(numberInput))) {
      alert("please enter a valid number");
    } else {
      numberInput = parseInt(numberInput);
      isNumber = true;
    }
  }
  return numberInput;
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
