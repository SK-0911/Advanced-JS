"use strict";

let funcBody = prompt("Enter the body of your function: ");

let weightedScore = new Function("verbalScore", "mathScore", funcBody);

console.log("Weighted score for (78, 91): ", weightedScore(78, 91));
console.log("Weighted score for (86, 79): ", weightedScore(86, 79));

let greet = new Function("console.log(' Welcome to Skillsoft!')");

greet();
