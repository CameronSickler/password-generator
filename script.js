// Array of strings set as variable - global
var bucketOfChoices = [];
const bucketOfPassword = [];
var bucketOfPasswordString = "placeholder";
// List of Arrays of strings set as variables that contain the characters used in a generated password - global
var upperC = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P'];
var lowerC = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p'];
var numericV = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialV = ['!', '$', '?', '@', '%', '&'];


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



// Begin series of functions set as variables here

var characterResult = 0;
// this function will prompt user for input regarding how many characters the password should contain
function characterSelect() {
    for (i = 0; i > -1; i++) {
        if (characterResult <= 128 && characterResult >= 8) {
            console.log("user selected a correct number value of " + characterResult);
            window.alert("Thank you. " + " There will be a total of " + characterResult + " characters in your password. ");
            return;
        } else if (i == 0) {
            characterResult = window.prompt("How many characters do you want in your password? Choose any number between 8 and 128");
        } else {
            characterResult = window.prompt("You choose an invalid number, please try again");
            console.log("user typed an invalid entry and will be prompted again");
        }
    }
}

var upperCaseResult = 0;
// this function will prompt user for input regarding the use of uppercase letters in the password
function upperCaseSelect() {
    for (i = 0; i > -1; i++) {
        if (upperCaseResult === "yes" || upperCaseResult === "Yes") {
            console.log("user accepted uppercase characters");
            window.alert("Thank you. Your password will contain uppercase letters");
            bucketOfChoices = bucketOfChoices.concat(upperC);
            return;
        } else if (upperCaseResult === "no" || upperCaseResult === "No") {
            console.log("user rejected uppercase characters");
            window.alert("Thank you. Your password will not contain uppercase letters");
            return;
        } else if (i == 0) {
            upperCaseResult = window.prompt("Do you want to use uppercase characters? type yes or no")
        } else {
            upperCaseResult = window.prompt("You typed an invalid entry. Please try again. Please type yes or no");
            console.log("user typed an invalid entry and will be prompted again");
        }
    }
}

var lowerCaseResult = 0;
// this function will prompt user for input regarding the use of lowercase letters in the password
function lowerCaseSelect() {
    for (i = 0; i > -1; i++) {
        if (lowerCaseResult === "yes" || lowerCaseResult === "Yes") {
            console.log("user accepted lowercase characters");
            window.alert("Thank you. Your password will contain lowercase letters");
            bucketOfChoices = bucketOfChoices.concat(lowerC);
            return;
        } else if (lowerCaseResult === "no" || lowerCaseResult === "No") {
            console.log("user rejected lowercase characters");
            window.alert("Thank you. Your password will not contain lowercase letters");
            return;
        } else if (i == 0) {
            lowerCaseResult = window.prompt("Do you want to use lowercase characters? type yes or no")
        } else {
            lowerCaseResult = window.prompt("You choose an invalid number, try again. Please type yes or no");
            console.log("user typed an invalid entry and will be prompted again");
        }
    }
}

var numericResult = 0;
// this function will prompt user for input regarding the use of numeric characters in the password
function numericSelect() {
    for (i = 0; i > -1; i++) {
        if (numericResult === "yes" || numericResult === "Yes") {
            console.log("user accepted numeric characters");
            window.alert("Thank you. Your password will contain numbers");
            bucketOfChoices = bucketOfChoices.concat(numericV)
            return;
        } else if (numericResult === "no" || numericResult === "No") {
            console.log("user rejected numeric characters");
            window.alert("Thank you. Your password will not contain numbers");
            return;
        } else if (i == 0) {
            numericResult = window.prompt("Do you want to use numeric characters? type yes or no")
        } else {
            numericResult = window.prompt("You choose an invalid option, try again. Please type yes or no");
            console.log("user typed an invald entry and will be prompted again");
        }
    }
}

var specialCharacterResult = 0;
// this function will prompt user for input regarding the use of special characters in the password
function specialCharacterSelect() {
    for (i = 0; i > -1; i++) {
        if (specialCharacterResult === "yes" || specialCharacterResult === "Yes") {
            console.log("user accepted special characters");
            window.alert("Thank you. Your password will contain special characters");
            bucketOfChoices = bucketOfChoices.concat(specialV);
            return;
        } else if (specialCharacterResult === "no" || specialCharacterResult === "No") {
            console.log("user rejected special characters");
            window.alert("Thank you. Your password will not contain special characters");
            return;
        } else if (i == 0) {
            specialCharacterResult = window.prompt("Do you want to use special characters? type yes or no")
        } else {
            specialCharacterResult = window.prompt("You choose an invalid option, try again. Please type yes or no");
            console.log("user typed an invalid entry and will be prompted again");
        }
    }
}

// End series of functions set as variables here

// Begin variable containing function that will loop until an array is filled with random values 
// that meet the user's criteria. This array will then use its items as the password.
function passwordCreator() {
    i = 0
    while (i < characterResult) {
        if (upperCaseResult === "yes" || upperCaseResult === "Yes") {
            addUpperC = upperC[Math.floor(Math.random() * upperC.length)];
            bucketOfPassword.push(addUpperC);
            console.log(addUpperC + " this is a random uppercase letter added to the bucketOfPassword array");
            i = i + 1;
        }
        if (i >= characterResult) {
            break;
        }
        if (lowerCaseResult === "yes" || lowerCaseResult === "Yes") {
            addLowerC = lowerC[Math.floor(Math.random() * lowerC.length)];
            bucketOfPassword.push(addLowerC);
            console.log(addLowerC + " this is a random lowercase letter added to the bucketOfPassword array");
            i = i + 1;
        }
        if (i >= characterResult) {
            break;
        }
        if (numericResult === "yes" || numericResult === "Yes") {
            addNumericV = numericV[Math.floor(Math.random() * numericV.length)];
            bucketOfPassword.push(addNumericV);
            console.log(addNumericV + " this is a random number added to the bucketOfPassword array");
            i = i + 1;
        }
        if (i >= characterResult) {
            break;
        }
        if (specialCharacterResult === "yes" || specialCharacterResult === "Yes") {
            addSpecialV = specialV[Math.floor(Math.random() * specialV.length)];
            bucketOfPassword.push(addSpecialV);
            console.log(addSpecialV + " this is a random special character added to the bucketOfPassword array");
            i = i + 1;
        }
    }
}

function makePasswordString() {
    bucketOfPasswordString = bucketOfPassword.toString();
    bucketOfPasswordString = bucketOfPasswordString.replaceAll(',', '');
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
    finalChecker();
    passwordCreator();
    makePasswordString();
    // call a function that gens a pw
    return (bucketOfPasswordString);
}

// This function is designed to show the coder if user input is being stored into variables and those variables are saving the input
// so the variables can be used globally with values that reflect the user's input
function finalChecker() {
    console.log(characterResult + " characterResult");
    console.log(upperCaseResult + " upperCaseResult");
    console.log(lowerCaseResult + " lowerCaseResult");
    console.log(numericResult + " numericResult");
    console.log(specialCharacterResult + " specialCharacterResult");
    console.log(bucketOfChoices + " number of choices");
    console.log(bucketOfPassword);
};
