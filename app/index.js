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
    firstName, lastName, age, occupation,
    getFullName() {
      return `${this.firstName} ${this.lastName}`;
    },
  };
}

const m2 = createCharacter('marge', 'Simpson', 36, 'curently unemployed');

console.log(m2.getFullName);
console.log(m2.getFullName());
console.log();
console.log();
