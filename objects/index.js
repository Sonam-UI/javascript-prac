// OBJECT Interview Questions


// Question 1 : Delete keyword in Object

const func = (function(a){
    delete a;
    return a;
  })(5);
  
console.log(func);


// output : 5  , because delete operator is used to remove a property from an object, but in this case, 'a' is a local variable within the function and not a property of an object. Therefore, the delete operator has no effect on it, and it retains its value of 5.

// Computed Properties

let property = "firstName"
let name = "Piyush Agarwal"

let person = {
  [property]: name,
};

// Accessing
alert( person.firstName );
alert( person[property] );

// output : Piyush Agarwal


// Looping in Object

let user = {
    name: "Piyush",
    age: 24,
  };
  
  for (let key in user) {
    alert( key );  // name, age
    alert( user[key] ); // Piyush, 24
}


// Question 2 : Output

const obj = { a: 'one', b: 'two', a: 'three' };
console.log(obj);

// output : { a: 'three', b: 'two' }  , because in JavaScript, when an object literal is defined with duplicate keys, the last key-value pair will overwrite the previous ones. In this case, the key 'a' is defined twice, and the second definition ('three') overwrites the first definition ('one'). Therefore, the final object will have 'a' with the value 'three' and 'b' with the value 'two'.


// Question 3 : Create a function multiplyByTwo(obj) that multiplies all numeric property values of obj by 2.

let nums = {
    a: 100,
    b: 200,
    title: "My nums"
};
  
multiplyNumeric(nums);

function multiplyByTwo(obj) {
    for (let key in obj) {
      if (typeof obj[key] === 'number') {
        obj[key] *= 2;
      }
    }
}


// Question 4 : Output (Important)

const a = {};
const b = { key: 'b' };
const c = { key: 'c' };

a[b] = 123;
a[c] = 456;

console.log(a[b]);

// a : { '[object Object]': 456 } - 456 , because when we use an object as a key in another object, it is converted to a string. In this case, both 'b' and 'c' are objects, and when they are used as keys in object 'a', they are both converted to the string '[object Object]'. Therefore, when we assign a value to 'a[b]', it overwrites the previous value assigned to 'a[c]', resulting in 'a[b]' having the value 456.




// Question 5 : JSON.Stringify and JSON.parse 

const userOne = {
    name : "piyush",
    age : 87
};

const strObj = JSON.stringify(userOne);

// Output : {"name":"piyush","age":87} , because JSON.stringify() converts a JavaScript object into a JSON string. In this case, the userOne object is converted into a JSON string representation, which includes the property names and their corresponding values.

console.log(JSON.parse(strObj));

// Output : { name: 'piyush', age: 87 } , because JSON.parse() takes a JSON string and converts it back into a JavaScript object. In this case, the strObj variable contains the JSON string representation of the userOne object, and when we parse it using JSON.parse(), we get back the original object with its properties and values intact.


// Question 6 : Output

console.log([...'Lydia']);

// output : ['L', 'y', 'd', 'i', 'a'] , because the spread operator (...) can be used to expand an iterable (like a string) into a list of elements. In this case, the string 'Lydia' is expanded into an array of its individual characters.


// Question 7 : Output

const user = { name: 'Lydia', age: 21 };
const admin = { admin: true, ...user };

console.log(admin);

// output : { admin: true, name: 'Lydia', age: 21 } , because the spread operator (...) is used to copy the properties of the user object into the admin object. The properties from the user object are added to the admin object, resulting in a new object that contains all the properties of both objects. In this case, the admin object will have the properties 'admin', 'name', and 'age' with their respective values.


// Question 8 : Output

const settings = {
    username: 'lydiahallie',
    level: 19,
    health: 90,
  };
  
const data = JSON.stringify(settings, ['level', 'health']);

console.log(data);

// output : {"level":19,"health":90} , because when using JSON.stringify() with a replacer array, only the properties specified in the array will be included in the resulting JSON string. In this case, the replacer array ['level', 'health'] indicates that only the 'level' and 'health' properties from the settings object should be included in the JSON string. Therefore, the resulting JSON string will contain only those two properties and their corresponding values.


// Question 9 : Output

const shape = {
    radius: 10,
    diameter() {
      return this.radius * 2;
    },
    perimeter: () => 2 * Math.PI * this.radius,
  };
  
console.log(shape.diameter());
console.log(shape.perimeter());

//output : 20 and NaN , because the diameter() method uses a regular function, which has its own 'this' context that refers to the shape object. Therefore, it can access the radius property and calculate the diameter correctly. On the other hand, the perimeter property is defined as an arrow function, which does not have its own 'this' context and instead inherits it from the surrounding scope. In this case, 'this.radius' in the perimeter function does not refer to the shape object, resulting in undefined. When we try to perform a mathematical operation with undefined, it results in NaN (Not a Number).


// Question 10 : Destructuring in object

let user = {
    name:"Piyush",
    age:24,
    fullName : {
        firstName : "Piyush",
        lastName : "Agarwal"
    }
};
  
const name = "Roadside Coder"    // to change name or renaming

const { fullName : {firstName} } = user;

console.log(firstName);

// output : Piyush , because the code is using object destructuring to extract the firstName property from the fullName object within the user object. The variable name is declared but not used in this context, so it does not affect the output. The destructuring assignment allows us to directly access the firstName property and assign it to a variable, which is then logged to the console, resulting in 'Piyush'.


// Question 11 : Output

function getItems(fruitList, ...args, favoriteFruit) {
    return [...fruitList, ...args, favoriteFruit]
}
  
getItems(["banana", "apple"], "pear", "orange");

// output : SyntaxError: Rest parameter must be last formal parameter , because in JavaScript, the rest parameter (denoted by ...args) must be the last parameter in a function's parameter list. In this case, the rest parameter is followed by another parameter (favoriteFruit), which is not allowed. To fix this error, you should move the favoriteFruit parameter before the rest parameter or remove it altogether if it's not needed.


// Question 12 : Output

let c = { greeting: 'Hey!' };
let d;

d = c;
c.greeting = 'Hello';
console.log(d.greeting);

// output : Hello , because in JavaScript, objects are assigned by reference. When we assign 'c' to 'd', both 'c' and 'd' point to the same object in memory. Therefore, when we change the greeting property of 'c', it also changes the greeting property of 'd' since they reference the same object. As a result, when we log d.greeting, it outputs 'Hello'.


// Question 13 : Output

console.log({a:1} == {a:1});
console.log({a:1} === {a:1});

// output : false and false , because in JavaScript, when comparing objects using the equality (==) or strict equality (===) operators, it compares the references of the objects rather than their contents. In this case, both {a:1} and {a:1} are different objects in memory, even though they have the same properties and values. Therefore, both comparisons will return false since they are not the same object reference.


// Question 14 : Output

let person = { name: 'Lydia' };
const members = [person];
person = null;

//person = null does NOT delete object
 // only removes reference

console.log(members);

// output : [ { name: 'Lydia' } ] , because when we assign the person object to the members array, it creates a reference to the original object. When we later set person to null, it does not affect the object that is already stored in the members array. The members array still holds a reference to the original object, which is why it outputs [ { name: 'Lydia' } ] when we log it to the console.


// Question 15 : Output

const value = { number: 10 };

const multiply = (x = { ...value }) => {
  console.log((x.number *= 2));
};

multiply();
multiply();
multiply(value);
multiply(value);

// output : 20, 40, 80, 160 , because the multiply function takes an optional parameter 'x' which defaults to a new object created by spreading the properties of the 'value' object. When we call multiply() without any arguments, it uses the default value, which is a new object with number: 10. Each time we call multiply(), it multiplies the number property by 2 and logs the result. When we call multiply(value), it uses the original 'value' object, which is modified in place. Therefore, the first two calls to multiply() use a new object each time, while the last two calls modify the original 'value' object, resulting in the outputs 20, 40, 80, and 160 respectively.


// Question 16 : Output

const value = { number: 10 };

const multiply = (x = { ...value }) => {
  console.log((x.number *= 2));
};

multiply();
multiply();
multiply(value);
multiply(value);

// output : 20, 40, 80, 160 , because the multiply function takes an optional parameter 'x' which defaults to a new object created by spreading the properties of the 'value' object. When we call multiply() without any arguments, it uses the default value, which is a new object with number: 10. Each time we call multiply(), it multiplies the number property by 2 and logs the result. When we call multiply(value), it uses the original 'value' object, which is modified in place. Therefore, the first two calls to multiply() use a new object each time, while the last two calls modify the original 'value' object, resulting in the outputs 20, 40, 80, and 160 respectively.


// Question 17 : Output 

function changeAgeAndReference(person) {
    person.age = 25;
    person = {
      name: 'John',
      age: 50
    };

    return person;
}

const personObj1 = {
    name: 'Alex',
    age: 30
};

const personObj2 = changeAgeAndReference(personObj1);

console.log(personObj1); // -> ? // op -> { name: 'Alex', age: 25 }
console.log(personObj2); // -> ? // op -> { name: 'John', age: 50 }

// Explanation : In the changeAgeAndReference function, we first modify the age property of the person object that is passed as an argument. This change affects the original personObj1 object since it is passed by reference. However, when we assign a new object to the person variable, it does not affect the original personObj1 object. The person variable now references a new object with name 'John' and age 50, which is returned from the function. Therefore, personObj1 retains its original name 'Alex' but has its age modified to 25, while personObj2 references the new object with name 'John' and age 50.


// Question 18 : Shallow copy VS Deep copy

// Shallow copy creates a new object but does not create copies of nested objects. Instead, it references the same nested objects. Deep copy creates a new object and also creates copies of all nested objects, ensuring that changes to the nested objects in the copied object do not affect the original object.
// Shallow copy can be achieved using Object.assign() or the spread operator (...), while deep copy can be achieved using JSON.parse(JSON.stringify()) or by implementing a custom deep copy function or structuredClone().

// Q - How to clone an object without referencing its keys to original object
// A - We can clone an object using various methods such as Object.assign(), JSON.parse(JSON.stringify()), or the spread operator (...). These methods create a new object with the same properties and values as the original object, but they do not reference the same memory location, allowing us to modify the cloned object without affecting the original object.


const obj = {a: 1 ,b: 2}
const objclone = Object.assign({},obj);
const objclone = JSON.parse(JSON.stringify(employee));
const objclone = { ...obj };



// Question 19 : Output

JSON.stringify({
  fn: () => {},
  val: undefined
});

// output : '{}' , because when using JSON.stringify(), functions and undefined values are not included in the resulting JSON string. In this case, the fn property is a function and the val property is undefined, so both of these properties are omitted from the JSON string. As a result, the output is an empty object represented as '{}'.