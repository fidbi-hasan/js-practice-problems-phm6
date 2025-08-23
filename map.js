const arr = [10, 20, 30, 40, 50];

// function doubleIt(arr) {
//   return arr * 2;
// }

// const doubleIt = num => num * 2;

const doubledArr = arr.map(num => num * 2);

// console.log(doubledArr);

const kvArray = [
  {key: 1, value: 10},
  {key: 2, value: 20},
  {key: 3, value: 30},
]

const reformattedArray = kvArray.map(({key, value}) => ({[key]: value}));

// console.log(reformattedArray);
// console.log(typeof Object.keys(reformattedArray[0])[0]); // string
// console.log(kvArray);

/** 
 * itr1: 
 *  key = 1, value = 10
 * {[key]: value} --> {1: 10}
 * reformattedArray = [{1: 10}]
 * itr2: 
 *  key = 2, value = 20
 * {[key]: value} --> {2: 20}
 * reformattedArray = [{1: 10}, {2: 20}]
 * itr3: 
 *  key = 3, value = 30
 * {[key]: value} --> {3: 30}
 * reformattedArray = [{1: 10}, {2: 20}, {3: 30}]
*/

// extra --> ingone
// const arrayLike = {
//   length: 3,
//   0: 2,
//   1: 3,
//   2: 4,
//   3: 5, // ignored by map() since length is 3
// };
// console.log(Array.prototype.map.call(arrayLike, (x) => x ** 2));
// // [ 4, 9, 16 ]


















