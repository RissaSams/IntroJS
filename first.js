let test = "just a long string of words and characters";
let phrase = 'JavaScript should be learned no matter what your primary programming language is';

let firstName = 'Edge';
let middleName = 'Tech';
let lastName = 'Academy';

let result;
let yesOrNo;
let index;
let chr;

chr = test.charAt(17);
console.log('Found >' + chr + '< at position 17');

chr = test.charAt(1);
console.log('Found >' + chr + '< at position 1');

chr = test.charAt(7);
console.log('Found >' + chr + '< at position 7');

chr = phrase.charAt(26);
console.log('Found >' + chr + '< at position 26');

chr = phrase.charAt(6);
console.log('Found >' + chr + '< at position 6');

chr = phrase.charAt(0);
console.log('Found >' + chr + '< at position 0');

chr = phrase.charAt(phrase.length -1);
console.log('Found >' + chr + '< at the last position');

result = firstName.concat(" " + middleName).concat(" " + lastName);
console.log(result);

yesOrNo = phrase.endsWith('s');
console.log('Does the phrase end with a s? ' + yesOrNo);

yesOrNo = test.startsWith('a');
console.log('Does the sentance start with an a? ' + yesOrNo);

yesOrNo = test.endsWith('Buss Lightyear');
console.log('Does the string end with Buzz Lightyear? ' + yesOrNo);

yesOrNo = test.endsWith('characters');
console.log('Does the string end with characters? ' + yesOrNo);

yesOrNo = phrase.startsWith('jus');
console.log('Does the string start with jus? ' + yesOrNo);

yesOrNo = phrase.startsWith('a bang');
console.log('Does the string start with a bang? ' + yesOrNo);

yesOrNo = test.includes('just');
console.log('does test include \'just\': ' + yesOrNo);

yesOrNo = test.includes('elephant');
console.log('does test include \'elephant\': ' + yesOrNo);

yesOrNo = test.includes('acters');
console.log('does test include \'acters\': ' + yesOrNo);

index = phrase.indexOf('Z');
console.log('Where is the letter \'Z\' located at? ' + index);

index = phrase.indexOf('s');
console.log('Where is the letter \'s\' located at? ' + index);

index = phrase.lastIndexOf('s');
console.log('Where is the letter \'s\' last located at? ' + index);

let astrick = '*';
result = astrick.repeat(20);
console.log(result);

let birthDay = 'Happy Birthdays ';
result = birthDay.repeat(2)
console.log(result);

let split = test.split(' ');
console.log(split[13] + ' is at the 13th part');

split = phrase.split(' ');
console.log(split[4] + ' is at the 4th part');

result = test.slice(7, 18);
console.log(result);

result = test.substr(7, 11);
console.log(result);

result = test.substring(7, 18);
console.log(result);

result = test.slice(14);
console.log(result);

result = test.substr(14);
console.log(result);

result = test.substring(14);
console.log(result);

console.log(result.toUpperCase());

console.log(birthDay.toLowerCase());