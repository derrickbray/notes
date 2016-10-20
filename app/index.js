import 'whatwg-fetch';

const family = [
  {
    first: 'Homer',
    age: 39,
  }, {
    first: 'Marge',
    age: 36,
  }, {
    first: 'Bart',
    age: 10,
  }, {
    first: 'Lisa',
    age: 8,
  }, {
    first: 'Maggie',
    age: 1,
  },
];

function printFirstName(familyMember) {
  console.log(familyMember.first);
}

family.forEach(printFirstName);

// callbacks: sending functions to other functions

window.setTimeout(() => {
  console.log('I should run later');
}, 2000);

console.log('i will run before than that');

// events: wht to do in response to user
const form = document.querySelector('.contact');
const response = document.querySelector('.response');
const name = document.querySelector('input[name=name]');
const message = document.querySelector('textarea[name=message]');

form.addEventListener('submit', (ev) => {
  ev.preventDefault();

  response.innerText = `
  Hello ${name.value},
  thank you for your thoughts that: "${message.value}".
  `;
});

// promises git us a guarantee that callbackswill run

const later = new Promise((resolve, reject) => {
  setTimeout(() => {
        // resolve('Timeout Promise');
    reject('something went wrong');
  }, 1000);
});

const after = document.createElement('h4');
document.body.appendChild(after);

later.then((information) => {
  after.innerText = information + ' Changed after resolved!';
}).catch((err) => {
  after.innerText = 'There was an error';
  console.log(err);
});
