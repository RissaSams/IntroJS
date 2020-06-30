const players = require('./JSON/NBAPlayers.json');
console.log(players.length);

cleanUp(players);

let team = 'DAL';
let theTeam = getTeamMemebers(team, players);
let centers = getPosition('Center', theTeam);
let averagePoints = getPoints(theTeam);

let allSalaries = getSalary(players);
let teamSalaries = getSalary(theTeam);
let centerSalaries = getSalary(centers);

function getSalary(team, playerList) {
    let totalSalary = 0;
    for (const player of players) {
        if (player.Team == team) {
            totalSalary += player.Salary;
        }
    }
    return totalSalary;
}

let perMinute = dollarsPerMinute(players[0]);
console.log(players[0].Player + ' earns ' + perMinute + ' dollars per minute');

function dollarsPerMinute(player) {
    let howMuch;

    howMuch = player.Salary / (player.GamesPlayed * player.MinutesPerGame);

    return howMuch;
}

function pointsPerSeason(player) {
    let howMany;

    howMany = player.GamesPlayed * player.Points;

    return howMany;
}
let theScore = pointsPerSeason(players[0]);
console.log(player.Player + " got " + theScore + " points for the season!");

function getTeamMemebers(team, playerList) {
    let teamMemebers = [];
    for (m of playerList) {
        if (m.Team == team) {
            teamMemebers.push(m)
        }
    }
    return teamMemebers;
}

function getPosition (Position, playerList) {
    let Posititons = [];
    for (p of players) {
        if (p.Position == Position) {
            Posititons.push(p)
        }
    }
    return Posititons;
}

function getPoints (team) {
    let totalPoints = 0;
    for (player of team) {
        totalPoints += player.Points
    }
    return totalPoints;
}

function negativesPerYear(getTeamMemebers){
    let totalNeg = 0;

    for (f of getTeamMemebers){
        totalNeg += (f.Fouls * f.GamesPlayed) + (f.Turnovers * f.GamesPlayed);
    }
    return totalNeg;
}
let roster = getTeamMemebers('DAL', players);
let teamNegs = negativesPerYear(roster);
console.log('Dallas had ' + teamNegs + ' fouls and turnovers this year!');

console.log(players[0])
for (const player of players) {
    if ( player.Team == "ORL") {
        console.log(player.Player + ' plays ' + player.Position);
    }
}

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