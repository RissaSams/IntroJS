let ans;
ans = NumToWord(Math.floor((Math.random()*10)));
console.log(ans);
ans = KidAlphabet("g");
console.log(ans);
ans = MilitaryAlphabet("j");
console.log(ans);

function NumToWord(num){
    
    let wordnum = "";
    switch(num) {
        case 0:  wordNum = "zero";       break;
        case 1:  wordNum = "one";        break;
        case 2:  wordNum = "two";        break;
        case 3:  wordNum = "three";      break;
        case 4:  wordNum = "four";       break;
        case 5:  wordNum = "five";       break;
        case 6:  wordNum = "six";        break;
        case 7:  wordNum = "seven";      break;
        case 8:  wordNum = "eight";      break;
        case 9:  wordNum = "nine";       break;
        default:   wordNum = "not valid";break;
    }
    return wordNum;
}

function KidAlphabet(letter){
    let word = "";
    switch (letter) {
        case "a":  word = "apple";              break;
        case "b":  word = "banana";             break;
        case "c":  word = "cherry";             break;
        case "d":  word = "dragon fruit";       break;
        case "e":  word = "elderberry";         break;
        case "f":  word = "figs";               break;
        case "g":  word = "grape";               break;
        case "h":  word = "honeydew";           break;
        case "i":  word = "imbe";               break;
        case "j":  word = "java";               break;
        case "k":  word = "kiwi";               break;
        case "l":  word = "lime";               break;
        case "m":  word = "mango";              break;
        default:   word = "purchase to unlock"; break;
    }
    return word;
}

function MilitaryAlphabet(letter){
    let military = "";
    switch (letter) {
        case "a": military = "alpha";         break;
        case "b": military = "bravo";         break;
        case "c": military = "charlie";       break;
        case "d": military = "delta";         break;
        case "e": military = "echo";          break;
        case "f": military = "foxtrot";       break;
        case "g": military = "golf";          break;
        case "h": military = "hotel";         break;
        case "i": military = "indea";         break;
        case "j": military = "juliet";        break;
        case "k": military = "kilo";          break;
        case "l": military = "lima";          break;
        case "m": military = "mike";          break;
        case "n": military = "november";      break;
        case "o": military = "oscar";         break;
        case "p": military = "papa";          break;
        case "q": military = "quebec";        break;
        case "r": military = "romeo";         break;
        case "s": military = "sierra";        break;
        case "t": military = "tango";         break;
        case "u": military = "uniform";       break;
        case "v": military = "victor";        break;
        case "w": military = "whiskey";       break;
        case "x": military = "x-ray";         break;
        case "y": military = "yankee";        break;
        case "z": military = "zulu";          break;
        default: military = "enter a letter"; break;
    }
    return military;
}