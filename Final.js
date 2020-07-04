const fs = require('fs')

let titanic = [];

titanic = readPassengerList();

console.log(titanic.length);

//      Data in the Titanic list

    //      LastName            just a string

    //      FirstName           just a string

    //      Age                 this is a number

    //      PassengerClass      1st Class, 2nd Class, Victualling, Engineering and others

    //      PassengerCrew       'Passenger' or 'Crew'

    //      Role                special job on the ship

    //      Survivor            boolean true or false (lived or died)

    // for these assignments you will use the reduce or filter functions to get a count or list

    // based on the question being asked.

    //  if a list is asked for create a variable to hold the list, print a nice statement that says

    //          'There were ___  Musicians' or 'There were ___ passengers over 50 that died'.

//    TODO 5  points      get the survivors count
let survived = titanic.filter(t => t.survivor == true);
console.log(survived.length + ' people survived.');

//    TODO 5  points      get the perished count
let dead = titanic.filter(t => t.survivor == false);
console.log(dead.length + ' people died.');

//    TODO 5  points      Find all passengers the the last name that starts with 'Z'
let zLast = titanic.filter(t => t.lastname.startsWith('Z'));
console.table(zLast);

//    TODO 5  points      find all people under 10
let under10 = titanic.filter(t => t.age < 10);
console.log('There were ' + under10.length + ' kids under 10')

//    TODO 5  points      find passengers over 50 that died
let deadOver50 = titanic.filter(t => t.survivor == false && t.age > 50);
console.log('There were ' + deadOver50.length + ' passengers over 50 that died.');

//    TODO 5  points      find all passengers with the name Henry
let henry = titanic.filter(t => t.firstname.indexOf('Henry') >= 0);
console.log('There were ' + henry.length + ' Henrys on the ship.');

//    TODO 5  points      count all Musicians
let musicians = titanic.filter(t => t.role == 'Musician');
console.log('There were ' + musicians.length + ' musicicans on the ship.');

//    TODO 5  points      find all crew members
let crew = titanic.filter(t => t.passengerCrew == 'Crew');
console.log('The Titanic had ' + crew.length + ' crew members.');

//    TODO 5  points      find all 3rd class passengers the survived
let survivor3 = titanic.filter(t => t.passengerClass == '3rd Class' && t.survivor == true);
console.log(survivor3.length + ' 3rd Class members survived.');

//    TODO 5  points      count all Victualling staff
let victual = titanic.filter(t => t.passengerClass == 'Victualling');
console.log('There were ' + victual.length + ' people on the Victualling staff.');

function readPassengerList() {

    let titanic = [];

    //  read the file like basic text

    //  titanic.csv is a comma separated variable file (fields are separated by commas)

    //  it is a listing of all passengers and crew from the Titanic. 

    //  Including those that show up for work and those that got on just to cross over to SouthHampton

    let data = fs.readFileSync('/Projects/csv/Titanic.csv', {

        encoding: 'utf-8'

    });

    //  The text we received is one LARGE text string

    //  each line is separated by a CR LF

    //  split the large text string into individual lines

    let lines = data.split('\r\n');

    //  grab the first row. It is the headings for the column names

    //  SHIFT the FIRST element of the array off of the passenger names array

    //  it contains the column names as a string

    //      "Last Name,First Name,Age,Class,Passenger or Crew,Role,Survivor"

    //  Split on , to get an array of the column names

    //      ['Last Name', 'First Name', 'Age', 'Class', 'Passenger or Crew', 'Role', 'Survivor']

    //  Each line represents a passenger or crew member on the ship

    //      "BROWN, Mrs Margaret ,44,1st Class,Passenger,,T"

    for (let line of lines) {

        //  split the line on , to get the individual attributes into an array

        //      [BROWN/ Mrs Margaret ', '44', '1st Class', 'Passenger', '', 'T']

        //      This BTW is the famous 'Molly' Brown as in the 'Unsinkable Molly Brown'

        let attributes = line.split(',');

        //  create a passenger using the data from the text file

        //                         Name,                         Age,           Class,      Passenger or Crew, Role,        Survivor

        let person = new Passenger(attributes[0], attributes[1], attributes[2], attributes[3], attributes[4], attributes[5], attributes[6]);

        //  save each passenger and crew member to the titanic manifest

        titanic.push(person);

    }

    titanic.shift();
    titanic.pop();

    return titanic;

}

//  The Passenger Object

function Passenger(LastName, FirstName, Age, PassengerClass, PassengerCrew, Role, Survivor) {

    this.lastname = LastName;

    this.firstname = FirstName;

    this.age = +Age; //  +Age will convert age to a number

    this.passengerClass = PassengerClass; //  1st, 2nd, 3rd...

    this.passengerCrew = PassengerCrew; //  'Passenger' or 'Crew'

    this.role = Role; //  secondary job (Delivery trip only), Servant, Musician

    this.survivor = Survivor == 'T'; //  True or False

}