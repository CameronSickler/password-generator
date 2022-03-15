var bucketOfChoices = [];
var upperC = ['A', 'B', 'C'];
var lowerC = ['a', 'b', 'c'];
var numericV = ['1', '2', '3'];
var specialV = ['!', '$', '?'];
//array of strings


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


console.log("Hello World!");

// Begin my code here

var characterResult = 0;
// this function will prompt user for input regarding how many characters the password should contain
function characterSelect() {
    for (i = 0; i > -1; i++) {
        if (characterResult <= 128 && characterResult >= 8) {
            console.log("user selected a correct number value");
            break;
        } else if (i == 0) {
            characterResult = window.prompt("How many characters do you want in your password? Choose any number between 8 and 128");
        } else {
            characterResult = window.prompt("You choose an invalid number, please try again");
        }
    }
}

console.log("system has stored the user value selected for total number of characters");
console.log(characterResult + " is the number of characters for the password. ");


var upperCaseResult = 0;
// this function will prompt user for input regarding the use of uppercase letters in the password
function upperCaseSelect() {
    for (i = 0; i > -1; i++) {
        if (upperCaseResult === "yes" || upperCaseResult === "Yes") {
            console.log("user accepted uppercase characters");
            bucketOfChoices = bucketOfChoices.concat(upperC)
            return;
        } else if (upperCaseResult === "no" || upperCaseResult === "No") {
            console.log("user rejected uppercase characters");
            break;
        } else if (i == 0) {
            upperCaseResult = window.prompt("Do you want to use uppercase characters? type yes or no")
        } else {
            upperCaseResult = window.prompt("You typed an invalid entry. Please try again. Please type yes or no");
        }
    }
}

console.log("we made it past upperCaseSelect");
console.log(characterResult + " rechecking if characterResult variable still saved");
console.log(upperCaseResult + " checking if uppercase selection is saved here");


var lowerCaseResult = 0;
// this function will prompt user for input regarding the use of lowercase letters in the password
function lowerCaseSelect() {
    for (i = 0; i > -1; i++) {
        if (lowerCaseResult === "yes" || lowerCaseResult === "Yes") {
            console.log("user accepted lowercase characters");
            bucketOfChoices = bucketOfChoices.concat(upperC);
            return;
        } else if (lowerCaseResult === "no" || lowerCaseResult === "No") {
            console.log("user rejected lowercase characters");
            break;
        } else if (i == 0) {
            lowerCaseResult = window.prompt("Do you want to use lowercase characters? type yes or no")
        } else {
            lowerCaseResult = window.prompt("You choose an invalid number, try again. Please type yes or no");
        }
    }
}


console.log("we made it past lowerCaseSelect");
console.log(characterResult + " rechecking if characterResult variable still saved");
console.log(upperCaseResult + " rechecking if upperCaseResult variable still saved");
console.log(lowerCaseResult + " checking if uppercase selection is saved here");


var numericResult = 0;
// this function will prompt user for input regarding the use of numeric characters in the password
function numericSelect() {
    for (i = 0; i > -1; i++) {
        if (numericResult === "yes" || numericResult === "Yes") {
            console.log("user accepted lowercase characters");
            bucketOfChoices = bucketOfChoices.concat(numericV)
            return;
        } else if (numericResult === "no" || numericResult === "No") {
            console.log("user rejected lowercase characters");
            break;
        } else if (i == 0) {
            numericResult = window.prompt("Do you want to use numeric characters? type yes or no")
        } else {
            numericResult = window.prompt("You choose an invalid option, try again. Please type yes or no");
        }
    }
}

console.log("we made it past numericSelect");
console.log(characterResult + " rechecking if characterResult variable still saved");
console.log(upperCaseResult + " rechecking if upperCaseResult variable still saved");
console.log(lowerCaseResult + " rechecking if uppercase selection is still saved");
console.log(numericResult + " checking if numeric selection is saved here");


var specialCharacterResult = 0;
// this function will prompt user for input regarding the use of special characters in the password
function specialCharacterSelect() {
    for (i = 0; i > -1; i++) {
        if (specialCharacterResult === "yes" || specialCharacterResult === "Yes") {
            console.log("user accepted special characters");
            bucketOfChoices = bucketOfChoices.concat(specialV);
            return;
        } else if (specialCharacterResult === "no" || specialCharacterResult === "No") {
            console.log("user rejected special characters");
            break;
        } else if (i == 0) {
            specialCharacterResult = window.prompt("Do you want to use special characters? type yes or no")
        } else {
            specialCharacterResult = window.prompt("You choose an invalid option, try again. Please type yes or no");
        }
    }
}

// this function will call all relevant functions for gathing user data for password criteria in the order...
//.. listed below. The listed functions are designed to return user prompt data to an array called bucketOfChoices.
//.. the last function in this generatePassword function should use a Math object to compile bucketOfChoices array items...
//.. into a password. The return should be designed to hold the password and it becomes displayed on the browser for the user to see. 
function generatePassword() {
    characterSelect();
    upperCaseSelect();
    lowerCaseSelect();
    numericSelect();
    specialCharacterSelect();
    // call a function that gens a pw
    return "temporary password";
}

console.log("we made it past specialCharacterSelect");
console.log(characterResult + " rechecking if characterResult variable still saved");
console.log(upperCaseResult + " rechecking if upperCaseResult variable still saved");
console.log(lowerCaseResult + " rechecking if lowerCaseResult selection is still saved");
console.log(numericResult + " rechecking if numeric selection is still saved");
console.log(specialCharacterResult + " checking if special character result is saved here");
