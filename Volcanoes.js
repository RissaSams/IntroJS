const volcanoes = require('./volcano.json');

volcanoes.forEach(function(volcano) {
    console.log(volcano.Name);
})

let vol1970s = volcanoes.filter(vol => vol.Year >= 1970 && vol.Year <= 1979)
vol1970s.forEach(x => console.log(x.Name + " erupted in " + x.Year));

let volUSA = volcanoes.filter(vol => vol.Country == 'United States')
volUSA.forEach(v => console.log(v.Name + " erupted in " + v.Country));

let italy = volcanoes.filter(v => v.Country === 'Italy' && v.Year < 800);

let italyBefore800 = volcanoes.filter(v => v.Country === 'Italy').filter(v => v.Year < 800);
//let italyBefore800 = volcanoes.filter(v => v.Country === 'Italy' && v.Year < 800);

let volNames = volcanoes.filter(v => v.Country === 'United States').map(v => v.Name);
console.log(volNames);

let totalDeaths = volcanoes.reduce((total, v) => total + v.DEATHS|0, 0);
console.log(totalDeaths);

//  number of deaths in the united states
let usDeaths = volcanoes.filter(v => v.Country === 'United States').reduce((total, v) => total + v.DEATHS|0, 0);
console.log('The US had ' + usDeaths + ' deaths from volcanoes.');

//  average elevation of all volcanoes
let ele = volcanoes.reduce((total, v) => total + v.Elevation, 0);
console.log(ele/volcanoes.length);

//  how many volcanoes erupted after 2000
let vol2000s = volcanoes.filter(v => v.Year >= 2000).length;
console.log(vol2000s + ' volcanoes erupted after 2000.')

//  create an array of strings (use map) of the names of volcanoes in Chile after 1970s
let volChile = volcanoes.filter(v => v.Country === 'Chile' && v.Year >= 1970).map(v => v.Name);
console.log(volChile);

//  create array of countries where there were more than 200 deaths after 1900
let deaths1900s = volcanoes.filter(v => v.Year >= 1900 && v.DEATHS > 200).map(v => v.Name);
console.log(deaths1900s);

//  get array of volcanos in the US after 1900 above 2000 feet
let vol1900s = volcanoes.filter(v => v.Year >= 1900 && v.Elevation > 2000 && v.Country === 'United States')
                        .map(v => v.Name);
console.log(vol1900s);

//      how many people died in that last set of volcanoes
let lastVol = volcanoes.filter(v => v.Year >= 2010).reduce((total, v) => total + v.DEATHS|0, 0);
console.log(lastVol);

//      how many volcanoes was that?
let numVol = volcanoes.filter(v => v.Year > 2010 && v.DEATHS > 0);
console.log(numVol.length);

//      what are the names of the volcanoes (use map to create a new array)
let nameVols = numVol.map(v => v.Name);
console.log(nameVols);

//let yellowStone = volcanoes.filter(v => v.Name === 'Yellowstone');
//console.log(yellowStone);