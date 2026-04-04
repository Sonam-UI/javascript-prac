// VAR, LET & CONST Interview Questions

// Question 1 : Variable Shadowing

function test() {
  let a = "Hello";

  if (true) {
    let a = "Hello"; // New value assigned
    console.log(a);
  }

  console.log(a);
}

test();

// explaination - outer a function scope hai , inner a block scope hai , dono alag memory location me hai , shadowing - inner vairable outer ko temporirly hide kr deta hai
// output - hello hello

// Question 2 :  Illegal Shadowing

function func() {
  var a = "Hello";
  let b = "Namaste";

  if (true) {
    let a = "Hi"; // Legal Shadowing
    var b = "Bye"; // Illegal Shadowing
    console.log(a); // It will print 'GeeksforGeeks'
    console.log(b); // It will print error
  }
}
test();

// SyntaxError: Identifier 'b' has already been declared  , var - func scope , let- block scope
// var block ko ignore karke same scope me aa jata hai, jahan already let b exist karta hai — isliye conflict hota hai → SyntaxError
// function func() {
//   var a = "Hello";
//   let b = "Namaste";

//   var b = "Bye";  // same scope me aa gaya
// }

// Question 3 : Hoisting

console.log(a);

var a = 10;

// explaintation - memory phase a : undefined , execution phase print a as undeifned then assign 10

// Question 4 : Temporal Dead Zone

console.log(a, b, c);

const c = 30;
let b = 20;
var a = 10;

// explaintation - memory phase c  , b : memory created but not initialized  (tdz), a : undefined
//   exection phase -print a : undefined , b - ref error , c - reach hi nhi karega , then c =30 , b=20 , a=10

// Cannot access 'b' before initialization


