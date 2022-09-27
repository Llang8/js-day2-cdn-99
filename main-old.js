/* 
Defining Variables
*/

/* var hello = 'world'
let world = 'hello'
const favoriteNumber = 10

const add = function() {
    console.log('HELLO')
}

add2 = 10

add() */
let people = [
    'Christopher',
    'Jack',
    'Lola',
    'Pam',
    'Gordon',
    'Mike'
]

let pageHeading = 'Home'

let peopleEl = document.getElementById('people')
let heading = document.getElementsByClassName('main-heading')[0]
let links = document.getElementsByTagName('a')

let heading2 = document.querySelector('#people')

console.log(heading2)

/* .innerText => Updating ONLY text */
heading.innerText = pageHeading

for (let person of people) {
    /* .innerHTML => Updating HTML code */
    peopleEl.innerHTML += `
        <p>${person}</p>
    `
}