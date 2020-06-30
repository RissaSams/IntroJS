let drink = 2.50;
let sandwhich = 6.25;
let chips = 1.50;
let cookie = 1;
let total = drink + sandwhich + chips + cookie;
let tax = total * .08;
let sum = total + tax;

console.log("Your purchace comes to $" + total + " plus tax of $" + tax.toFixed(2) + " for a total of $" + sum + 
". Thanks for shopping at Edge Tech!");