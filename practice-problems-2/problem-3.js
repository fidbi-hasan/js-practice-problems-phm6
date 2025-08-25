const instructors = [
  {name: 'Nodi', age: 28, position: 'Senior'},
  {name: 'Akil', age: 26, position: 'Junior'},
  {name: 'Shobuj', age: 30, position: 'Senior'},
];

// const seniorInstructors = instructors.filter(instructor => instructor['position'] === 'Senior').map(instructor => instructor.name);

const seniorInstructors = instructors.filter(instructor => instructor['position'] === 'Senior').map(instructor => instructor.name);


console.log(seniorInstructors);

// const seniorInstructors = [];

// for (const instructor of instructors) {
//   if(instructor.position === 'Senior') seniorInstructors.push(instructor);
// }

// console.log(seniorInstructors);
