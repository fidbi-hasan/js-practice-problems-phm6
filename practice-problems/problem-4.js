// 

const findMaxFromTwoArr = (arr1, arr2) => {
  const newArr = [...arr1, ...arr2];

  const maxNum = Math.max(...newArr);

  return maxNum;
}

const arr1 = [12, 4, 2, 5, 6, 3, 8];
const arr2 = [4, 2, 6, 7, 19, 13];

const result = findMaxFromTwoArr(arr1, arr2);

console.log(result);
