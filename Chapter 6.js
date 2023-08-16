//Q 1: Write a class Vec that represents a vector in two-dimensional space. It takes x and y parameters (numbers), which it should save to properties of the same name.
// Give the Vec prototype two methods, plus and minus, that take another vector as a parameter and return a new vector that has the sum or difference of the two vectors’ (this and the parameter) x and y values

//Solution
// Your code here.
class Vec{
  constructor(x, y){
    this.x = x;
    this.y = y;
  }

  plus(newParam){
    let newX = newParam.x + this.x;
    let newY = newParam.y + this.y;
    return {newX, newY}
    } 
  
  minus(newParam){
    let newX = this.x - newParam.x;
    let newY = this.y - newParam.y;
    return {newX, newY}
    }
  
  get length(){
  	return Math.sqrt(this.x * this.x + this.y * this.y)
  }
}

console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// → Vec{x: 3, y: 5}
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// → Vec{x: -1, y: -1}
console.log(new Vec(3, 4).length);
// → 5

//Q-2: Write a class called Group (since Set is already taken). Like Set, it has add, delete, and has methods.
// Its constructor creates an empty group, add adds a value to the group (but only if it isn’t already a member), delete removes its argument from the group (if it was a member),
// and has returns a Boolean value indicating whether its argument is a member of the group.

//Solution

class Group {
  // Your code here.
  constructor(){
    this.group = [];
  }
  
  static from(values){
    let group = new Group();
    for( let value of values){
      group.add(value);
    }
    return group;
  }
  
  has(someValue){
    return this.group.includes(someValue);
  }
  
  add(someValue){
    if(!this.group.includes(someValue)){
       this.group.push(someValue);
    	return this.group;
    }
    return "this value already exists!"
  }
  
  delete(someValue){
    if(this.group.includes(someValue)){
      this.group = this.group.filter(word => word != someValue);
      return this.group.filter(word => word != someValue);
    }
    return "This value does not exist!"
  }
}

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false




//Q-3: Make the Group class from the previous exercise iterable

//Solution: (Just add this method to the above code)

[Symbol.iterator]() {
    let index = 0;
    const group = this.group;

    return {
      next() {
        if (index < group.length) {
          return { value: group[index++], done: false };
        } else {
          return { done: true };
        }
      }
    };
  }

//Q-4: Implement a cell type named StretchCell(inner, width, height) that conforms to the table cell interface described earlier in the chapter. 
// It should wrap another cell (like UnderlinedCell does) and ensure that the resulting cell has at least the given width and height, even if the inner cell would naturally be smaller.

//Solution:

function StretchCell(inner, width, height){
  this.inner = inner;
  this.width = width;
  this.height = height;
}

StretchCell.prototype.minWidth = function(){
  return Math.max(this.width, this.inner.minWidth());
}

StretchCell.prototype.minHeight = function(){
  return Math.max(this.height, this.inner.minHeight());
}

StretchCell.prototype.draw = function(width, height){
  return this.inner.draw(width, height);
}

var sc = new StretchCell(new TextCell("abc"), 1, 2);
console.log(sc.minWidth());
// → 3
console.log(sc.minHeight());
// → 2
console.log(sc.draw(3, 2));
// → ["abc", "   "]

//Q-5: Design an interface that abstracts iteration over a collection of values. An object that provides this interface represents a sequence, and the interface must somehow make it possible for code that uses such an object to iterate over the sequence,
// looking at the element values it is made up of and having some way to find out when the end of the sequence is reached. When you have specified your interface, 
// try to write a function logFive that takes a sequence object and calls console.log on its first five elements—or fewer, if the sequence has fewer than five elements.

function ArraySeq(array){
  this.index = -1;
  this.array = array;
}

ArraySeq.prototype.next = function(){
  if(this.index >= this.array.length - 1)
    return false;
  this.index++;
  return true;
}

ArraySeq.prototype.current = function(){
  return this.array[this.index]
}

function logFive(sequence){
  for(var i = 0; i < 5; i++){
    if(sequence.next()){
      console.log(sequence.current());
    }
    else{
      return;
    }
  }
}

logFive(new ArraySeq([1, 2]));
// → 1
// → 2


// Then implement an object type ArraySeq that wraps an array and allows iteration over the array using the interface you designed. Implement another object type RangeSeq that iterates over a range of integers (taking from and to arguments to its constructor) instead.

function RangeSeq(from, to){
  this.from = from;
  this.to = to;
  this.index = -1;
}

RangeSeq.prototype.next = function(){
  if(this.from + this.index > this.to){
    return false
  }
  this.index++;
  return true;
}

RangeSeq.prototype.current = function(){
  return this.from + this.index;
}

logFive(new RangeSeq(100, 1000));
// → 100
// → 101
// → 102
// → 103
// → 104



