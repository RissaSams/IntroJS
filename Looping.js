let declaration = "We hold these truths to be self-evident, that all men are created equal, " + 
"that they are endowed by their Creator with certain unalienable Rights, that among these are Life, " + 
"Liberty and the pursuit of Happiness. That to secure these rights, Governments are instituted among Men, " + 
"deriving their just powers from the consent of the governed.";

let words = declaration.split(' ');
console.log(words.length);

let sevenLetterWords = {};
for (let i = 0; i < words.length; i++) {
    if (words[i].length <= 7){
        sevenLetterWords.push(words[i]);
    }
}
console.log(sevenLetterWords);

for (let x = 0; x < sevenLetterWords.length; x++) {
    if (sevenLetterWords[x].startsWith('t')){
        sevenLetterWords[x] = sevenLetterWords[x].toUpperCase();
    }
}
console.log(sevenLetterWords);