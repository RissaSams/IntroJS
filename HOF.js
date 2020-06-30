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

let gsw = players.filter(p => p.Team == 'UTA');
let totalJazz$$ = gsw.reduce((total, p) => total + p.Salary, 0)
console.log('Total Jazz Salary ' + totalJazz$$);

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