// THIS KEYWORD

// Question 1 : this keyword

let a = 5

console.log(this.a);

// let vs var : In the global scope, variables declared with var become properties of the global object (window in browser or global in node.js), while variables declared with let do not. Therefore, when we declare let a = 5, it does not create a property named a on the global object. As a result, when we access this.a, it will look for a property named a in the global object and return undefined since it does not exist. If we had declared var a = 5 instead, then this.a would have returned 5 because it would have created a property named a on the global object.

// output will be 5 because in global scope this keyword refers to the global object which is window in browser and global in node.js. So when we access this.a it will look for a property named a in the global object and return its value which is 5.


// Question 2 : this inside Method

let user = {
    name: "Piyush",
    age: 24,
    getDetails() {
          console.log(this.name)
    }
};
  
user.getDetails(); 

// output will be "Piyush" because when we call the getDetails method on the user object, the this keyword inside the method refers to the user object itself. So when we access this.name it will look for a property named name in the user object and return its value which is "Piyush".


// Question 3 : nested object 

let user = {
    name: "Piyush",
    age: 24,
      childObj:{
          newName:"Roadside Coder",
          getDetails() {
              console.log(this.newName, "and" ,this.name)
          }
      }
};
  
user.childObj.getDetails();

// output will be "Roadside Coder and undefined" because when we call the getDetails method on the childObj object, the this keyword inside the method refers to the childObj object itself. So when we access this.newName it will look for a property named newName in the childObj object and return its value which is "Roadside Coder". However, when we access this.name it will look for a property named name in the childObj object but it does not exist, so it will return undefined.


// Question 4 : Class & Constructor

class user {
    constructor(n){
        this.name = n
    }
    getName(){
        console.log(this.name);
    }
}

const User = new user("Piyush") 
User.getName();


// output will be "Piyush" because when we create an instance of the user class using the new keyword, the constructor function is called and the this keyword inside the constructor refers to the newly created object. So when we assign this.name = n, it sets the name property of the new object to the value passed as an argument which is "Piyush". Then when we call the getName method on the User object, the this keyword inside the method refers to the User object itself, so when we access this.name it will look for a property named name in the User object and return its value which is "Piyush".


// Question 5 : Output

const user = {
    firstName: 'Piyush!',
    getName() {
      const firstName = 'Piyush abcd';
      return this.firstName;
    }
};

console.log(user.getName());

// output will be "Piyush!" because when we call the getName method on the user object, the this keyword inside the method refers to the user object itself. So when we access this.firstName it will look for a property named firstName in the user object and return its value which is "Piyush!". The local variable firstName declared inside the getName method does not affect the value of this.firstName because they are different variables with different scopes.


// Question 6 : What is the result of accessing its `ref`? Why?

function makeUser() {
    return {
      name: "John",
      ref: this
    };
}
  
let user = makeUser();
  
alert( user.ref.name ); // What's the result?

// output will be undefined because when we call the makeUser function, the this keyword inside the function refers to the global object (window in browser or global in node.js) since it is not called as a method of an object. So when we return an object with a property ref that is assigned the value of this, it will refer to the global object. Therefore, when we access user.ref.name, it will look for a property named name in the global object, which does not exist, resulting in undefined.


// Question 7 : What logs to console the following code snippet:

const user = {
    name: 'Piyush Agarwa;!',
    logMessage() {
      console.log(this.name); 
    }
};
setTimeout(user.logMessage, 1000);

// output will be undefined because when we pass user.logMessage as a callback to setTimeout, the this keyword inside the logMessage method does not refer to the user object anymore. Instead, it refers to the global object (window in browser or global in node.js) since it is called as a regular function. Therefore, when we access this.name inside the logMessage method, it will look for a property named name in the global object, which does not exist, resulting in undefined being logged to the console after 1 second.


// Question 8 : Output

const user = {
    name: 'Piyush',
    greet() {
      return `Hello, ${this.name}!`;
    },
    farewell: () => {
      return `Goodbye, ${this.name}!`;
    }
};
console.log(user.greet());    
console.log(user.farewell()); 

// output will be "Hello, Piyush!" and "Goodbye, undefined!" because the greet method is a regular function and the this keyword inside it refers to the user object, so it can access the name property and return "Hello, Piyush!". However, the farewell method is an arrow function, and arrow functions do not have their own this context. Instead, they inherit the this value from their enclosing scope. In this case, the enclosing scope is the global scope (window in browser or global in node.js), where there is no name property defined. Therefore, when we access this.name inside the farewell method, it will look for a property named name in the global object, which does not exist, resulting in undefined being used in the string interpolation and returning "Goodbye, undefined!".


// Question 9 :

let calculator = {
    sum() {
      return this.a + this.b;
    },
  
    mul() {
      return this.a * this.b;
    },
  
    read() {
      this.a = +prompt('a?', 0);
      this.b = +prompt('b?', 0);
    }
};
  
calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );

// output will depend on the values entered by the user in the prompts. The read method prompts the user to enter values for a and b, which are then stored as properties of the calculator object. The sum method returns the sum of a and b, while the mul method returns the product of a and b. So if the user enters 3 for a and 4 for b, the output will be 7 for the sum and 12 for the multiplication.


// Question 10 : Output

var length = 4;
function callback() {
  console.log(this.length); // What is logged?
}
const object = {
  length: 5,
  method(callback) {
    callback();
  }
};
object.method(callback, 1, 2);

// output will be 4 because when we call object.method(callback, 1, 2), the this keyword inside the callback function does not refer to the object. Instead, it refers to the global object (window in browser or global in node.js) since it is called as a regular function. Therefore, when we access this.length inside the callback function, it will look for a property named length in the global object, which is defined as 4. Hence, 4 will be logged to the console.
//callback(); // direct call
// this = window (global object) => window.length = 4
// 

// Question 11 : Implement this Code

const result = calc.add(10).multiply(5).subtract(30).add(10)
console.log(result.total);

// My Answer
var calc = {
  total: 0,
  add(a) {
    this.total += a;
    return this;
  },
  subtract(a) {
    this.total -= a;
    return this;
  },
  multiply(a) {
    this.total *= a;
    return this;
  },
};

// rules

// 1. Call-site decides this
// 2. obj.fn() → this = obj
// 3. normal function → default binding
// 4. arrow → lexical this
// 5. callback → context loss
// 6. bind/call/apply → manual control
// 7. new → new object

///“this is determined by how a function is invoked, not where it is defined.”
