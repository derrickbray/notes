import 'whatwg-fetch';
// practicing with prototypes

const duck = 'Daffy';

console.log(duck.length);

console.log(duck.split(''));

const h = {
  firstName: 'Homer',
  lastName: 'Simpson',
  age: 39,
  occupation: 'safety inspector',
};

function createCharacter(firstName, lastName, age, occupation) {
  return {
    firstName,
    lastName,
    age,
    occupation,
    getFullName() {
      return `${this.firstName} ${this.lastName}`;
    },
  };
}

const m2 = createCharacter('marge', 'Simpson', 36, 'curently unemployed');
const h2 = createCharacter('homer', 'Simpson', 39, 'safety inspector');

console.log(m2.getFullName);
console.log(m2.getFullName());
console.log(h2.getFullName);
console.log(h2.getFullName());

// the "new" keyword and constructor functions
function Simpson(firstName, lastName, age, occupation) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.occupation = occupation;
}
Simpson.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

const m3 = new Simpson('marge', 'simpson', 36, 'unemployed');
const h4 = new Simpson('homer', 'Simpson', 39, 'safety inspector');

console.log(m3);
console.log(typeof m3);
console.log(m3 instanceof Simpson);
console.log(m3.getFullName);

import character from './fringe';

// function Character(data) {
//   this.firstName = data.firstName;
//   this.lastName = data.lastName;
//   this.universe = data.universe;
//   this.age = data.age;
//   this.profession = data.profession;
// }

// character.prototype.isTrustworthy = function () {
//   return this.universe === 1;
// };

class Character {
  constructor(data) {
    this.firstName = data.firstName;
    this.lastName = data.lastName;
    this.universe = data.universe;
    this.age = data.age;
    this.profession = data.profession;
  }

  isTrustworthy() {
    return this.universe === 1;
  }
}

Character.prototype.showName = 'Fringe';

const olivia = new Character(character[0]);
console.log(olivia.showName);
console.log(olivia.isTrustworthy());
