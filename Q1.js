function findPairsWithSum(arr, targetSum) {
    const pairs = [];
    const numCount = {};
  
    for (let num of arr) {
      const complement = targetSum - num;
  
      if (numCount[complement]) {
        pairs.push([num, complement]);
        numCount[complement]--;
        if (numCount[complement] === 0) {
          delete numCount[complement];
        }
      } else {
        numCount[num] = numCount[num] ? numCount[num] + 1 : 1;
      }
    }
  
    return pairs;
  }
  
  const array = [2, 4, 3, 6, 8, 9, 1];
  const target = 10;
  
  const pairs = findPairsWithSum(array, target);
  console.log("Pairs with sum", target, ":", pairs);
  