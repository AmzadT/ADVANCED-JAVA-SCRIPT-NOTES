//  **  CONSTRUCTOR-FUNCTION  **



// Pre class Notes


// Object literal

// Construction Function

// but with object literal method. It is difficult to create multiple objects of same type.

// JS Constructors 

// concept introduction;

// Construct- To build something new or To create something from scratch
// The constructor method in JavaScript is a special function used to create objects.
// We have to provide a blueprint of what key value pair an object should have.
// To do that, we use functions.


// The this keyword;

// But then, Who is the owner of a key value pair?

// var person = { // person is the owner object;
// 	name: ‘John’,
// }
// ​
// var person = {
//   name: 'John',
//   readName: function(){
//     console.log(person.name);
//   }
// }

// person.readName();

// ​


// The value of this is determined by how the function was executed:

// In a method (function written inside an object), this refers to the owner object.

// Alone, this refers to the global object.

// In a function, this refers to the global object.

// Hence the above snippet can be written as:


// var person = {
//   name: 'John',
//   readName: function(){
//     console.log(this.name);
//   }
// }

// person.readName();

// ​


// Constructor Example:

// function Player(n,t){
//   this.name = n; // this refers to the parent object;
//   this.team = t;
// }

// var myPlayer1 = new Player('Messi', 'Barcelona');
// var myPlayer2 = new Player('Ronaldo', 'Juventus');

// ​


// Constructor function is kinda like a blueprint;
// So, how did we move from simple functions that return values to creating objects using them… It’s all because of ‘this’ and ‘new’ keywords.


// IMPORTANT THINGS TO REMEMBER:

// ‘new’ keyword is mandatory

// You can also pass function as argument values
// Best used for creating multiple objects of same type


// CALL APPLY BIND :


// We learned about creating custom Objects using Js functions.What if we could control where ‘this’ belongs?

// All JavaScript functions has access to some very special methods which we can use to control where ‘this’ should refer.


// Such methods are call(), bind() & apply()


//   var person1 = {
//     name: "John",
//   };

//   var person2 = {
//     name: "Jill",
//   };

//   function myName() {
//     console.log(this.name);
//   }

//   myName.call(person1); // John
//   myName.call(person2); // Jill
// ​


// Discuss how arguments can be passed in .call or .apply methoods of function.

//   var person1 = {
//     name: "John",
//   };

//   var person2 = {
//     name: "Jill",
//   };

//   function myName(age) {
//     this.age = age;
//   }
//   myName.call(person1, 28);

// ​
// the above code is similar to;

//  var person1 = {
//     name: "John",
//     myName(age){
//       this.age = age;
//     }
//   };

// ​


// CALL

// call() provides a new value of ‘this’ to the function/method.


// Example2:

//   var person1 = {
//     name: "John",
//   };

//   var person2 = {
//     name: "Jill",
//   };

//   function myName(age,city) {
//     this.age = age;
//     this.city = city;
//   }
//   myName.call(person1, 28, "bangalore");

// ​


// APPLY

// The apply() method is literally the same as call() method.
// They just both take arguments differently.



// example3:

//   var person1 = {
//     name: "John",
//   };

//   var person2 = {
//     name: "Jill",
//   };

//   function myName(age,city) {
//     this.age = age;
//     this.city = city;
//   }
//   myName.apply(person1, [28, "bangalore"]);

// ​
// BIND


// You can bind a particular object as ‘this’ to a function and use it later.
// You cannot use call() or apply() later, they run immediately.


// Example 4 :

//   var person1 = {
//     name: "John",
//   };

//   var person2 = {
//     name: "Jill",
//   };

//   function myName(age,city) {
//     this.age = age;
//     this.city = city;
//   }
//   let myBindFunc = myName.bind(person1, 28, "bangalore");

//   myBindFunc();










// # Constructor Function Class-Notes:-



// **What is object and Why do we use objects ?**

// Contain properties (key-value pairs). Value can be of any type including primitives, objects, functions and arrays.


// **Why Objects ?**

// #1 **Grouping related variables** 

// ```jsx
// // grouping related variables
// let account = {
//   accountNumber : 12092903490,
//   name: 'Vivek',
//   type: 'Simple Saving',
//   balance: 100000,
//   active: true,
// }
// ```



// #2 **Adding & Removing Properties and Methods after creating an object [Dynamic objects]**

// ```jsx
// account.reference = 'Some one';
// account['new_property'] = 'Yet some value';
// console.log(account);

// delete account.reference;
// console.log(account);
// ```



// #3 **Passing into a function as an Argument**

// ```jsx
// // can be passes to a function as an argument
// function printAccountDetails(obj) {
//   console.log('Name: ', obj.name, 'Type: ' ,obj.type, 'Active: ' , obj.active, 'Bal: ' , obj.balance);
// }

// printAccountDetails(account);
// ```



// #4 **Related functions can be a part of the object itself, so wherever we have this object we have access to its functions (methods). In other words, Objects can store functions with their associated data.**

// ```jsx
// let account = {
//   name: 'Vivek',
// 	accountNumber : 12092903490,
//   type: 'Preffered Savings',
//   balance: 100000,
//   active: true,
//   printAccountDetails: function () {
//     console.log('Name: ', this.name, 'Type: ', this.type, 'Active: ', this.active, 'Bal: ', this.balance);
//   }
// };

// account.printAccountDetails()
// ```

// **The `this` keyword** : 



// 1. **Global Scope :**

//     1. In global scope, `this` refers to global object;

// ```jsx
// console.log(this); // Window
// ```


//  b. Even in strict mode. in global scope, this refers to window object;

// ```jsx
//  "use strict";
//   console.log(this);
// ```

// - **Strict Mode**
    
//     ### Strict Mode :
    
//     The `"use strict"` flag does a number of things:
    

//     - Helps prevent accidentally setting global variables (meaning every variable needs a var declaration)
        
//         ```jsx
//         "use strict"
//         age = 10
//         console.log(age) // Uncaught ReferenceError: age is not defined
//         ```
        
//     - Ensures that function arguments are named uniquely.
        
//         ```jsx
//         "use strict"
//         function printHello(a, b, c, a) {
//           console.log(a, b, c, a)
//         }
        
//         printHello(1, 2, 3, 4) // throws an error since duplicate parameter
//         ```
        

//     - Basically Strict mode primarily enforces a stricter set of rules for writing JavaScript code to catch common mistakes and prevent potentially problematic behavior.
    

//     [Strict mode - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions_and_function_scope/Strict_mode)
    

//     In my opinion, `"use strict"` wherever possible. It will cause your Javascript to throw errors instead of silently trying to remedy what could be a serious problem!
    

//     Please be aware, however, that "use strict" has not yet been fully implemented in all browsers. By all means, take advantage of it, but don't rely heavily on it just yet!
    

// 1. **In Functions** :

//     1. If a function is called without an object, "this" will refer to the global object (usually "window" in a web browser).
    

//     ```jsx
//     function test() {
//       console.log(this); // Window
//     }
    
//     test();
//     ```
    

//     b. If a function is called as a method of an object, "this" points to the object itself.
    
//     ```jsx
//     const person = {
//       name: 'John',
//       sayHello: function() {
//         console.log(`Hello, ${this.name}!`);
//       }
//     };
    
//     person.sayHello(); // This will print "Hello, John!" because "this" refers to the "person" object.
//     ```
    
//     c. In a function, in strict mode, this is undefined.
    
//     ```jsx
//     "use strict"
//     function test() {
//       console.log(this) // undefined
//     }
    
//     test()
//     ```
    

// **Some observations ( Quick Review )**

// - this will always point to an object.
// - this is a pointer that we use in javascript to represent owner object.
// - this is flexible; value of this changes
// - this can point to different owner objects through few methods that we are going to learn ( `call`, `apply`, `bind` ).



// **Call, Apply & Bind Methods :**

// All JavaScript functions has access to some very special methods which we can use to control where ‘this’ should refer. Such methods are `call()`, `bind()` & `apply()`.



// ### CALL

// ```jsx
// // .call & .apply are used to invoke a function & set the value of the this keyword 
// // inside of the function

// // .bind is used to create a function & set the value of the this keyword 
// // inside of the newly created function

// var person1 = {
//     name: "John",
//   };

//   var person2 = {
//     name: "Jill",
//   };

//   function myName() {
//     console.log(this.name);
//   }

//   myName.call(person1); // takes in the value of this keyword as the first argument
// // prints John
//   myName.call(person2); // Prints Jill
// ```

// In case there are multiple arguments to function

// ```jsx
// var person1 = {
//   name: "John",
// };

// var person2 = {
//   name: "Jill",
// };

// function printDetails(age,city) {
//   console.log(this.name + " is " + age + " years old"+" and lives in "+ city);
// }

// printDetails.call(person1,28,"New york"); // John is 28 years old and lives in New york
// printDetails.call(person2,32,"Bengaluru"); // Jill is 32 years old and lives in Bengaluru
// ```

// the above code is similar to

// ```jsx
//  var person1 = {
//     name: "John",
//     printDetails(age,city) {
// 		  console.log(this.name + " is " + age + " years old"+" and lives in "+ city);
// 		}
//   };

// ```



// ### APPLY

// The apply() method is literally the same as call() method. They just both take arguments differently.



// example3:

// ```jsx
//   var person1 = {
//     name: "John",
//   };

//   var person2 = {
//     name: "Jill",
//   };

//   function printDetails(age,city) {
// 	  console.log(this.name + " is " + age + " years old"+" and lives in "+ city);
// 	}
//   myName.apply(person1, [28, "bangalore"]); // takes in the value of this keyword as the first argument; rest of the arguments to the function can be sent a an array of values
// ```



// ### BIND

// You can bind a particular object as ‘this’ to a function and use it later. You cannot use call() or apply() later, they run immediately.



// example4:

// ```jsx
//   var person1 = {
//     name: "John",
//   };

//   var person2 = {
//     name: "Jill",
//   };

//   function myName(age,city) {
//     this.age = age;
//     this.city = city;
//   }
//   let myBindFunc = myName.bind(person1, 28, "bangalore"); // bind gives you a new function in which the this keyword is preset for us; it returns a function which can be invoked later; this "this" value being pointed to person1 will be remembered;

//   myBindFunc();
// ```

// ---



// **As our application grows, we need different ways to create Objects. How to create multiple accounts? for example.**

// Let’s say a bank has to create accounts of 90 Lakh customers. 

// Is it feasible to keep writing like this ? Is is scalable ?

// ```jsx
// // grouping related variables
// let account1 = {
//   accountNumber : 12092903490,
//   name: 'Vivek',
//   type: 'Simple Saving',
//   balance: 100000,
//   active: true,
// }
// let account2 = {
//   accountNumber : 120923208900,
//   name: 'Samuel',
//   type: 'Current',
//   balance: 300000,
//   active: true,
// }
// let account3 = {
//   accountNumber : 1209382692610,
//   name: 'Aslam',
//   type: 'Current',
//   balance: 150000,
//   active: true,
// }
// ....
// ```

// The answer is no..

// So what could be done ?

// You will basically create a process - a system - a function - that would take in some arguments and give you a new account!!

// ```jsx
// function account(accountNumber,name,type,balance,active){
//   let accountDetails = {};

//   accountDetails.accountNumber = accountNumber;
//   accountDetails.name = name;
//   accountDetails.type = type;
//   accountDetails.balance = balance;
//   accountDetails.active = active;

// 	accountDetails.printAccountDetails = function () {
//     console.log('Name: ', this.name, 'Type: ', this.type, 'Active: ', this.active, 'Bal: ', this.balance);
//   }

//   return accountDetails;
// }

// let vivekAccount = account(1290337843, 'Vivek', 'Savings', 90000, true)

// console.log(vivekAccount) 
// /*
// {
//   accountNumber: 1290337843,
//   name: 'Vivek',
//   type: 'Savings',
//   balance: 90000,
//   active: true
// }
// */
// ```



// Another example: 

// What if you need to draw this exact same drawing in 1,00,000 documents?

// ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/e7ab2b2f-ef9b-4992-9a0f-fc67e7e9e6a3/a245e379-2fb8-4db0-b663-522e8bcd9003/Untitled.png)

// You would probably create a system - a process - a stamp maybe?

// ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/e7ab2b2f-ef9b-4992-9a0f-fc67e7e9e6a3/157f7b1c-7655-42b4-be74-df04c02845a2/Untitled.png)


// > **If we need to create similar kind of a thing in quantity - its good to have a system - a structure - a process**
// > 

// Can you think of more real world examples? 

// - **Molds** (sancha) for clay toys / utensils

// “**Creating objects in Bulk Quantity”**


//           vs


// **“Inheritance”**

// This the concept of creating or manufacturing an object in bulk quantity. Creation of object is different of inheritance. 

// If you need to manufacture 1,00,000 iPhone 1st Gen in 2007 -  we understand that we need a process to manufacture them… create them… only the serial number of the device would change, rest all properties & methods remains the same…

// The all have some common properties & methods

// ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/e7ab2b2f-ef9b-4992-9a0f-fc67e7e9e6a3/92ed3fb2-d93b-4835-a7d9-75e1e50938d3/Untitled.png)

// Now when iPhone-2 (3G) was planned for 2008, obviously - first thing is that we need a system/structure/process/blueprint

// But wait can we inherit/reuse of the properties from the older version of the phone.

// Do you see the difference between creating & inheriting

// **I Phone Example**

// **Using factory functions :**



// **Factory Function:**

// A factory function is a function that returns an object when called. It is a way to create and initialize objects by encapsulating the object creation process within a function. Factory functions are useful when you want to create multiple instances of objects with similar properties or when you want to abstract the object creation process.


// **Problem**: https://codepen.io/abduljabbarpeer/pen/KKbNwdv

// **Solution**: 

// ```jsx
// // write a factory function iPhone1 to create iPhone objects in bulk quantiy
// // iPhone1 takes in ASIN, color, display, camera
// // the object it creates has the following
// // properties: ASIN, color, display, camera
// // methods:
// // dial - console logs "tring.. tring..."
// // sendMessage - console logs "Sending message..."
// // cameraClick - "Camera clicked"


// function iPhoneGen1(ASIN, color, display, camera) {
//   let obj = {}

//   obj.ASIN = ASIN
//   obj.color = color
//   obj.display = display
//   obj.camera = camera

//   obj.dial = function () {
//     console.log("tring.. tring...")
//   }

//   obj.sendMessage = function () {
//     console.log("Sending message...")
//   }

//   obj.cameraClick = function () {
//     console.log("Camera clicked")
//   }

//   return obj
// }

// let iphone1 = iPhoneGen1("B09X67JBQV", "Gray", "90mm", "2.0 MP")
// iphone1.dial() // "tring.. tring..."
// iphone1.sendMessage() // "Sending message..."
// iphone1.cameraClick() // "Camera clicked"
// ```

// **Using constructor function :**



// **Constructor Function :**

// A constructor function is a special type of function that is used with the **`new`** keyword to create instances of objects. Constructor functions are typically used when you want to create multiple objects with the same structure and behavior.


// Problem : https://codepen.io/abduljabbarpeer/pen/YzdpPqK

// Solution : 

// ```jsx
// // write a constructor function IphoneGen1 to create iPhone objects in bulk quantiy
// // IphoneGen1 takes in ASIN, color, display, camera
// // the object it creates has the following 
// // properties: ASIN, color, display, camera
// // methods: 
// // dial - console logs "tring.. tring..."
// // sendMessage - console logs "Sending message..."
// // cameraClick - "Camera clicked"


// function IphoneGen1(ASIN, color, display, camera) {
//   this.ASIN = ASIN; //  // the new keyword helps in the initialization of the object and pointing "this" to newly created object;
//   this.color = color;
//   this.display = display;
//   this.camera = camera;
  
//   this.dial = function() {
//     console.log("tring.. tring...")
//   }
  
//   this.sendMessage = function() {
//     console.log("Sending message...")
//   }
  
//   this.cameraClick = function() {
//     console.log("Camera clicked")
//   }
// }

// let iphone1 = new IphoneGen1('B09X67JBQV','Gray','90mm','2.0 MP') // the new keyword helps in returning the product.

// console.log(iphone1)
// iphone1.dial(); // "tring.. tring..."
// iphone1.sendMessage(); // "Sending message..."
// iphone1.cameraClick(); // "Camera clicked"
// ```

// ---

// Student Tasks: https://codepen.io/drupalastic/pen/wvEdeMr?editors=0010 [problem - create animal factory function]


// - Solution
    
//     ```jsx
//     function animal(noOfLegs, vegetarian) {
//       let obj = {};
    
//       obj.noOfLegs = noOfLegs;
//       obj.vegetarian = vegetarian;
    
//       obj.eat = function() {
//         console.log('eating...')
//       }
    
//       obj.greet = function() {
//         console.log(`Hi, I have ${obj.noOfLegs} legs.`)
//       }
    
//       return obj;
//     }
    
//     // example invocation
//     let a1 = animal(4,true);
//     console.log(a1)
//     a1.eat() // eating...
//     a1.greet() // Hi, I have 4 legs.
//     ```
    

// Student Tasks: https://codepen.io/drupalastic/pen/KKxmqvG?editors=0012 [problem - create animal using constructor function]


// - Solution
    
//     ```jsx
//     function Animal(noOfLegs, vegetarian) {
//       this.noOfLegs = noOfLegs;
//       this.vegetarian = vegetarian;
    
//       this.eat = function() {
//         console.log('eating...')
//       }
    
//       this.greet = function() {
//         console.log(`Hi, I have ${this.noOfLegs} legs.`)
//       }
//     }
    
//     // example invocation
//     let a1 = new Animal(4,true);
//     console.log(a1)
//     a1.eat() // eating...
//     a1.greet() // Hi, I have 4 legs.
//     ```
    


// Addition Tasks :

// Try to construct `vehicles` using all three ways: 

// ```jsx
// Vehicle
//     ├── brand <string>
//     ├── tyres <number>
//     ├── doors <number>
//     ├── driver <string>
//     ├── accelerate <function that logs `accelerating`>
//     └── honking <function that logs `honking`>
// ```