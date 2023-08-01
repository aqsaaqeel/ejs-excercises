Q-1: Write a function min that takes two arguments and returns their minimum.
Solution:
const min = (a,b) =>{
  return (a !== b && a < b) ? a : b;
}
console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10

Q-2: Define a recursive function isEven corresponding to this description. The function should accept a number parameter and return a Boolean.
Solution:
// Your code here.
const isEven = (num) =>{
  num = Math.abs(num);
  if(num === 0)
    return true;
  else if(num === 1)
    return false;
  else 
    return isEven(num - 2);
}
console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → false

Q-3: Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase “B” characters are in the string.
Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase “B” characters)
Solution:
// Your code here.
const countBs = (str) =>{
  let count = 0;
  for(let i = 0; i <= str.length; i++){
    if(str.charAt(i) == "B")
      count++;
  }
  return count;
}
const countChar = (str, ch) =>{
  let count = 0;
  for(let i = 0; i <= str.length; i++){
    if(str.charAt(i) == ch)
      count++;
  }
return count;
}
console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4
