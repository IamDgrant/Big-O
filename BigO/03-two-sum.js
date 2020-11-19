function badTwoSum(arr, targetSum) {
  for (let i = 0; i < arr.length; i++) {
    let num1 = arr[i];

    for (let j = i + 1; j < arr.length; j++) {
      let num2 = arr[j];

      if (num1 + num2 === targetSum) {
        return true
      }
    }
  }
  return false;
}

console.log(badTwoSum([1, 7, 3, 0, 2], 5)); // true
console.log(badTwoSum([1, 7, 3, 0, 2], 6)); // false
console.log(badTwoSum([4, 6, 2, 3], 8)); // true
console.log(badTwoSum([4, 6, 2, 3], 11)); // false

function okayTwoSum1(arr, targetSum) {
  // Code goes here ...
}


function okayTwoSum2(arr, targetSum) {
  // Code goes here ...
}


function twoSum(arr, targetSum) {
  // Code goes here ...
}


function twoSumIndices(arr, targetSum) {
  // Code goes here ...
}
