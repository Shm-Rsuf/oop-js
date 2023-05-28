// // 'use strict';
// // /***********Object Oridented Programming***********/
// // /***************************************************/
// // /*Functional ProtoType*/
// // /*Class Based ProtoType*/
// // /*Object Create() Function*/

// // /*Creare a Class*/
// // class Student {
// //   constructor(name, birthYear) {
// //     this.name = name;
// //     this.birthYear = birthYear;
// //   }
// //   calAge() {
// //     return (new Date().getFullYear()) - this.birthYear;
// //   }
// // }

// // // console.log(Student.prototype);
// // const student1 = new Student('Shm Usuf', 1996);
// // const student2 = new Student('Atik Hasan', 1997);

// // // console.log(student1.calAge());
// // // console.log(student1.__proto__);

// // const arr = [1, 3, 5];
// // // console.log(arr.indexOf(3));
// // // console.log(arr.__proto__.__proto__.__proto__);

// // class Computer {
// //   // private field
// //   #password = 12345;
// //   constructor() {
// //     this.bank = [];
// //     // console.log(this.#password);
// //   }

// //   cpuClockSpeedTest() {
// //     // console.log('Your computer is faster than others.!');
// //   }
// //   depositMoney(money) {
// //     this.bank.push(money);
// //   }

// // }

// // const com1 = new Computer();
// // com1.cpuClockSpeedTest();
// // com1.depositMoney(250);

// // // console.log(com1);

// // const obj = {
// //   dob: 1996
// // }
// // console.log(obj.hasOwnProperty('dob'));

// // class Test {
// //   constructor(birthYear) {
// //     this.birthYear = birthYear;
// //   }
// // }

// // const testObj = new Test(1996);
// // console.log(testObj.hasOwnProperty('birthYear'));

// // class child6 {
// //   constructor(name, dob) {
// //     this.name = name;
// //     this.dob = dob;
// //   }

// //   currentAge() {
// //     console.log(`${this.name} is ${(new Date().getFullYear() - this.dob)} years.`);
// //   }
// // }
// // const child1 = new child6('Usuf', 1996);
// // child1.currentAge()

// // /***************consttructor function******************/
// // function Person(nickName, birthYear) {
// //   this.nickName = nickName;
// //   this.birthYear = birthYear;
// // }

// // Person.prototype.ageCalculate = function () {
// //   console.log(`${this.nickName} is ${(new Date().getFullYear() - this.birthYear)} years.`);
// // }

// // const priti = new Person('Priti', 2010);
// // const usuf = new Person('Usuf', 1996);

// // console.log('*****************');
// // priti.ageCalculate();
// // usuf.ageCalculate();

// // console.log(usuf instanceof Person);
// // console.log('*****************');

// // console.log(Person.prototype.isPrototypeOf(priti));
// // console.log(Person.prototype.isPrototypeOf(usuf));
// // console.log(Person.prototype.isPrototypeOf(Person));
// // console.log('*****************');

// // console.log(usuf.__proto__ === Person.prototype);
// // console.log(Person.prototype === Person.prototype);

// // Constructor

// // function Book(title, author, year) {
// //   this.title = title;
// //   this.author = author;
// //   this.year = year;
// // }

// // /*prototype*/
// // Book.prototype.getSummary = function () {
// //   return `${this.title} was written by ${this.author} in ${this.year}`;
// // }

// // Book.prototype.getAgge = function () {
// //   const years = new Date().getFullYear() - this.year;
// //   return `${this.title} is ${years} years old.`;
// // }
// // console.log(Book.prototype);
// // const book1 = new Book('book One', 'Jhon Doe', 2012);

// // console.log(book1.getSummary());
// // console.log(book1.getAgge());

// /*Object literats*/

// let person = {
//   fName: 'usuf',
//   lName: 'ali',
//   fullName: function () {
//     return `My full name is ${this.fName} ${this.lName}`;
//   }
// }

// // console.log(person.fullName());

// /*Object constructor*/
// function personName(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.fullName = function () {
//     return `My full name is ${this.firstName} ${this.lastName}`;
//   }
// }

// let name1 = new personName('usuf', 'ali');
// let name2 = new personName('atik', 'hasan');

// // console.log(name2.fullName());

// /**********Classes************/
// class Vehicle {
//   constructor(name, maker, engine) {
//     this.name = name;
//     this.maker = maker;
//     this.engine = engine;
//   }
//   getDetails() {
//     return (`The name of the bike is ${this.name}.`);
//   }
// }

// let bike1 = new Vehicle('Hayabusa', 'Suzuki', '1340cc');
// let bike2 = new Vehicle('Ninja', 'Kawasaki', '998cc');

// // console.log(bike1.name);
// // console.log(bike2.maker);
// // console.log(bike1.getDetails());

// /*********************************/
// function Vehicle1(name, maker, engine) {
//   this.name = name;
//   this.maker = maker;
//   this.engine = engine;
// }

// Vehicle1.prototype.getDetails = function () {
//   console.log('The name of the bike is ' + this.name);
// }

// let bike3 = new Vehicle1('Ninja', 'Suzuki', '998cc');
// bike3.getDetails();

// /**************************************/
// class PersonClass {
//   constructor(name, age, job) {
//     this.name = name;
//     this.age = age;
//     this.job = job;
//   }
//   calAg() {
//     console.log(`${this.name} born in ${2022 - this.age}`);
//   }
// }

// class Tercher extends PersonClass {
//   constructor(name, age, job, subject) {
//     super(name, age, job);
//     this.subject = subject;
//   }
// }

// const ourSir = new Tercher('Abdul Mannan', 45, 'Assistant Teacher', 'Physics');

// ourSir.calAg();

// class SpecialClass {
//   constructor(name) {
//     this.name = name;
//   }
//   static specialMethod() {
//     console.log('I am a special method.');
//   }
// }

// const specialObj = new SpecialClass('special');

// SpecialClass.specialMethod();
// // specialObj.specialMethod();

// function User(fName, lName, dob) {
//   this.firstName = fName;
//   this.lastName = lName;
//   this.dob = dob;
// }

// User.prototype.calcAgg = function () {
//   return new Date().getFullYear() - this.dob;
// }

// const rahim = new User('abdur', 'rahim', 1996);

// console.log(rahim);
// console.log(rahim.calcAgg());

// /***************ES6 CLASSES******************/
// class Car {
//   constructor(name, color, engine) {
//     this.carName = name;
//     this.carColor = color;
//     this.carEngine = engine;
//   }
//   //getter
//   get getDetails() {
//     return `The name of this car ${this.carName}. It's color is ${this.carColor} and top speed is ${this.carEngine}`;
//   }
//   priceRate(numberOfCar) {
//     return `The price of ${numberOfCar} cars = $${numberOfCar * 150000}`;
//   }
// }

// const maruti = new Car('Maruti Suzuki', 'blue', '1250cc');
// const lamborgini = new Car('Lamborgini', 'crimson', '1350cc');

// console.log(maruti.getDetails);
// console.log(lamborgini.getDetails);

// console.log(lamborgini.priceRate(2));

/**********OOP-Object Oriented Programming***********/

// let a = 10, b = 20;
// console.log(`Before swapinf the value of a = ${a} And the value of b = ${b}`);

// function swap(a, b) {
//   let temp = a;
//   a = b;
//   b = temp;
//   console.log(`Now the value of a = ${a} & The value of b = ${b}`);
// }

// swap(a, b);

// console.log(`the value of a = ${a} And the value of b = ${b}`);

// const arr = [0, 1, 3, 4, 8];
// arr.push(100);

// console.dir({});

// let str = 'usuf ali';
// console.dir(str);

// var newStr = new String('usuf');
// console.dir(newStr);

/********FUNCTION CONSTRUCTOR*********/
// function Person(name, age, job) {
//   this.name = name;
//   this.age = age;
//   this.job = job;
// }
// Person.prototype.details = function () {
//   return `This is ${this.name} & is an ${this.job}`;
// }

// Person.prototype.greet = function () {
//   return `Hello.! ${this.name}`;
// }

// let samir = new Person('samir', 25, 'Engineer');
// let salman = new Person('salman', 35, 'Pilot');
// let rupa = new Person('Rupa', 20, 'Student');
// let sabbir = new Person('Sabbir', 27, 'Teacher');
// let alia = new Person('Alia', 25, 'Doctor');

// console.log(samir.details());
// console.log(salman.greet());
// console.log(rupa.details());
// console.log(sabbir.details());
// console.log(alia.greet());

/*INHERITANCE FROM FUNCTION CONSTRACTOR*/
// function Person(fname, birthYear) {
//   this.fname = fname;
//   this.birthYear = birthYear;
// }

/*********METHOD OF CLS-1************/
// Person.prototype.calcAgg = function () {
//   return new Date().getFullYear() - this.birthYear;
// }

// Person.prototype.greet = function () {
//   return `Hello.! ${this.fname}`;
// }
/**********OBJ FROM CLS-1************/
// let tumpa = new Person('Tumpa', 1996);

/**********CLASS 2**********/
// function Student(fname, birthYear, dept) {
//   Person.call(this, fname, birthYear);
//   this.dept = dept;
// }

/*******LINKING PROTOTYPES BTWN CLS-1 AND CLS-2***********/
// Student.prototype = Object.create(Person.prototype);

// let sabrina = new Student('Sabrina', 1999, 'CSE');

// console.log(sabrina.calcAgg());
// console.log(sabrina.greet());
// console.log(tumpa.greet());
// console.log(Person.prototype);
// console.log(Student.prototype);

/*INHERITENCE FROM CLASS CONSTRACTOR*/
// class Player {
//   constructor(nickName, jerseyNum, rating) {
//     this.nickName = nickName;
//     this.jerseyNum = jerseyNum;
//     this.rating = rating;
//   }
//   greet() {
//     return `Hello.! ${this.nickName}`;
//   }
//   playerRatings() {
//     return `${this.nickName} has ${this.rating} ratings.`
//   }
// }

// let neymar = new Player('Neymar', 10, 75);
// console.log(neymar.greet());
// console.log(neymar.jerseyNum);
// class Captain extends Player {
//   constructor(nickName, jerseyNum, rating, bandColor) {
//     super(nickName, jerseyNum, rating);
//     this.bandColor = bandColor;
//   }

// }

// let messi = new Captain('Messi', 10, 90, 'White');

// console.log(messi.greet());
// console.log(messi.playerRatings());
// console.log(neymar.playerRatings());

/* class Bike {
  constructor(bikeName, model, engine) {
    this.bikeName = bikeName;
    this.model = model;
    this.engine = engine;
  }
  fullDetails() {
    return `Bike name is ${this.bikeName}. Model: ${this.model}`;
  }
  isAbs() {
    return `Engine number of ${this.bikeName}'s is : ${this.abs || 'No'}`;
  }
}

let suzuki = new Bike('Suzuki', 'GAXR', 'E-1234');

class Yamaha extends Bike {
  constructor(bikeName, model, engine, abs) {
    super(bikeName, model, engine);
    this.abs = abs;
  }
}

let fzs = new Yamaha('Fzs', 'V-3', 'F-345', 'Yes');

console.log(suzuki);
console.log(suzuki.fullDetails());
console.log(suzuki.isAbs());

console.log(fzs.isAbs()); */

/* class Car {
  constructor(model, engine, price) {
    this.model = model;
    this.engine = engine;
    this.price = price;
  }

  details() {
    return `This car name is ${this.model}. engine number-${this.engine} and the price of this car is $${this.price}`;
  }
}

const maruti = new Car("maruti800", "ID:502-079", 450000);

// console.log(maruti);
// console.log(maruti.engine);
console.log(maruti.details()); */
