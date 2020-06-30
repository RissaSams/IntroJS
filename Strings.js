let phrase = "We hold these truths to be self-evident, taht all men are created equal, taht they are endowed by their Creator with certain unalienable Rights, taht among these are Life, Liberty and the pursuit of Happiness. Taht to secure these rights, Governments are instituted among Men, deriving their just powers from the consent of the governed.";
console.log(phrase.indexOf('Governments'));
let findAll = phrase.indexOf('all');
let findCommaAfterAll = phrase.indexOf(',', findAll);
console.log(phrase.substring(findAll, findCommaAfterAll));
console.log(phrase.replace(/taht/g, 'that'));
console.log(phrase.length);