"use strict";

// const num = new Number(3);
// const num = new Function(3);

// console.log(num);

function User(name, id) {
  this.name = name;
  this.id = id;
  this.human = true;
  this.hello = function () {
    console.log(`Hello ${this.name}`);
  };
}

class User {
  constructor(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
	}
	hello() {
		console.log(`Hello ${this.name}`)
	}
	exit() {
		console.log(`User ${this.name} exit`);	
	}
}

User.prototype.exit = function (name) {
  console.log(`User ${this.name} exit`);
};

ivan.exit();

const ivan = newUser("Ivan", 28);
const alex = newUser("Alex", 20);

ivan.hello();
alex.hello();

console.log(ivan);
console.log(alex);
