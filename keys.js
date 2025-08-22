const student = {
  name: 'fidbi',
  age: 24,
  cgpa: 3.25,
  phone: '01638447493'
}

Object.seal(student); 
// Object.freeze(student);

student.inst = 'AIUB'; 
student.name = 'fh';

console.log(student);


const keys = Object.keys(student);
const values = Object.values(student);
const entries = Object.entries(student);

console.log(keys);
console.log(values);
console.log(entries);

// const arr = [10, 20, 30, 40, 50];

// delete arr[arr.length - 1]

// console.log(arr);   




