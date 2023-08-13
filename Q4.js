function findFirstNonRepeatedChar(str) {
    const charCount = {};
  
    // Count the occurrences of each character in the string
    for (let char of str) {
      charCount[char] = charCount[char] ? charCount[char] + 1 : 1;
    }
  
    // Find the first non-repeated character
    for (let char of str) {
      if (charCount[char] === 1) {
        return char;
      }
    }
  
    return null; // Return null if no non-repeated character is found
  }
  
  const inputString = "abacddbec";
  const firstNonRepeatedChar = findFirstNonRepeatedChar(inputString);
  
  if (firstNonRepeatedChar !== null) {
    console.log("The first non-repeated character:", firstNonRepeatedChar);
  } else {
    console.log("No non-repeated character found in the string.");
  }
  