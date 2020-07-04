const players = require('./JSON/NBAPlayers.json');
console.log(players.length);

cleanUp(players);

let centers = players.filter(p => p.Position == 'Center');
console.log('There are ' + centers.length + ' centers!')

let theBs = players.filter(p => p.Player.indexOf('B') == 0);
theBs = players.filter(p => p.Player.charAt(0)    == 'B');
let startB = players.filter(p => p.Player.startsWith('B'));
console.log(startB.length + ' players have names that start with B.');

let theXs;
theXs = players.filter(p => p.Player.includes('x'));
theXs = players.filter(p => p.Player.search('x') >= 0);
theXs = players.filter(p => p.Player.indexOf('x') >= 0);

let theSons;
theSons = players.filter(p => p.Player.endsWith('son'));

let fourOrMore = players.filter(p => p.ThreePMade >= 4);
console.log(fourOrMore.length + ' players made 4 or more 3-points!');

let gsw = players.filter(p => p.Team == 'UTA');
let totalJazz$$ = gsw.reduce((total, p) => total + p.Salary, 0);
console.log('Total Jazz Salary ' + totalJazz$$);

let totalPoints = gsw.reduce((total, p) => total + p.Points, 0);
console.log('Total Jazz points is ' + totalPoints);

let houRoster = players.filter(p => p.Team == 'HOU');
let hourHiSalary = houRoster.reduce((most, p) => p.Salary > most.Salary ? p : most, houRoster[0]);
houHiSalary = houRoster.reduce(moMoney, houRoster[0]);
function moMoney(most, p) {
    console.log(p.Player + ' ' + p.Salary + ' compare to ' + most.Player + ' ' + most.Salary);
    if (p.Salary > most.Salary)
        return p;
    else
        return most;
}

let min = players.filter(p => p.Team == 'MIN');
let names = min.map(p => p.Player);
let namesAnSalaries = min.map(p => ({name:p.Player, salary:p.Salary}), {});

//find all Shooting Guard with salary > 3M and using map get the name, team and salary
//use console.table to print the output
let shootingOver3M = players.filter(s => s.Position == 'Shooting Guard' && s.Salary > 20000000);
let teamShoot3M = shootingOver3M.map(s => ({name:s.Player, team:s.Team, salary:s.Salary}), {});
console.table(teamShoot3M);

function cleanUp(players) {
    for (const player of players) {
        player.Salary |= 0;
        player.GamesPlayed |= 0;
        player.MinutesPerGame |= 0;
        player.FGMade |= 0;
        player.FGAttempts |= 0;
        player.ThreePMade |= 0;
        player.ThreePAttempts |= 0;
        player.FTMade |= 0;
        player.FTAttempts |= 0;
        player.Turnovers |= 0;
        player.Fouls |= 0;
        player.OffensiveRebounds |= 0;
        player.DefensiveRebounds |= 0;
        player.Rebounds |= 0;
        player.Assists |= 0;
        player.Steals |= 0;
        player.Blocks |= 0;
        player.Points |= 0;                
    }
}