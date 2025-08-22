
const showStudentInfo = ({name, age, cgpa, phone}) => {
  console.log(`
    name: ${name}
    age: ${age}
    cgpa: ${cgpa}  
    phone: ${phone}
  `);
}

const student = {
  name: 'fidbi',
  age: 24,
  cgpa: 3.25,
  phone: '01638447493'
}

showStudentInfo(student);

// const phone = student.phone;
// const {phone, age} = student; // object destructuring

// console.log(phone);
// console.log(age);

// const arr = [10, 20, 30, 40, 50];

// const [x, y] = arr; // object destructuring

// console.log(x, y);
