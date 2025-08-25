const oddArr = [1, 3, 5, 7, 9];

// converting into an even array 

// for loop 

// for (let i = 0; i < oddArr.length; i++) {
//   oddArr[i] = oddArr[i] + 1;
// }

// console.log(oddArr);

const evenArr = oddArr.map(num => num + 1);

console.log(evenArr);

