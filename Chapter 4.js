// Q-1: Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start-up to (and including) end.

Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the example program and see whether it does indeed return 55.

As a bonus assignment, modify your range function to take an optional third argument that indicates the “step” value used when building the array. 
Solution:
const range = (lower, upper) =>{
  let arr = [];
  for(let i = lower; i <= upper; i++){
    arr.push(i);
  }
  return arr;
}

const sum = (arr) => {
  let total = 0;
  for(let num of arr){
    total += num;
  }
  return total;
}

const rangeWithStep = (lower, upper, step = 1) =>{
  let arr = [];
  for(let i = lower; (step > 0) ? i <= upper : i >= upper ; i = i + step){
    arr.push(i);
  }
  return arr;
}

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(rangeWithStep(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55

// Q-2: Arrays have a reverse method that changes the array by inverting the order in which its elements appear. For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument by reversing its elements. Neither may use the standard reverse method.

// Thinking back to the notes about side effects and pure functions in the previous chapter, which variant do you expect to be useful in more situations? Which one runs faster?
// Solution: 
const reverseArray = (arr) => {
  let reversedArr = [];
  for(let i = arr.length - 1; i >= 0; i--){
    reversedArr.push(arr[i]);
  }
  return reversedArr;
}

const reverseArrayInPlace = (arr) =>{
  let mid = Math.floor(arr.length / 2);
  for(let i = 0; i < mid; i++){
    let temp = arr[i];
    arr[i] = arr[arr.length - i - 1];
    arr[arr.length - i - 1] = temp;
  }
  return arr;
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]

The first type is more useful since it is a pure function. But reverseArrayInPlace runs faster because it divides the array in 2 and runs half the time reverseArray runs. And it takes no extra space.

// Q-3: Write a function arrayToList that builds up a list structure like the one shown when given [1, 2, 3] as argument. Also write a listToArray function that produces an array from a list. Then add a helper function prepend, which takes an element and a list and creates a new list that adds the element to the front of the input list, and nth, which takes a list and a number and returns the element at the given position in the list (with zero referring to the first element) or undefined when there is no such element.
// Solution:
const arrayToList = (arr) =>{
  let list = null;
  for(let i = arr.length - 1; i >= 0; i--){
    list = {value: arr[i], rest: list}
  }
  return list;
}
const listToArray = (list) =>{
  let arr = [];
  for (let node = list; node; node = node.rest){
    arr.push(node.value);
  }
  return arr;
}

const prepend = (value, list) =>{
  return { value: value, rest: list}
}

const nth = (list, position) =>{
  let current = list;
  let currentPosition = 0;
  
  while(current !== null){
    if(currentPosition === position){
      return current.value;
    }
    current = current.rest;
    currentPosition++;
  }
  return undefined;
}

const nthRec = (list, position) =>{
  if(position === 0)
    return list.value;
  else 
    return nthRec(list.rest, position - 1)
}
console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
console.log(nthRec(arrayToList([10, 20, 30]), 0));

// Q-4: Write a function deepEqual that takes two values and returns true only if they are the same value or are objects with the same properties, where the values of the properties are equal when compared with a recursive call to deepEqual.
// Solution:
const deepEqual = (first, second) =>{
  if(first === second)
    return true
  if(first == null || second == null || typeof first != "object" || typeof second != "object")
    return false;
  let firstKeys = Object.keys(first);
  let secondKeys = Object.keys(second);
  
  if(firstKeys.length !== secondKeys.length)
    return false;
  for(let key of firstKeys){
    if(!secondKeys.includes(key) || !deepEqual(first[key] , second[key]))
       return false;
    }
   return true;
}
    
  

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
