const people = [
  {name: 'Meena', age: 20},
  {name: 'Rina', age: 15},
  {name: 'Suchorita', age: 22}
];

/* let ageSum = 0;

for (const person of people) {
  ageSum += person.age;
}

console.log(ageSum); */

const ageSum = people.reduce((initialAge, person) => initialAge + person.age , 0);

console.log(ageSum);

