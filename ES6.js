// # Pre Class Notes

// ---

// ### **ES6 Introduction & Why ES6?**

// ES6, also known as ECMAScript 2015, is a version of JavaScript that introduced several powerful new features and syntax improvements. Before ES6, developers faced certain challenges and limitations with the older JavaScript versions. ES6 aimed to make the language more modern, readable, and versatile.

// ### **1. `let`**

// - **Explanation**: `let` allows you to declare variables that are block-scoped, meaning they exist only within the block they are defined in.
// - **Difference from `var`**: Unlike `var`, which is function-scoped, `let` is limited to the block, statement, or expression where it's defined.
    
//     ```jsx
//     var x = 10;
//     // Here x is 10
//     {
//       let x = 2;
//       // Here x is 2
//     }
//     // Here x is 10
//     ```
    
//     ```jsx
//     let name = "Alice";
//     console.log(name); // Outputs: Alice
//     ```
    
//     ```jsx
//     let age = 25;
    
//     if (true) {
//         let age = 30;
//         console.log(age); // Outputs: 30 (because this 'age' is inside the block)
//     }
    
//     console.log(age); // Outputs: 25 (because this 'age' is outside the block)
//     ```
    

// ### **2. `const`**

// - **Explanation**: `const` is used to declare variables whose values should not be reassigned after they're set.
// - **Note**: While the variable itself can't be reassigned, if it's an object or array, its properties or elements can still be modified.
    
//     **Example 1**: Basic usage
    
//     ```jsx
//     const pi = 3.14159;
//     console.log(pi); // Outputs: 3.14159
//     ```
    
//     **Example 2**: Trying to reassign a `const` variable (this will throw an error)
    
//     ```jsx
//     const country = "USA";
//     country = "Canada"; // Error: Assignment to constant variable.
//     ```
    
//     **Example 3**: Modifying the content of a `const` object or array
    
//     ```jsx
//     const person = {
//         name: "Bob"
//     };
    
//     person.name = "Charlie"; // This is fine
//     console.log(person.name); // Outputs: Charlie
    
//     const numbers = [1, 2, 3];
//     numbers.push(4); // This is fine
//     console.log(numbers); // Outputs: [1, 2, 3, 4]
//     ```
    
//     Remember, while you can't reassign a `const` variable, you can modify its content if it's an object or array.
    

// ---

// ### **3. Arrow Functions**

// - **Explanation**: Arrow functions provide a new way to write shorter function syntax.
    
//     ```jsx
//     const add = (a, b) => a + b;
    
//     ```
    
// - **Difference from traditional functions**:
//     - **Syntax**: Arrow functions have a shorter syntax.
//     - **`this` behavior**: In arrow functions, the value of `this` is determined by the surrounding lexical context. Traditional functions define their own `this` value.
    
//     ```jsx
//     double = (x) => {
//         return x*2
//         }
//     //or
//     double = x => x*2
//     //or
//     double
//     //is the same as
    
//     function double(x){
//         return x*2
//     }
    
//     ```
    
//     ```jsx
//     var elements = [
//         'Hydrogen',
//         'Helium',
//         'Lithium',
//         'Beryllium'
//       ];
    
//       var a,b,c,d,e,f,g;
    
//       // This statement returns the array: [8, 6, 7, 9]
//       a = elements.map(function(element) {
//         return element.length;
//       });
    
//       // The regular function above can be written as the arrow function below
//       b = elements.map((element) => {
//         return element.length;
//       }); // [8, 6, 7, 9]
    
//       // When there is only one parameter, we can remove the surrounding parentheses
//       c = elements.map(element => {
//         return element.length;
//       }); // [8, 6, 7, 9]
    
//       // When the only statement in an arrow function is `return`, we can remove `return` and remove
//       // the surrounding curly brackets
//       d = elements.map(element => element.length); // [8, 6, 7, 9]
    
//     ```
    
//     Arrow functions do not have their own `this` keyword property.
    
//     ```jsx
//     var obj = { // does not create a new scope
//         i: 10,
//         b: () => console.log(this.i, this),
//         c: function() {
//           console.log(this.i, this);
//         }
//       }
    
//       obj.b(); // prints undefined, Window {...} (or the global object)
//       obj.c(); // prints 10, Object {...}
//     ```
    

// ### **4. `for..of`**

// - **Explanation**: The `for..of` loop iterates over values (like array elements) rather than properties (like `for..in`).
    
//     ```jsx
//     let array = ["batman", "superman", "aquaman", "spiderman", "ironman"]
//     for (let value of array) {
//       console.log(value)
//     /*  
//     	batman
//     	superman
//     	aquaman
//     	spiderman
//     	ironman 
//     */
//     }
//     ```
    

// ### **5. Destructuring**

// - **Objects**: Allows you to extract properties from objects into variables.
    
//     ```jsx
//     const person = { name: 'John', age: 30 };
//     const { name, age } = person;
//     ```
    
// - **Arrays**: Extracts items from arrays.
    
//     ```jsx
//     const colors = ['red', 'green', 'blue'];
//     const [firstColor, secondColor] = colors;
//     ```
    
// - **Renaming**: You can rename variables while destructuring.
    
//     ```jsx
//     const { name: personName } = person;
//     ```
    

// ### **6. Destructured Object Inside Function Params**

// - **Explanation**: You can destructure objects directly in function parameters.
    
//     ```jsx
//     const displayPerson = ({ name, age }) => {
//       console.log(name, age)
//     }
    
//     let person = {
//       name: "batman",
//       age: 26,
//     }
//     displayPerson(person) // batman 26
//     ```
    

// We know that we can:

// - add a single property,
// - extract a property
// - add multiple properties

// to an object.

// ```jsx
// var person = {}
// person.name = 'karthik';
// person.id = 'sm_090';
// person.location = 'India';
// // creating property one by one

// const name = person.name
// const id = person.id
// // extracting property one by one

// // creating multiple properties together by using object literal notation
// var person = {
//     name:"karthik",
//     id:"sm_090",
//     location:"India"
// }

// var name = person.name
// var id = person.id
// var location = person.location

// ```

// `Destructuring` allows us to `extract multiple properties` from an object

// ```jsx

// const { name, id, location } = person;
// // The code can now be written in a better way now

// ```

// - You can also destructure from return values from other functions.
// - If you have an api call and it returns a large object.

// ```jsx

// function getData(){
//     let count = 5
//     let url = '127.0.0.1:8000'
//     let obj = {
//         count,
//         url,
//     }
//     return obj
// }

// var { count, url } = getData()

// ```

// `Array Destructuring`

// We can do the same with arrays as well

// ```jsx

// // array destructuring

// // standard way
// const arr = ['MASAI','INDIA','EDTECH']
// var name = arr[0]
// var location = arr[1]
// var desc = arr[2]

// // es6
// var [name,location,desc] = arr
// console.log(name,location,desc)

// // using destructuring in split
// name = 'albert sebastian'
// const [fname, lname] = name.split(' ')
// console.log(fname, lname)

// ```

// Renaming field names:

// ```jsx

// // use const
// var person = {
//     f:'swanand',
//     l:'kadam',
//     i:'swanand7'
// }

// var {f:fname,l:lname,i:id} = person

// ```

// Implementing in function arguments:

// ```jsx
// function fetchData(baseUrl,query,maxResults,orderby){

// }

// fetchData(' <https://www.googleapis.com/youtube/v3/search','masai',10,'date>')

// // This can cause issues because we need to pass the exact order, and can make the function complicated
// // Also this function doesnt handle default values
// ```

// We can use object destructuring:

// ```jsx
// function fetchData({baseUrl,query,maxResults,orderby}){

// }

// // we can change the order
// fetchData({
//     baseUrl:'<https://www.googleapis.com/youtube/v3/search>',
//     orderby:'date',
//     maxResults:10,
//     query:'masai'

// })

// ```

// combining with default values:

// ```jsx
// function fetchData({baseUrl,query='',maxResults=null,orderby=null}){

// }

// // pass only some variables
// fetchData({
//     baseUrl:'<https://www.googleapis.com/youtube/v3/search>',
//     query:'masai'

// })

// // combine with default parameters
// ```

// ### **7. Spread Operator (`...`)**

// - **Explanation**: The spread operator allows you to spread out elements of an array or properties of an object.
    
//     ```jsx
//     const arr1 = [1, 2, 3];
//     const arr2 = [...arr1, 4, 5]; // [1, 2, 3, 4, 5]
//     ```
    
//     ```jsx
//     function sum(x, y, z) {
//       return x + y + z;
//     }
//     // Pass each elem of array as argument
//     sum(...[1,2,3]) == 6
    
//     // x = 1
//     // y = 2
//     // z = 3
    
//     ```
    
//     In the example below the var `abc` and contains 3 values each.  the var `def` and contains 3 values each.The spread operator basically lays out the entire array into seperate elements.
//     `alpha` contains 6 elements.
    
//     ```jsx
//     var abc = ['a', 'b', 'c'];
//     var def = ['d', 'e', 'f'];
//     var alpha = [ ...abc, ...def ];
//     console.log(alpha)// alpha == ['a', 'b', 'c', 'd', 'e', 'f'];
    
//     ```
    

// ### **8. Rest Operator (`...`)**

// - **Explanation**: The rest operator allows you to represent an indefinite number of elements as an array. It's often used in function parameters.
    
//     ```jsx
//     function displayColors(...colors) {
//       console.log(colors);
//     }
//     displayColors('red', 'green'); // ['red', 'green']
    
//     ```
    
//     The example below shows how the arguments after the first is combined into an array.
    
//     ```jsx
//     function f(x, ...y) {
//       // y is an Array
//       return x * y.length;
//     }
//     f(3, "hello", true) == 6
    
//     ```
    
//     In the example below, the arguments 2, 3 & 4 are taken into an array others.
    
//     ```jsx
//     function sum( first, ...others ) {
//         for ( var i = 0; i < others.length; i++ )
//             first += others[i];
//         return first;
//     }
//     console.log(sum(1,2,3,4))// sum(1, 2, 3, 4) == 10;
//     ```
    

// **Note**: The spread and rest operators look the same (`...`), but their usage is different. Spread "spreads" elements out, while rest collects them into an array.

// I hope this provides a clear and concise introduction to ES6 for beginners! If you have any further questions or need more details on any topic, please let me know.

// ---













// # ES6 - I Student Notes

// ### Async Await

// **`async/await`** is a modern way to handle asynchronous operations in JavaScript. It allows you to write asynchronous code that looks and behaves like synchronous code, making it easier to read and understand.

// Quick Recap : **What’s an async operation ?**

// In JavaScript, certain operations (like fetching data from a server) don't complete immediately. Instead of blocking the rest of the code from running, JavaScript continues executing the next lines of code. This is where **`async/await`** comes into play, helping us manage these operations more intuitively.

// Fetch operation using `.then` and `.catch`

// ```jsx
// function fetchUserData(url) {
//     fetch(url) // We start by calling the fetch function, which returns a Promise.
//         .then(response => { // We use .then() to handle the successful response.
//             return response.json(); // If the response was successful, we return the parsed JSON data using response.json(), which itself returns a Promise.
//         })
//         .then(data => { // We chain another .then() to handle the parsed JSON data.
//             console.log(data);
//         })
//         .catch(error => { // Finally, we use .catch() to handle any errors that might occur during the fetch or the parsing process.
//             console.error("Error fetching data:", error);
//         });
// }

// fetchUserData('https://api.example.com/users'); // 
// ```

// Fetch operation using `async` and `await`

// ```jsx
// async function fetchUserData(url) {
//     try {
//         let response = await fetch(url);
//         let data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.error("Error fetching data:", error);
//     }
// }

// fetchUserData('https://api.example.com/users');
// ```

// **Summary :**

// - **`async/await`** provides a cleaner way to handle asynchronous operations in JavaScript.
// - It works hand-in-hand with Promises, making the code look synchronous while still being asynchronous.
// - The **`fetch`** API, combined with **`async/await`**, offers a straightforward way to handle network requests.

// ---

// ### Function Declaration | Function Expression

// **Function Declaration :**

// A function declaration defines a named function. You can identify it by the use of the **`function`** keyword followed by a name.

// ```jsx
// init()

// function init() {
//   console.log("hello") // This is function declaration, valid and prints hello
// }
// ```

// **Summary :**

// - Function declarations are hoisted, meaning they can be called before they are defined in the code.
// - They have a name, which can be useful for recursion or for clarity in stack traces.

// **Function Expression :** 

// A function expression defines a function as part of a larger expression syntax (typically a variable assignment). The function can be named, or it can be anonymous.

// **Syntax with `var`:**

// ```jsx
// init() // Hoisted ; hence init is undefined initially

// var init = () => {
//   console.log("hello")
// } // Uncaught TypeError: init is not a function
// ```

// **Syntax with `let`:**

// You can’t use init before even declaring it ( unlike var )

// ```jsx
// init()

// let init = () => {
//   console.log("hello")
// } // Uncaught ReferenceError: Cannot access 'init' before initialization
// ```

// **Syntax with `const`:**

// ```jsx
// init()

// const init = () => {
//   console.log("hello")
// } // Uncaught ReferenceError: Cannot access 'init' before initialization
// ```

// - Function expressions are not hoisted, which means you cannot call them before they are defined.
// - They can be anonymous, but naming them can be useful for clarity in stack traces.
// - When using **`const`**, the reference to the function cannot be changed (it's immutable). With **`var`** and **`let`**, you can reassign the variable to a new function or value.

// ### **Differences between Function Declaration and Function Expression:**

// 1. **Hoisting:** Function declarations are hoisted, but function expressions are not. This means you can call a function declared with a function declaration before it's defined in the code.
// 2. **Syntax:** Function declarations start with the **`function`** keyword followed by a name, while function expressions are typically assigned to a variable.
// 3. **Immutability:** When using **`const`** with a function expression, the reference to the function is immutable. This is not the case with function declarations or function expressions using **`var`** or **`let`**.

// The choice between function declarations and function expressions often comes down to style, the need for hoisting, and the desired mutability of the reference. Both forms are widely used in JavaScript, and understanding the nuances of each is crucial for effective coding.

// ---

// ### Example 1 ( Fakestore with different categories )

// - **Starting Point**
    
//     ```jsx
//     index.html
//     index.js
//     ```
    
//     ```jsx
//     // index.html
//     <!DOCTYPE html>
//     <html lang="en">
//       <head>
//         <meta charset="UTF-8" />
//         <meta http-equiv="X-UA-Compatible" content="IE=edge" />
//         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//         <style>
//           #main {
//             width: 80%;
//             margin: auto;
//             display: grid;
//             grid-template-columns: repeat(3, 1fr);
//             grid-gap: 20px;
//           }
    
//           .product-card {
//             display: flex;
//             flex-direction: column;
//             align-items: center;
//             justify-content: center;
//             border: 1px solid #cecece;
//             padding: 10px;
//           }
    
//           .product-card img {
//             height: 200px;
//             width: 200px;
//           }
//         </style>
//         <title>E Commerce</title>
//       </head>
//       <body>
//         <div id="main"></div>
//       </body>
//       <script src="index.js"></script>
//     </html>
//     ```
    
//     ```jsx
//     // index.js
//     let container = document.getElementById("main")
    
//     let data = []
    
//     // get the data
//     fetch("https://fakestoreapi.com/products")
//       .then(function (res) {
//         return res.json()
//       })
//       .then(function (res) {
//         displayData(res)
//       })
    
//     function displayData(data) {
//       data.forEach(function (product) {
//         let productCard = document.createElement("div")
//         productCard.className = "product-card"
    
//         let productImg = document.createElement("img")
//         productImg.src = product.image
    
//         let title = document.createElement("p")
//         title.innerText = product.title
    
//         let price = document.createElement("p")
//         price.innerText = "INR : " + product.price
    
//         productCard.append(productImg, title, price)
    
//         container.append(productCard)
//       })
//     }
//     ```
    
// - Phase 1
//     - Arrow Functions used
//     - Async Await
    
//     ```jsx
//     // index.html
//     <!DOCTYPE html>
//     <html lang="en">
//       <head>
//         <meta charset="UTF-8" />
//         <meta http-equiv="X-UA-Compatible" content="IE=edge" />
//         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//         <style>
//           #main {
//             width: 80%;
//             margin: auto;
//             display: grid;
//             grid-template-columns: repeat(3, 1fr);
//             grid-gap: 20px;
//           }
    
//           .product-card {
//             display: flex;
//             flex-direction: column;
//             align-items: center;
//             justify-content: center;
//             border: 1px solid #cecece;
//             padding: 10px;
//           }
    
//           .product-card img {
//             height: 200px;
//             width: 200px;
//           }
//         </style>
//         <title>E Commerce</title>
//       </head>
//       <body>
//         <div id="main"></div>
//       </body>
//       <script src="index.js"></script>
//     </html>
//     ```
    
//     ```jsx
//     // index.js
//     let main = document.getElementById("main")
//     let URL = `https://fakestoreapi.com/products`
    
//     const init = async () => {
//       try {
//         let res = await fetch(URL)
//         let data = await res.json()
//         displayData(data)
//       } catch (error) {
//         console.log(error)
//       }
//     }
//     init()
    
//     const displayData = (data) => {
//       data.forEach(function (product) {
//         let productCard = document.createElement("div")
//         productCard.className = "product-card"
    
//         let productImg = document.createElement("img")
//         productImg.src = product.image
    
//         let title = document.createElement("p")
//         title.innerText = product.title
    
//         let price = document.createElement("p")
//         price.innerText = "INR : " + product.price
    
//         productCard.append(productImg, title, price)
    
//         main.append(productCard)
//       })
//     }
//     ```
    
// - Phase 2
//     - Creation of `electronics`, `jewellery`, `men's clothing` , `women's clothing` page
//     - Creation of navbar and adding page’s link to navbar
    
//     **Project Structure**
    
//     ```jsx
//     .
//     ├── electronics-page.html
//     ├── electronics-page.js
//     ├── index.html
//     ├── index.js
//     ├── jewellery-page.html
//     ├── jewellery-page.js
//     ├── mens-clothing.html
//     ├── mens-clothing.js
//     ├── womens-clothing.html
//     └── womens-clothing.js
//     ```
    
//     ```html
//     // index.html
//     <!DOCTYPE html>
//     <html lang="en">
//       <head>
//         <meta charset="UTF-8" />
//         <meta http-equiv="X-UA-Compatible" content="IE=edge" />
//         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//         <style>
//           #main {
//             width: 80%;
//             margin: auto;
//             display: grid;
//             grid-template-columns: repeat(3, 1fr);
//             grid-gap: 20px;
//           }
    
//           .product-card {
//             display: flex;
//             flex-direction: column;
//             align-items: center;
//             justify-content: center;
//             border: 1px solid #cecece;
//             padding: 10px;
//           }
    
//           .product-card img {
//             height: 200px;
//             width: 200px;
//           }
//         </style>
//         <title>All Products</title>
//       </head>
//       <body>
//         <div id="navbar">
//           <a href="index.html">All</a>
//           <a href="electronics-page.html">Electronics</a>
//           <a href="jewellery-page.html">Jewellery</a>
//           <a href="mens-clothing.html">Men's Clothing</a>
//           <a href="womens-clothing.html">Women's Clothing</a>
//         </div>
//         <div id="main"></div>
//       </body>
//       <script src="index.js"></script>
//     </html>
//     ```
    
//     ```jsx
//     // index.js
//     let main = document.getElementById("main")
//     let URL = `https://fakestoreapi.com/products`
    
//     const init = async () => {
//       try {
//         let res = await fetch(URL)
//         let data = await res.json()
//         displayData(data)
//       } catch (error) {
//         console.log(error)
//       }
//     }
//     init()
    
//     const displayData = (data) => {
//       data.forEach(function (product) {
//         let productCard = document.createElement("div")
//         productCard.className = "product-card"
    
//         let productImg = document.createElement("img")
//         productImg.src = product.image
    
//         let title = document.createElement("p")
//         title.innerText = product.title
    
//         let price = document.createElement("p")
//         price.innerText = "INR : " + product.price
    
//         productCard.append(productImg, title, price)
    
//         main.append(productCard)
//       })
//     }
//     ```
    
//     ```html
//     // electronics-page.html
//     <!DOCTYPE html>
//     <html lang="en">
//       <head>
//         <meta charset="UTF-8" />
//         <meta http-equiv="X-UA-Compatible" content="IE=edge" />
//         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//         <style>
//           #main {
//             width: 80%;
//             margin: auto;
//             display: grid;
//             grid-template-columns: repeat(3, 1fr);
//             grid-gap: 20px;
//           }
    
//           .product-card {
//             display: flex;
//             flex-direction: column;
//             align-items: center;
//             justify-content: center;
//             border: 1px solid #cecece;
//             padding: 10px;
//           }
    
//           .product-card img {
//             height: 200px;
//             width: 200px;
//           }
//         </style>
//         <title>Electronics</title>
//       </head>
//       <body>
//         <div id="navbar">
//           <a href="index.html">All</a>
//           <a href="electronics-page.html">Electronics</a>
//           <a href="jewellery-page.html">Jewellery</a>
//           <a href="mens-clothing.html">Men's Clothing</a>
//           <a href="womens-clothing.html">Women's Clothing</a>
//         </div>
//         <div id="main"></div>
//       </body>
//       <script src="electronics-page.js"></script>
//     </html>
//     ```
    
//     ```jsx
//     // electronics-page.js
//     let main = document.getElementById("main")
//     let URL = `https://fakestoreapi.com/products/category/electronics`
    
//     const init = async () => {
//       try {
//         let res = await fetch(URL)
//         let data = await res.json()
//         displayData(data)
//       } catch (error) {
//         console.log(error)
//       }
//     }
//     init()
    
//     const displayData = (data) => {
//       data.forEach(function (product) {
//         let productCard = document.createElement("div")
//         productCard.className = "product-card"
    
//         let productImg = document.createElement("img")
//         productImg.src = product.image
    
//         let title = document.createElement("p")
//         title.innerText = product.title
    
//         let price = document.createElement("p")
//         price.innerText = "INR : " + product.price
    
//         productCard.append(productImg, title, price)
    
//         main.append(productCard)
//       })
//     }
    
//     ```
    
//     ```html
//     // jewellery-page.html
//     <!DOCTYPE html>
//     <html lang="en">
//       <head>
//         <meta charset="UTF-8" />
//         <meta http-equiv="X-UA-Compatible" content="IE=edge" />
//         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//         <style>
//           #main {
//             width: 80%;
//             margin: auto;
//             display: grid;
//             grid-template-columns: repeat(3, 1fr);
//             grid-gap: 20px;
//           }
    
//           .product-card {
//             display: flex;
//             flex-direction: column;
//             align-items: center;
//             justify-content: center;
//             border: 1px solid #cecece;
//             padding: 10px;
//           }
    
//           .product-card img {
//             height: 200px;
//             width: 200px;
//           }
//         </style>
//         <title>Jewellery</title>
//       </head>
//       <body>
//         <div id="navbar">
//           <a href="index.html">All</a>
//           <a href="electronics-page.html">Electronics</a>
//           <a href="jewellery-page.html">Jewellery</a>
//           <a href="mens-clothing.html">Men's Clothing</a>
//           <a href="womens-clothing.html">Women's Clothing</a>
//         </div>
//         <div id="main"></div>
//       </body>
//       <script src="jewellery-page.js"></script>
//     </html>
//     ```
    
//     ```jsx
//     jewellery-page.js
//     let main = document.getElementById("main")
//     let URL = `https://fakestoreapi.com/products/category/jewelery`
    
//     const init = async () => {
//       try {
//         let res = await fetch(URL)
//         let data = await res.json()
//         displayData(data)
//       } catch (error) {
//         console.log(error)
//       }
//     }
//     init()
    
//     const displayData = (data) => {
//       data.forEach(function (product) {
//         let productCard = document.createElement("div")
//         productCard.className = "product-card"
    
//         let productImg = document.createElement("img")
//         productImg.src = product.image
    
//         let title = document.createElement("p")
//         title.innerText = product.title
    
//         let price = document.createElement("p")
//         price.innerText = "INR : " + product.price
    
//         productCard.append(productImg, title, price)
    
//         main.append(productCard)
//       })
//     }
//     ```
    
//     ```html
//     // mens-clothing.html
//     <!DOCTYPE html>
//     <html lang="en">
//       <head>
//         <meta charset="UTF-8" />
//         <meta http-equiv="X-UA-Compatible" content="IE=edge" />
//         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//         <style>
//           #main {
//             width: 80%;
//             margin: auto;
//             display: grid;
//             grid-template-columns: repeat(3, 1fr);
//             grid-gap: 20px;
//           }
    
//           .product-card {
//             display: flex;
//             flex-direction: column;
//             align-items: center;
//             justify-content: center;
//             border: 1px solid #cecece;
//             padding: 10px;
//           }
    
//           .product-card img {
//             height: 200px;
//             width: 200px;
//           }
//         </style>
//         <title>Men's Clothing</title>
//       </head>
//       <body>
//         <div id="navbar">
//           <a href="index.html">All</a>
//           <a href="electronics-page.html">Electronics</a>
//           <a href="jewellery-page.html">Jewellery</a>
//           <a href="mens-clothing.html">Men's Clothing</a>
//           <a href="womens-clothing.html">Women's Clothing</a>
//         </div>
//         <div id="main"></div>
//       </body>
//       <script src="mens-clothing.js"></script>
//     </html>
//     ```
    
//     ```jsx
//     // mens-clothing.js
//     let main = document.getElementById("main")
//     let URL = `https://fakestoreapi.com/products/category/men's clothing`
    
//     const init = async () => {
//       try {
//         let res = await fetch(URL)
//         let data = await res.json()
//         displayData(data)
//       } catch (error) {
//         console.log(error)
//       }
//     }
//     init()
    
//     const displayData = (data) => {
//       data.forEach(function (product) {
//         let productCard = document.createElement("div")
//         productCard.className = "product-card"
    
//         let productImg = document.createElement("img")
//         productImg.src = product.image
    
//         let title = document.createElement("p")
//         title.innerText = product.title
    
//         let price = document.createElement("p")
//         price.innerText = "INR : " + product.price
    
//         productCard.append(productImg, title, price)
    
//         main.append(productCard)
//       })
//     }
//     ```
    
//     ```html
//     // womens-clothing.html
//     <!DOCTYPE html>
//     <html lang="en">
//       <head>
//         <meta charset="UTF-8" />
//         <meta http-equiv="X-UA-Compatible" content="IE=edge" />
//         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//         <style>
//           #main {
//             width: 80%;
//             margin: auto;
//             display: grid;
//             grid-template-columns: repeat(3, 1fr);
//             grid-gap: 20px;
//           }
    
//           .product-card {
//             display: flex;
//             flex-direction: column;
//             align-items: center;
//             justify-content: center;
//             border: 1px solid #cecece;
//             padding: 10px;
//           }
    
//           .product-card img {
//             height: 200px;
//             width: 200px;
//           }
//         </style>
//         <title>Women's Clothing</title>
//       </head>
//       <body>
//         <div id="navbar">
//           <a href="index.html">All</a>
//           <a href="electronics-page.html">Electronics</a>
//           <a href="jewellery-page.html">Jewellery</a>
//           <a href="mens-clothing.html">Men's Clothing</a>
//           <a href="womens-clothing.html">Women's Clothing</a>
//         </div>
//         <div id="main"></div>
//       </body>
//       <script src="womens-clothing.js"></script>
//     </html>
//     ```
    
//     ```jsx
//     // womens-clothing.js
//     let main = document.getElementById("main")
//     let URL = `https://fakestoreapi.com/products/category/women's clothing`
    
//     const init = async () => {
//       try {
//         let res = await fetch(URL)
//         let data = await res.json()
//         displayData(data)
//       } catch (error) {
//         console.log(error)
//       }
//     }
//     init()
    
//     const displayData = (data) => {
//       data.forEach(function (product) {
//         let productCard = document.createElement("div")
//         productCard.className = "product-card"
    
//         let productImg = document.createElement("img")
//         productImg.src = product.image
    
//         let title = document.createElement("p")
//         title.innerText = product.title
    
//         let price = document.createElement("p")
//         price.innerText = "INR : " + product.price
    
//         productCard.append(productImg, title, price)
    
//         main.append(productCard)
//       })
//     }
//     ```
    

// ---

// ### Example 2 ( Login using Reqres )

// Normal Function 

// ```jsx
// - index.html
// - index.js
// ```

// Arrow Function ( The same example but with arrow function )

// ```jsx
// - index.html
// - index.js
// ```

// ```jsx
// // index.html
// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <style>
//       #login-section {
//         display: flex;
//         flex-direction: column;
//         width: 60%;
//         margin: auto;
//         gap: 20px;
//         border: 1px solid gray;
//         padding: 16px;
//         margin-top: 100px;
//       }
//       input,
//       button {
//         padding: 5px;
//       }
//       #token-display {
//         color: tomato;
//         text-align: center;
//       }
//     </style>
//     <title>Example 3</title>
//   </head>
//   <body>
//     <div id="login-section">
//       <h1 style="text-align: center">Login Form</h1>
//       <input type="text" placeholder="Enter Email " id="email-input" />
//       <input type="text" placeholder="Enter Password " id="password-input" />
//       <button id="login-button" onclick="login()">Login</button>
//     </div>
//     <div id="token-display"></div>
//     <script src="index.js"></script>
//   </body>
// </html>
// ```

// ```jsx
// // index.html
// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <style>
//       #login-section {
//         display: flex;
//         flex-direction: column;
//         width: 60%;
//         margin: auto;
//         gap: 20px;
//         border: 1px solid gray;
//         padding: 16px;
//         margin-top: 100px;
//       }
//       input,
//       button {
//         padding: 5px;
//       }
//       #token-display {
//         color: tomato;
//         text-align: center;
//       }
//     </style>
//     <title>Example 3</title>
//   </head>
//   <body>
//     <div id="login-section">
//       <h1 style="text-align: center">Login Form</h1>
//       <input type="text" placeholder="Enter Email " id="email-input" />
//       <input type="text" placeholder="Enter Password " id="password-input" />
//       <button id="login-button" onclick="login()">Login</button>
//     </div>
//     <div id="token-display"></div>
//     <script src="index.js"></script>
//   </body>
// </html>
// ```

// ```jsx
// // index.js
// async function login() {
//   try {
//     let emailInputValue = document.getElementById("email-input").value
//     let passwordInputValue = document.getElementById("password-input").value

//     const loginDetails = {
//       email: emailInputValue,
//       password: passwordInputValue,
//     }

//     let res = await fetch(`https://reqres.in/api/login`, {
//       method: "POST",
//       body: JSON.stringify(loginDetails),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     })

//     let responseObject = await res.json()

//     displayToken(responseObject)
//   } catch (error) {
//     console.log(error)
//   }
// }

// function displayToken({ token }) {
//   let tokenDisplay = document.getElementById("token-display")
//   let tokenElement = document.createElement("h3")
//   tokenElement.textContent = `Token : ${token}`
//   tokenDisplay.append(tokenElement)
// }

// ```

// ```jsx
// // index.js
// const login = async () => { // Change 1 ( async key word is added before ()
//   try {
//     let emailInputValue = document.getElementById("email-input").value
//     let passwordInputValue = document.getElementById("password-input").value

//     const loginDetails = {
//       email: emailInputValue,
//       password: passwordInputValue,
//     }

//     let res = await fetch(`https://reqres.in/api/login`, {
//       method: "POST",
//       body: JSON.stringify(loginDetails),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     })

//     let responseObject = await res.json()

//     displayToken(responseObject)
//   } catch (error) {
//     console.log(error)
//   }
// }

// const displayToken = ({ token }) => { // Change 2
//   let tokenDisplay = document.getElementById("token-display")
//   let tokenElement = document.createElement("h3")
//   tokenElement.textContent = `Token : ${token}`
//   tokenDisplay.append(tokenElement)
// }
// ```

// ---

// ### Example 3 ( Translator App built using Translate API )

// ```html
// // index.html
// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta http-equiv="X-UA-Compatible" content="IE=edge" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>Translate App</title>
//   </head>
//   <style>
//     #container {
//       display: flex;
//       min-height: 500px;
//       padding: 5px;
//     }
//     #input-section,
//     #output-section {
//       flex: 1;
//       border: 1px solid #cecece;
//       margin: 5px;
//     }
//     #input-text {
//       height: 80%;
//       width: 98%;
//       margin-top: 30px;
//     }
//     #translated-text {
//       font-size: 24px;
//       font-weight: bold;
//     }
//   </style>
//   <body>
//     <div id="container">
//       <div id="input-section">
//         <!-- create button that will run translate text function, give id "translate-btn" -->
//         <button id="translate-btn" onclick="translateText()">Translate</button>
//         <!-- create input that will accept text to be translated, give id "input-text" -->
//         <textarea id="input-text"></textarea>
//       </div>
//       <div id="output-section">
//         <p id="translated-text">
//           <!-- show translated text here -->
//         </p>
//       </div>
//     </div>
//   </body>
// </html>
// <script src="index.js"></script>
// ```

// ```jsx
// // index.js
// let translatedTextP = document.getElementById("translated-text")
// async function translateText() {
//   try {
//     let input = document.getElementById("input-text").value
//     console.log(input)
//     let res = await fetch(`https://libretranslate.de/translate`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         q: input,
//         source: "en",
//         target: "hi",
//         format: "text",
//       }),
//     })

//     let data = await res.json()
//     displayData(data, translatedTextP)
//   } catch (err) {
//     console.log(err)
//   }
// }

// function displayData(data, parent) {
//   parent.textContent = data.translatedText
// }
// ```

// ---

















// Let and Const Keywords: let is used to declare variables with block scope, allowing reassignment, while const declares constants with block scope, preventing reassignment after initialization.


// Arrow Function: Arrow functions are concise and maintain the lexical context (this) of the surrounding code. They're shorter than normal functions and don't have their own this.


// Template Literals: Template literals are strings allowing embedded expressions using ${}. They offer easier string interpolation and multiline strings.


// Default Parameters: Default parameters enable setting default values for function parameters if no argument or an undefined value is passed.


// For of Loop: The for...of loop simplifies iterating through iterable objects like arrays or strings, providing direct access to their values.


// Object and Array Destructuring: Destructuring allows extracting values from arrays or objects into distinct variables, simplifying code and assignments.


// Rest Parameter: The rest parameter (...) allows functions to accept an indefinite number of arguments as an array, simplifying handling variable-length argument lists.


// Spread Operator: The spread operator (...) expands iterables like arrays or objects into individual elements, making it useful for array concatenation, object merging, etc.


// Classes: Classes in JavaScript provide a way to create objects using a template, allowing for object-oriented programming with inheritance and encapsulation. They offer a blueprint for creating objects with shared properties and methods.