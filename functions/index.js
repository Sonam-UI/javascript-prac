// FUNCTION Interview Questions

// Question 1 : Function Code

function square(num) {
  return num * num;
}
function displaySquare(fn) {
  console.log("Square is " + fn(5));
}
displaySquare(square);


// op = Square is 25


// Question 2 :  What is IIFE?

// Eg-1
(function square(num) {
  console.log(num * num);
})(7);

// op = 49

// Eg-2
(function (x) {
  return (function (y) {
    console.log(x);
  })(2);
})(1);

// op = 1 , inner function has access to outer function's variable x



// Question 3 : Closure

function init() {
  var name = "Mozilla"; // name is a local variable created by init
  function displayName() {
    // displayName() is the inner function, that forms the closure
    console.log(name); // use variable declared in the parent function
  }
  displayName();
}
init();

// op = Mozilla



// Question 4 : Function Scope

// Q-1
var num1 = 20,
  num2 = 3,
  name = "Roadsidecoder";

function mul() {
  return num1 * num2;
}
mul(); // op = 60
function getScore() {
  var num1 = 3,
    num2 = 4;
  function add() {
    return name + " scored " + (num1 + num2);
  }
  return add();
}
getScore(); // op = Roadsidecoder scored 7 , name is global variable and num1 and num2 are local variables of getScore function, add() is inner function which has access to both global and local variables


// Q-2
for (var i = 0; i < 5; i++) {
  setTimeout(function () {
    // 3 times 5
    console.log(i);
  }, i * 1000);
}

// op = 5 5 5 5 5 , because var is function scoped and by the time setTimeout executes the loop has already completed and i has value 5, so it prints 5 five times



// Question 5 : Function Hoisting

// Without Hoisting:
function functionName() {
    console.log("work at tech");
}

functionName();         // function is called after declaring it

// With Hoisting:
functionName();        // function is called before declaring it , because of hoisting , function declaration is hoisted to the top of the scope and can be called before its declaration

function functionName() {
    console.log("work at tech");
}

// Output 
var x = 21;
var fun = function () {
    console.log(x);
    var x = 20;
};
fun();

// op - undefined , because of hoisting , var x is hoisted to the top of the function scope and initialized with undefined, so when console.log(x) is executed, it prints undefined.(local scope variable x is hoisted and initialized with undefined, so it shadows the global variable x, and hence prints undefined)




// Question 6 :  Params vs arguments

const fn = (a, x, y, ...numbers) => {
    console.log(x, y)
};
fn(5,6,7,8);

// op = 6 7 , a is the first parameter and 5 is the first argument, x is the second parameter and 6 is the second argument, y is the third parameter and 7 is the third argument, ...numbers is the rest parameter which collects all the remaining arguments into an array, so numbers will be [8]



// Question 7 : Spread operator and rest operator
function multiply(...nums){  // rest operator ,should always be the last one
    console.log(nums[0]*nums[1]);
}
var arr = [5,7];
multiply(...arr) // Spread operator

// op - 35 , rest operator collects the arguments into an array nums, so nums will be [5,7], and then we multiply the first two elements of the nums array, which gives us 35. Spread operator is used to spread the elements of the arr array as individual arguments to the multiply function.



// Question 8 : Callback

function greeting(name) {
    alert('Hello ' + name);
}
  
function processUserInput(callback) {
    var name = prompt('Please enter your name.');
    callback(name);
}
  
processUserInput(greeting);

// op - When processUserInput is called, it prompts the user to enter their name. Once the user enters their name, the greeting function is called with the entered name as an argument, which then displays an alert with the message "Hello [name]".



// Question 9 : Arrow functions

const add = (firstNum, secondNum) => {
    return firstNum + secondNum;
}

const addNum = (firstNum, secondNum) => firstNum + secondNum;



// Question 10 : this

let user = {
    name: "Roadside Coder",
    rc1: () => {
      console.log("Subscribe to " + this.name);
    },
    rc2() {
      console.log("Subscribe to " + this.name);
    },
};

user.rc1(); // op = Subscribe to undefined , because arrow functions do not have their own this, they inherit this from the parent scope, in this case the global scope, and in the global scope there is no name property, so this.name is undefined

user.rc2(); // op = Subscribe to Roadside Coder , because regular functions have their own this, which refers to the object that called the function, in this case user, so this.name refers to user.name which is "Roadside Coder"


