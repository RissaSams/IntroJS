let name = "Marissa Dorman";
let birthday = "June 3rd"
let birthyear = 1997;
let timeofbirth = "10:46pm";
let age = 22;
let zodiac = "Gemini";
let favsong = "Right Left Wrong";

console.log("My name is " + name + ". I was born on " + birthday + ", " + birthyear + " at " + timeofbirth +
". I am a " + age + " year old " + zodiac + " and my favorite song is " + favsong + ".");

let days = (new Date() - new Date(1997, 6, 3)) / (1000 * 60 * 60 * 24);
console.log("I am " + days + " days old.");

let seconds = (new Date() - new Date(1997, 6, 3)) / 1000;
console.log("I am " + seconds + " seconds old.");