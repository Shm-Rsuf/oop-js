// 'use strict';

// /*Function Constractor With Inheritence*/
// function Animal(name, size, leg) {
//   this.name = name;
//   this.size = size;
//   this.leg = leg;
// }

// Animal.prototype.fullDetails = function () {
//   return `${this.name} is a domestic animal. It looks ${this.size} & has ${this.leg} legs.`;
// }

// Animal.prototype.isCat = function () {
//   return this.eyeColor ? 'true' : 'false';
// }

// function Cat(name, size, leg, eyeColor) {
//   Animal.call(this, name, size, leg);
//   this.eyeColor = eyeColor;
// }
// /*Linking prototype with class-1 and class-2*/
// Cat.prototype = Object.create(Animal.prototype);

// let cow = new Animal('Cow', 'Big', 4);
// let cat1 = new Cat('Mew', 'small', 4, 'white');

// console.log(cow.isCat());
// console.log(cow.fullDetails());
// console.log(cat1.size);

/*****Class Constractor With Inheritence*****/
// class Animal {
//   constructor(name, size, leg) {
//     this.name = name;
//     this.size = size;
//     this.leg = leg;
//   }

//   getFullDetails() {
//     return `${this.name} is a domestic animal. It looks ${this.size} & has ${this.leg} legs.`;
//   }

//   isCat() {
//     return this.eyeColor ? 'true' : 'false';
//   }
// }

// class Cat extends Animal {
//   constructor(name, size, leg, eyeColor) {
//     super(name, size, leg);
//     this.eyeColor = eyeColor;
//   }
// }

// let cow = new Animal('Cow', 'Big', 4);
// let cat = new Cat('pussy', 'small', 4, 'Transparent');

// console.log(cow.isCat());
// console.log(cow.getFullDetails());

// console.log(cat.isCat());
// console.log(Cat.prototype);

/************Closure Demo**************/

function parent() {
  let x = 10;
  return function () {
    let y = 15;
    console.log(`sum: ${x + y}`);
  }
}
let closure = parent();
closure();

(function iife() {
  console.log('Immediate invoke function expression');
})();