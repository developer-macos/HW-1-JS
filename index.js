// First Homework of Javascript \\

const age = 15;

let name = "Vova";

// console.log(name);

// Set the variable
let isStudent = true; // Change to false to test

// Check if isStudent is true


if (isStudent) {
    console.log("The user is a student.");
} else {
    console.log("The user is not a student.");
}


let myString = "I love strings!";

var myNumber = 10;

var anotherNumber = 20;

var newNumber = anotherNumber - myNumber;

var myNull = null;

const myName = prompt("What is your name?")
const myConfirm = confirm("Do you want to go to my party?")

if myConfirm true then {
    alert("thanks!")
    else {
        alert(Sorry get out.)
    }
}


// Get the button
const checkBtn = document.getElementById("checkBtn");

// Add an event listener to handle the click
checkBtn.addEventListener("click", function () {
    // Show a confirm dialog
    const isStudent = confirm("Click 'OK' for Yes or 'Cancel' for No.");

    // Display appropriate message based on user response
    if (isStudent) {
        alert("Дякую за підтвердження!");
    } else {
        alert("Дію відмінено");
    }
});

// Get the button element
const dangerBtn = document.getElementById("dangerBtn");

// Add event listener for the button
dangerBtn.addEventListener("click", function () {
    // Show an alert to warn the user
    alert("Увага! Ця дія може бути небезпечною.");

    // Ask for confirmation
    const confirmAction = confirm("Ви впевнені, що хочете продовжити?");

    // Show appropriate message based on user's choice
    if (confirmAction) {
        alert("Дякую за підтвердження!");
    } else {
        alert("Дію відмінено!");
    }
});



console.log(myNull);


