// CALL, APPLY & BIND Interview Question


// Question 1 : What is Call?

function sayHello(){
    return "Hello " + this.name;
}
          

var obj = {name: "Piyush"};        
sayHello.call(obj);

// Output : Hello Piyush , call method calls a function with a given this value and arguments provided individually. In above code we are calling sayHello function with obj as this value, so it will print Hello Piyush.


// Question 2 : What is Apply?

function sayHello(day){
    return "Hello " + this.name + " today is " + day ;
}
          
var obj = {name: "Piyush"};        
sayHello.apply(obj, day);

// Output : Hello Piyush today is undefined, apply method calls a function with a given this value and arguments provided as an array. In above code we are calling sayHello function with obj as this value and day as argument, but since day is not defined it will print Hello Piyush today is undefined.


// Question 3 : What is Bind?

function sayHello(){
    return "Hello " + this.name;
}
          
var obj = {name: "Piyush"};          
const helloFn = sayHello.bind(obj);
console.log(helloFn())

// Output : Hello Piyush, bind method creates a new function that, when called, has its this keyword set to the provided value. In above code we are creating a new function helloFn by binding sayHello function with obj as this value, so when we call helloFn it will print Hello Piyush.


// Question 4 : Output

const person = { name: 'Piyush' };

function sayHi(age) {
  return `${this.name} is ${age}`;
}

console.log(sayHi.call(person, 24));
console.log(sayHi.bind(person, 24));

// Output : Piyush is 24, [Function: bound sayHi], in first console log we are calling sayHi function with person as this value and 24 as argument, so it will print Piyush is 24. In second console log we are binding sayHi function with person as this value and 24 as argument, so it will return a new function that when called will print Piyush is 24, but since we are not calling the function it will print [Function: bound sayHi].


// Question 5 : Call with function inside object

const age = 10;
var person = {
	name: "Piyush",
  age: 20,
  getAge: function(){
    return this.age;
  }
}

var person2 = {age:  24};
person.getAge.call(person2);

// Output : 24, in above code we are calling getAge function of person object with person2 as this value, so it will return the age property of person2 which is 24.


// Question 6 : Output

var status = '😎';

setTimeout(() => {
  const status = '😍';

  const data = {
    status: '🥑',
    getStatus() {
      return this.status;
    },
  };

  console.log(data.getStatus());
  console.log(data.getStatus.call(this)); 
}, 0);

// Output : 🥑, 😎, in above code we have a status variable with value '😎' in global scope. Inside setTimeout we have another status variable with value '😍' and an object data with a method getStatus that returns the status property of the object. When we call data.getStatus() it will return '🥑' because this refers to the data object. When we call data.getStatus.call(this) it will return '😎' because this refers to the global object where status is '😎'.


// Question 7 : Call printAnimals such that it prints all animals in object

const animals = [
    { species: 'Lion', name: 'King' },
    { species: 'Whale', name: 'Queen' }
];
  
function printAnimals(i) {
      this.print = function() {
        console.log('#' + i + ' ' + this.species
                    + ': ' + this.name);
      }
      this.print();
}

for (let i = 0; i < animals.length; i++) {
    printAnimals.call(animals[i], i); 
}

// Output : #0 Lion: King, #1 Whale: Queen, in above code we are calling printAnimals function with each animal object as this value and index as argument, so it will print the species and name of each animal in the array.


// Question 8 : apply to append an array to another

const array = ['a', 'b'];
const elements = [0, 1, 2];
array.push.apply(array, elements);
console.info(array); 

// Output : ['a', 'b', 0, 1, 2], in above code we are using apply method to push elements of the elements array into the array, so it will append the elements to the array and print ['a', 'b', 0, 1, 2].


// Question 9 - Using apply to enhane built-in functions

// Find min/max number in an array
const numbers = [5,6,2,3,7];

console.log(Math.max.apply(null, numbers));

// Output : 7, in above code we are using apply method to find the maximum number in the numbers array by passing null as this value and numbers as argument, so it will return the maximum number which is 7.


// Question 10 : How will you Create a bound function

function f() {
    alert( this ); // ?
  }
  
  let user = {
    g: f.bind(null)
};
  
user.g();

// Output : null, in above code we are creating a bound function g by binding f function with null as this value, so when we call user.g() it will alert null.


// Question 11 : Bind Chaining?

function f() {
    alert(this.name);
  }
  
f = f.bind( {name: "John"} ).bind( {name: "Ann" } );
  
f();

// Output : John, in above code we are binding f function with an object that has name property as "John" and then binding it again with another object that has name property as "Ann", but since the first bind creates a new function that has its this value set to the first object, the second bind will not change the this value, so when we call f() it will alert "John".


// Question 12 : Fix the code

function checkPassword(success, failed) {
    let password = prompt("Password?", '');
    if (password == "Roadside Coder") success();
    else failed();
}
  
let user = {
    name: 'Piyush Agarwal',
  
    loginSuccessful() {
      console.log(`${this.name} logged in`);
    },
  
    loginFailed() {
      console.log(`${this.name} failed to log in`);
    },
  
};
  
checkPassword(user.loginSuccessful.bind(user), user.loginFailed.bind(user));

// Output : Piyush Agarwal logged in, in above code we are passing the loginSuccessful and loginFailed methods of the user object as arguments to the checkPassword function, but since these methods use this keyword to access the name property of the user object, we need to bind them with the user object to ensure that this refers to the user object when they are called. So we are using bind method to bind the loginSuccessful and loginFailed methods with the user object before passing them as arguments to the checkPassword function.


// Question 13 : Partial application for login

function checkPassword(ok, fail) {
    let password = prompt("Password?", '');
    if (password == "Roadside Coder") ok();
    else fail();
}
  
let user = {
    name: 'Piyush Agarwal',
  
    login(result) {
      console.log(this.name + (result ? ' login successful' : ' login failed') );
    }
};
  
askPassword(?, ?);

// Output : Piyush Agarwal login successful, in above code we are using partial application to create two new functions that are bound to the user object and have the first argument set to true for success and false for failure. So we can pass these new functions as arguments to the checkPassword function to handle the login result.

 // askPassword(user.login.bind(user, true), user.login.bind(user, false));
 // 


// Question 14 :  Explicit Binding with Arrow Function

const age = 10;

var person = {
	name: "Piyush",
  age: 20,
  getAgeArrow: () => console.log(this.age),
  getAge: function() {
    console.log(this.age);
  }
}

var person2 = {age:  24};
person.getAge.call(person2); 
person.getAgeArrow.call(person2);

// Output : 24, undefined, in above code we have a status variable with value 10 in global scope. We have an object person with a method getAge that returns the age property of the object and an arrow function getAgeArrow that also tries to return the age property. When we call person.getAge.call(person2) it will return 24 because this refers to person2 object. When we call person.getAgeArrow.call(person2) it will return undefined because arrow functions do not have their own this value and they inherit this from the surrounding scope, which is the global scope where age is 10, but since we are trying to access this.age in the arrow function, it will return undefined.


// Question 15 : Call Method Polyfill

let car1 = {
    color: 'Red',
    company: 'Ferrari',
  };
  
  let car2 = {
    color: 'Blue',
    company: 'BMW',
  };
  
  let car3 = {
    color: 'White',
    company: 'Mercedes',
  };
  
  function purchaseCar(currency, price) {
    console.log(
      `I have purchased ${this.color} - ${this.company} car for ${currency}${price} `
    );
};

Function.prototype.myCall = function (currentContext = {}, ...arg) {
    if (typeof this !== 'function') {
      throw new Error(this + "it's not callable");
    }
    currentContext.fn = this;
    currentContext.fn(...arg);
};
purchaseCar.myCall(car3, '₹', '60,00,000');


// Question 16 : Apply Method Polyfill

Function.prototype.myApply = function (currentContext = {}, arg = []) {
    if (typeof this !== 'function') {
      throw new Error(this + "it's not callable");
    }
    if (!Array.isArray(arg)) {
      throw new TypeError('CreateListFromArrayLike called on non-object')
    }
    currentContext.fn = this;
    currentContext.fn(...arg);
  
};
purchaseCar.myApply(car2, ['₹', '50,00,000']);


// Question 17 : Bind Method Polyfill

Function.prototype.myBind = function (currentContext = {}, ...arg) {
    if (typeof this !== 'function') {
      throw new Error(this + "cannot be bound as it's not callable");
    }
    currentContext.fn = this;
    return function () {
      return currentContext.fn(...arg);
    };
};

const initPurchaseBmw = purchaseCar.myBind(car1, '₹', '1,00,00,000');
initPurchaseBmw();

// Output : I have purchased Red - Ferrari car for ₹1,00,00,000, in above code we are creating a new function initPurchaseBmw by binding purchaseCar function with car1 as this value and '₹', '1,00,00,000' as arguments, so when we call initPurchaseBmw it will print I have purchased Red - Ferrari car for ₹1,00,00,000.

// 1. call vs apply vs bind (final table)
// Method	Call karta hai?	Arguments
// call	✅	comma separated
// apply	✅	array
// bind	❌ (returns fn)	comma separated
// 🧠 2. Arrow + bind/call rule

// Arrow function ka this change nahi hota — bind/call/apply useless

// 🧠 3. Callback trap
// setTimeout(obj.fn)

// 👉 ALWAYS context lost


// "call and apply invoke the function immediately, bind returns a new function with bound this."