// REVERSE ARRAY


function reverseArrayInPlace(arr) {
    let start = 0;
    let end = arr.length - 1;
  
    while (start < end) {
      const temp = arr[start];
      arr[start] = arr[end];
      arr[end] = temp;
  
      start++;
      end--;
    }
  }
  
  const array = [1, 2, 3, 4, 5];
  console.log("Original array:", array);
  
  reverseArrayInPlace(array);
  console.log("Reversed array:", array);
  