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


