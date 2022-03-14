// Assignment code here
// TEST COMMENT HERE TO INSURE BRANCHES ARE MERGING AND PUSHING FROM FEATURE TO MAIN CORRECTLY AFTER INITIAL SETUP!





// // Get references to the #generate element
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//     var password = generatePassword();
//     var passwordText = document.querySelector("#password");

//     passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);


// console.log("Hello World!");



// var characterSelect = function () {

//     var characterResult = window.prompt("How many characters long do you want your password to be? Please type a number greater than 8 but less than 128");

//     if (characterResult >= 8 && characterResult <= 128) {
//         console.log("You chose a valid number");
//         window.alert("you chose a valid number");
//     } else {
//         console.log("you chose an invalid option, try again");
//         window.alert("you chose an invalid option, try again");
//         characterSelect();
//     }
// }


// characterSelect();


// console.log("we made it!");


var characterResult = 0;

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

characterSelect();

console.log("system has stored the user value selected for total number of characters");
console.log(characterResult + " is the number of characters for the password. ");

// end data collection for user selection of character amount


// begin data collection for user selection of uppercase character


// set upperCaseResult to 0 so that when upperCaseSelect function is called...
//... the if and first else if condition are not met, and the else if (i==0) is true, so it executes the code block.
// the user input from the 2nd else if prompt becomes the new value for the upperCaseResult variable if it passes...
//... the first if condition when it loops through. It breaks the loop with break; and we move on.

var upperCaseResult = 0;

function upperCaseSelect() {
    for (i = 0; i > -1; i++) {
        if (upperCaseResult === "yes") {
            console.log("user accepted uppercase characters");
            break;
        } else if (upperCaseResult === "no") {
            console.log("user rejected uppercase characters");
            break;
        } else if (i == 0) {
            upperCaseResult = window.prompt("Do you want to use uppercase character? type yes or no")
        } else {
            upperCaseResult = window.prompt("You choose an invalid number, try again. Please type yes or no");
        }
    }
}

// call function
upperCaseSelect();

console.log("we made it past upperCaseSelect");
console.log(characterResult + " rechecking if characterResult variable still saved");
console.log(upperCaseResult + " checking if uppercase selection is saved here");

// end data collection for user selection of uppercase character

