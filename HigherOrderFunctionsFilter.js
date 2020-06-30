

let students = [{ firstName: 'Eric', lastName: 'Couch', age: 47, gender: 'M', married: true, faction: 'Jedi'},
{ firstName: 'Rashad', lastName: 'Davis', age: 32, gender: 'M', married: false, faction: 'Jedi'},
{ firstName: 'Tigre', lastName: 'Anthony', age: 38, gender: 'M', married: true, faction: 'Jedi'}, 
{ firstName: 'Marissa', lastName: 'Sams', age: 23, gender: 'F', married: false, faction: 'Sith'}, 
{ firstName: 'Maurice', lastName: 'Rodriguez', age: 28, gender: 'M', married: false, faction: 'Sith'}];

// for (let i=0;i<students.length;i++) {
//     if (students[i].married) {
//         console.log(students[i].firstName + ' is married');
//     } else {
//         console.log(students[i].firstName + ' is not married');
//     }
// }

// let over40andMarried = students.filter( student => student.married && student.age > 40)

// for (let i=0;i<over40andMarried.length;i++) {
//     console.log(over40andMarried[i].firstName + ' is married and over 40');
// }

let jedis = students.filter(student => student.faction == 'Jedi');
// for (let i=0;i<jedis.length;i++) {
//     console.log(jedis[i].firstName + ' is a Jedi');
// }

jedis.forEach(function(jedi) {
console.log(jedi.firstName + ' is a jedi')
})

jedis.forEach(jedi => console.log(jedi.firstName + ' is a jedi'))