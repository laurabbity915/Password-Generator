// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  console.log(document.getElementById("upper").checked);
  console.log(document.getElementById("lower").checked);
  console.log(document.getElementById("number").checked);
  console.log(document.getElementById("specialcharacters").checked);
  console.log(document.getElementById("quantity").value);

  let passwordCharSet = [];

  if (document.getElementById("upper").checked == true) {
    passwordCharSet.push(...upperCasedCharacters);
  }
  if (document.getElementById("lower").checked == true) {
    passwordCharSet.push(...lowerCasedCharacters);
  }
  if (document.getElementById("number").checked == true) {
    passwordCharSet.push(...numericCharacters);
  }
  if (document.getElementById("specialcharacters").checked == true) {
    passwordCharSet.push(...specialCharacters);
  }

  return passwordCharSet;

}

// Function for getting a random element from an array
function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Function to generate password with user input
function generatePassword() {

  let mergedCharSet = getPasswordOptions();
  let generatedPassword = '';
  for (let i = 0; i < document.getElementById("quantity").value; i++) {
    generatedPassword += getRandom(mergedCharSet);
  }
  if (!isValidate(generatedPassword)) {
    console.log("retry " + generatedPassword);

    generatePassword();
  } else {
    writePassword(generatedPassword);
  }
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

//Validation of generated password
function checkUpperCase(password) {
  if (document.getElementById("upper").checked == true) {
    if (/^(?=.*[A-Z])/.test(password)) {
      return true;
    }
    return false;
  }
  return true;
}

function checkLowerCase(password) {
  if (document.getElementById("lower").checked == true) {
    if (/^(?=.*[a-z])/.test(password)) {
      return true;
    }
    return false;
  }
  return true;
}

function checkNumber(password) {
  if (document.getElementById("number").checked == true) {
    if (/^(?=.*[0-9])/.test(password)) {
      return true;
    }
    return false;
  }
  return true;
}

function checkSpecialCharacters(password) {
  if (document.getElementById("specialcharacters").checked == true) {
    let split = password.split('');
    console.log(split)
    for (let i = 0; i < split.length; i++) {
      if (specialCharacters.includes(split[i])) {
        return true;
      }
    }
    return false;
  }
  return true;
}

function isValidate(password) {

  return checkUpperCase(password) &&
    checkLowerCase(password) &&
    checkNumber(password) &&
    checkSpecialCharacters(password);

}

// Write password to the #password input
function writePassword(password) {
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}