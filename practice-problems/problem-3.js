//

const getAverageOfSquare = (nums) => {
  const arrlength = nums.length;
  let sumOfSq = 0;

  for (const num of nums) {
    const sqNum = num * num;    
    sumOfSq += sqNum;
  }

  const avgOfSq = sumOfSq / arrlength; 

  return avgOfSq;   
}

const nums = [1, 2, 3, 4, 5, 6];

const result = getAverageOfSquare(nums);

console.log(result);  
