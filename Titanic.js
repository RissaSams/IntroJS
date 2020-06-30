const passengers = require('./titanic.json');
console.log(passengers.length);

let survivors = passengers.filter(p => p.Survivor == "T");
console.log(survivors.length);

survivors.forEach(p => p.Age |= 0);
console.log(passengers[0]);

let age = survivors.reduce((total, p) => total + p.Age, 0);
console.log(age/survivors.length);

// 3rd class passengers over 60
let third60 = passengers.filter(p => p.Class === '3rd Class' && p.Age > 60).map(p => p.FirstName);
console.log(third60.length); 

//  find the captain
let captain = passengers.filter(p => p.FirstName.startsWith('Cap'));
console.log(captain);

//      how many captains are there
console.log(captain.length);

// how many crew died
let deaths = passengers.filter(p => p.Survivor == "F");
console.log(deaths.length);

// find the Musicians
let musician = passengers.filter(p => p.Role === 'Musicians');
console.log(musician);

//  get list of women
let women = passengers.filter(p => p.FirstName.startsWith('Mrs') 
                                || p.FirstName.startsWith('Ms') 
                                || p.FirstName.startsWith('Miss'))
                    .map(p => p.FirstName);
console.log(women);