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



function runitall() {

    var x = window.prompt("pick a number");
    for (i = 0; i > -1; i++) {
        if (x <= 128 && x >= 8) {
            window.alert("nice number selection");
            break;
        } else {
            window.alert("You choose an invalid number, try again");
            runitall();
        }
    }
}

runitall();

console.log("nice we got to it");