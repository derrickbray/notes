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
    this.first = data.firstName;
    this.last = data.lastName;
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

// for (let i = 0; i < character.length; i++) {
//   const c = new Character(character[i]);
//   console.log(c);
// }
character.forEach((item) => {
  const c = new Character(item);

  const el = document.createElement('div');
  el.classList.add('character');
  el.innerHTML = `
  <p class="character__name"></p>
  <p class="character__profession"></p>
  <p class="character__age"></p>`;

  el.querySelector('.character__name').innerText = `${c.first} ${c.last}`;
  el.querySelector('.character__profession').innerText = c.profession;
  el.querySelector('.character__age').innerText = c.age;

  document.body.appendChild(el);

  console.log(c);
});
