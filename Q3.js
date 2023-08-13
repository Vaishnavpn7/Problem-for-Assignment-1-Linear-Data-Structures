function areRotations(str1, str2) {
    if (str1.length !== str2.length) {
      return false;
    }
  
    const concatenated = str1 + str1;
  
    return concatenated.includes(str2);
  }
  
  const string1 = "abcdef";
  const string2 = "defabc";
  
  if (areRotations(string1, string2)) {
    console.log("The two strings are rotations of each other.");
  } else {
    console.log("The two strings are not rotations of each other.");
  }
  