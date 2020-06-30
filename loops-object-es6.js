// review of loops
// Array data type has forEach()
//for loop
//while

// three statements in one line
// a) first line before the loop runs the first time
// b) code condition (aka predicate) that checks for exiting the loop
// c) what happens after each loop
// i short for index
// condition
// run after each loop i = i + 1; hits the end
// each time loop complete then it'll increment
// once loop complete then i is reset to 0
// i<10, loop will continue

for (let i=0; i<=10; i++) {
  console.log('Loop number' + i);
}
//how do I get to the loop numbers?

// introducing arrow functions

function calculateAge () {

}

//remove function keywword.  whatever in the perenteses into the curly brackets
const calculateHeight = () => {}

const officeWorks = ['Toby', 'Creed', 'Kevin', 'Michael']

//same as function() {}, remove function add arrow between () {}
//item=officeWorker
officeWorks.forEach((officeWorks) => {
  console.log(officeWorks)
})

// more about objects
// object {attributes}

const cloneTrooper = {
  name: 'Fin',
  rank: 'Lead'
}

cloneTrooper.rank = 'E1'

// triple dot `...` aka destructuring

//whatever is remainder of the array
const [firstPerson, secondPerson, ...everyOneElse] = officeWorks

console.log ({firstPerson, secondPerson, everyoOneElse})

// ...Object
const nameThisway = cloneTrooper.name
const { name } = cloneTrooper
console.log({nameThisWay, name })
