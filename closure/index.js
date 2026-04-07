// CLOSURE Interview Question

// Question 1 : Lexical Scope

// global scope
function local() {
  // local scope
  var username = "sonam";
  console.log(username);
}
local();

// op - sonam

// Question 2 : Closure

function makeFunc() {
  var name = "Mozilla";
  function displayName() {
    alert(name);
  }
  return displayName;
}

var myFunc = makeFunc();
myFunc();

// op - Mozilla - because of closure the inner function has access to the outer function variable even after the outer function has executed.

// Question 3 : Closure scope chain

const e = 10;
function sum(a) {
  return function (b) {
    return function (c) {
      // outer functions scope
      return function (d) {
        // local scope
        return a + b + c + d + e;
      };
    };
  };
}

console.log(sum(1)(2)(3)(4)); // log 20 - because of closure the innermost function has access to all the outer function variables and also the global variable e.

// Question 4 : Output

let count = 0;
(function printCount() {
  if (count === 0) {
    let count = 1;
    console.log(count); //1 - because of block scope the count variable inside the if block is different from the count variable outside the if block.
  }
  console.log(count); // 0 - because it is accessing the count variable from the outer scope which is 0.
})();

// Question 5 : Write function for this addSix()

function createBase(num) {
  return function (innerNum) {
    console.log(innerNum + num);
  };
}
var addSix = createBase(6);
addSix(10);
addSix(21);

// op - 16, 27 - because of closure the inner function has access to the outer function variable num which is 6 in this case.

// Question 6 : Time Optimization

function find() {
  let a = [];
  for (let i = 0; i < 1000000; i++) {
    a[i] = i * i;
  }
  return function (index) {
    console.log(a[index]);
  };
}
const closure = find();
console.time("6");
closure(6);
console.timeEnd("6");
console.time("50");
closure(50);
console.timeEnd("50");

// explain - The find function creates an array a and fills it with the squares of numbers from 0 to 999999. It then returns a function that takes an index and logs the value at that index in the array a. Because of closure, the inner function has access to the array a even after the find function has executed. This allows us to quickly retrieve the square of any number from 0 to 999999 without having to recompute it, thus optimizing time for subsequent calls to the closure function.

// Question 6 : Block scope and set Time out

// using let
function a() {
  for (let i = 0; i < 3; i++) {
    setTimeout(function (log) {
      console.log(i); // 0,1,2
    }, i * 1000);
  }
}
a(); // using let will give you 0 , 1 ,2 - because let has block scope and each iteration of the loop creates a new scope for i, so the value of i is preserved for each setTimeout callback.

// using var
for (var i = 0; i < 3; i++) {
  function inner(i) {
    setTimeout(function (log) {
      console.log(i); // 3 times  3
    }, i * 1000);
  }
  inner(i);
}

// here we are making closure by creating an inner function and passing the current value of i as an argument to it. This way, each setTimeout callback has access to the correct value of i, and we will get 0, 1, and 2 as output instead of 3, 3, 3 which we would get if we directly used var without creating a closure.

// Question 7 : How would you use a closure to create a private counter?

function counter() {
  var _counter = 0;

  function add(increment) {
    _counter += increment;
  }

  function retrive() {
    return "Counter = " + _counter;
  }

  return {
    add,
    retrive,
  };
}
const c = counter();
c.add(5);
c.add(10);
console.log(c.retrive());

// explain - The counter function creates a private variable _counter that is not accessible from outside the function. It also defines two inner functions, add and retrive, which have access to the _counter variable through closure. The add function increments the _counter by a given value, while the retrive function returns the current value of _counter. By returning an object with these two functions, we can manipulate the counter without directly accessing the _counter variable, thus keeping it private.

// Question 8 : Module Pattern :

var module = (function () {
  function privateMethod() {
    console.log("private");
  }
  return {
    publicMethod: function () {
      console.log("public");
    },
  };
})();
module.publicMethod(); //accessing public method - op - public
module.privateMethod(); // accessing private method - op - TypeError: module.privateMethod is not a function - because privateMethod is not returned in the object, it is not accessible from outside the module, while publicMethod is accessible.

// explaintation - module pattern uses closure for data encapsulation. In this example, the privateMethod is not accessible from outside the module, while the publicMethod is accessible. This allows us to create a module with private and public members, where the private members are hidden from the outside world and can only be accessed through the public members, thus providing a way to organize code and manage scope effectively.

// Question 9 : Make this run only once

let view;
function Like() {
  let called = 0;

  return function () {
    if (called > 0) {
      console.log("Already");
    } else {
      view = "likes";
      console.log("Subscribe", view);
      called++;
    }
  };
}
let isSub = Like();
isSub(); // called for the first time, so it will log "Subscribe likes"
isSub(); // called for the second time, so it will log "Already" - because of closure the inner function has access to the called variable and it keeps track of how many times the function has been called, allowing us to control the behavior of the function based on that state.
isSub(); // same as above, it will log "Already" because called is greater than 0.
isSub(); // same as above, it will log "Already" because called is greater than 0.

// Question 10 : once Polyfill

function once(func, context) {
  let ran;

  return function () {
    if (func) {
      ran = func.apply(context || this, arguments);
      func = null;
    }
    return ran;
  };
}
const hello = once((a, b) => {
  console.log("Hi", a, b);
});
hello(1, 2); // Hi 1 2 - because the first time hello is called, it executes the original function and stores the result in ran. It then sets func to null to prevent further calls to the original function. Subsequent calls to hello will simply return the value stored in ran without executing the original function again, so it will not log "Hi" again and will just return the result of the first call.
hello(1, 2); // This call will not execute the original function again, it will just return the value stored in ran from the first call, so it will not log "Hi" again and will just return the result of the first call.
hello(1, 2); // same as above, it will not log "Hi" again and will just return the result of the first call.
hello(1, 2); // same as above, it will not log "Hi" again and will just return the result of the first call.

// explain - The once function takes a function and an optional context as arguments and returns a new function that can only be called once. The first time the returned function is called, it executes the original function and stores the result in the ran variable. It then sets func to null to prevent further calls to the original function. Subsequent calls to the returned function will simply return the value stored in ran without executing the original function again. This is useful for ensuring that certain initialization code or side effects only occur once, regardless of how many times the returned function is called.
// - if func exists ,  apply will call the fucntion with the given context and arguments, and store the result in ran. Then it sets func to null to prevent future calls. If func is already null, it simply returns the value of ran, which is the result of the first call to the original function. This way, the original function can only be executed once, and all subsequent calls will return the same result without executing the function again.

// Question 11 : Memoize Polyfill

function myMemoize(fn, context) {
  const res = {};
  return function (...args) {
    var argsCache = JSON.stringify(args);
    if (!res[argsCache]) {
      res[argsCache] = fn.call(context || this, ...args);
    }
    return res[argsCache];
  };
}

// explain - The myMemoize function takes a function and an optional context as arguments and returns a new function that memoizes the results of the original function. It uses an object res to store the results of previous calls to the original function, with the stringified arguments as keys. When the returned function is called, it checks if the result for the given arguments already exists in res. If it does, it returns that result. If it doesn't, it calls the original function with the provided context and arguments, stores the result in res, and then returns it. This can significantly improve performance for functions that are called multiple times with the same arguments, as it avoids redundant calculations by returning cached results.
// - call will invoke the function with the given context and arguments, while apply will do the same but with the arguments passed as an array. In this implementation of myMemoize, we are using call to invoke the original function with the provided context and arguments. This allows us to ensure that the original function is executed with the correct this value and arguments, while also enabling us to cache the results for future calls with the same arguments.

// whats the diff between call and apply - both call and apply are used to invoke a function with a specific context (this value) and arguments. The main difference between them is how they handle the arguments passed to the function. call takes the arguments as a comma-separated list, while apply takes the arguments as an array. For example, func.call(context, arg1, arg2) would invoke func with context as this and arg1 and arg2 as arguments, while func.apply(context, [arg1, arg2]) would do the same but with the arguments passed as an array.
const clumsyProduct = (num1, num2) => {
  for (let i = 1; i <= 100000000; i++) {
    return num1 * num2;
  }
};

const MemoizeClumsyProduct = myMemoize(clumsyProduct);

console.time("First call");
console.log(MemoizeClumsyProduct(9467, 7649));
console.timeEnd("First call");

// The first call to MemoizeClumsyProduct with the arguments (9467, 7649) will execute the clumsyProduct function and store the result in the res object of myMemoize. The second call with the same arguments will return the cached result from res without executing clumsyProduct again, thus significantly reducing the time taken for the second call compared to the first call.

console.time("Second call");
console.log(MemoizeClumsyProduct(9467, 7649));
console.timeEnd("Second call");

// the 2nd call will be much faster than the first call because it retrieves the result from the cache instead of executing the clumsyProduct function again, which is time-consuming due to the loop.

// Question 12: closure VS scope

// closeure - memory , scope - access ,
