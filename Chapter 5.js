// Q-1: Use the reduce method in combination with the concat method to “flatten” an array of arrays into a single array that has all the elements of the original arrays.

//Solution
let arrays = [[1, 2, 3], [4, 5], [6]];
// Your code here.

let flatArray = arrays.reduce((acc, cur) => acc.concat(cur));
console.log(flatArray);

//Q-2: Write a higher-order function loop that provides something like a for-loop statement. It takes a value, a test function, an update function, and a body function.
//Each iteration, it first runs the test function on the current loop value and stops if that returns false. 
// Then it calls the body function, giving it the current value. Finally, it calls the update function to create a new value and starts from the beginning.

//Solution:
const loop = (value, testFunc, updateFunc, statement) =>{
  for(let i = value; testFunc(i); i = updateFunc(i)){
    statement(i);
  }
}
loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1

//Q3: Analogous to the some method, arrays also have an every method. This one returns true when the given function returns true for every element in the array. 
// In a way, some is a version of the || operator that acts on arrays, and every is like the && operator.
// Implement every as a function that takes an array and a predicate function as parameters. Write two versions, one using a loop and one using the some method.

// Solution:
function every(array, test) {
  for(let i = 0; i < array.length; i++)
    if(test(array[i]) === false)
      return false;
  return true;
}
function everyWithSome(array, test){
	return !(array.some(element => !test(element))); // we are using de-morgan's theorem over here
}
console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(everyWithSome([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true

//Q-4: Write a function that computes the dominant writing direction in a string of text. 
//Remember that each script object has a direction property that can be "ltr" (left to right), "rtl" (right to left), or "ttb" (top to bottom). 

// Solution:
