"use strict";

console.log("overly-excited.js");


// Stacking Words

// Create an addExcitement function that should console.log() rows of words. It should take an array containing the words of
// a sentence and output them in the developer console.

/*let sentence = ["The", " walrus", " danced", " through", " the", " trees", " in", " the", " light", " of", " the", " moon"];
let currentWord = "";

function addExcitement (theWordArray) {
    for (let i = 0; i < sentence.length; i++) {
    	currentWord = currentWord + sentence[i];
    	console.log(currentWord);
    }
}

addExcitement(sentence)*/


// Adding Conditions to the Loop

// Then add logic to addExcitement that places an exclamation point (!) after every third word. This will require you to do
// some basic math in JavaScript, and use an if statement.

/*let sentence = ["The", " walrus", " danced", " through", " the", " trees", " in", " the", " light", " of", " the", " moon"];
let currentWord = "";
let count = 0;

function addExcitement (theWordArray) {
    for (let i = 0; i < sentence.length; i++) {
    	count = count + 1;
    	if (count % 3 === 0) {
    		currentWord = currentWord + sentence[i] + "!";
    	} else {
    		currentWord = currentWord + sentence[i];
    	}
    console.log(currentWord);
    }
}

addExcitement(sentence)*/


// Challenge

// Add logic in the addExcitement function to the increase the number of exclamation points after every third word. The
// number of exclamation points (!) will be determined by how many times the counter variable can be divided by 3.

let sentence = ["The", " walrus", " danced", " through", " the", " trees", " in", " the", " light", " of", " the", " moon"];
let currentWord = "";
let count = 0;
let addOn = "";

function addExcitement (theWordArray) {
    for (let i = 0; i < sentence.length; i++) {
    	count = count + 1;
    	if (count % 3 === 0) {
    		addOn = addOn += "!";
    		currentWord = currentWord + sentence[i] + addOn;
    	} else {
    		currentWord = currentWord + sentence[i];
    	}
    console.log(currentWord);
    }
}

addExcitement(sentence)