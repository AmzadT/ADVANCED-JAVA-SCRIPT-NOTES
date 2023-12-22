// # Class notes

// ### What is JSON ?

// JSON is a text-based data format that's commonly used to exchange data between a server and a client, or between different parts of an application. You can think of it like a really organized way to jot down information that both humans and computers can understand.

// ### Why Use JSON ?

// 1. **Lightweight**: It's simple and easy to read.
// 2. **Language Independent**: Even though it has 'JavaScript' in its name, JSON can be used in many other languages like Python, Java, etc.
// 3. **Easy to Use**: Most programming languages have built-in methods to read and write JSON data.

// ### Basic Structure

// JSON has two primary types of structures:

// 1. **Objects**: Enclosed within curly braces `{}`. Think of these like JavaScript objects but without methods—only key-value pairs.
// 2. **Arrays**: Enclosed within square brackets `[]`. These are lists of values, just like arrays in JavaScript.

// ```json
// {
//   "name": "John",
//   "age": 30,
//   "isStudent": false,
//   "courses": ["math", "history"]
// }

// ```

// Here's what's happening:

// - `"name": "John"`: The key "name" has a string value "John".
// - `"age": 30`: The key "age" has a number value 30.
// - `"isStudent": false`: The key "isStudent" has a boolean value `false`.
// - `"courses": ["math", "history"]`: The key "courses" has an array value containing "math" and "history".

// ### Common Use-Cases

// - **APIs**: When you make requests to an API, the response is often in JSON format.JavaScript's Fetch API is commonly used to make API requests. 
// When you make a fetch request, the server returns a Response object. The **`.json()`** method is used to read that Response stream to completion and parses the resulting JSON text as a JavaScript object or array.
    
//     Here's a simple example:
    
//     ```jsx
//     fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())  // Convert the response to Readable format
//       .then(data => console.log(data))    // Do something with the JSON data
//     ```
    
//     So, A quick summary
    
//     1. When you make a fetch request, the server's response is wrapped in a **`Response`** object.
//     2. The **`.json()`** method reads this **`Response`** stream and converts it into JSON text.
//     3. Finally, it parses this JSON text into a JavaScript object or array that you can easily work with in your code.
    
// - **Config Files**: Some config files are written in JSON.
// package.json file :
    
//     ```jsx
//     {
//       "name": "my-awesome-project",
//       "version": "1.0.0",
//       "scripts": {
//         "start": "node index.js"
//       },
//       "dependencies": {
//         "express": "^4.17.1",
//         "lodash": "^4.17.21"
//       }
//     }
//     ```
    
// - **Storing Data**:Web browsers offer something called Local Storage, which allows you to store key-value pairs in a web browser. However, Local Storage can only store strings. This is where JSON comes to the rescue.
    
//     **Parsing & Stringifying in JavaScript**
    
//     In JavaScript, you'll commonly use two methods to work with JSON:
    
//     1. `JSON.parse()`: Takes a JSON string and converts it into a JavaScript object.
//     2. `JSON.stringify()`: Takes a JavaScript object and converts it into a JSON string.
    
//     **JSON.parse()**
    
//     ```jsx
//     const jsonString = '{"name": "John", "age": 30}';
//     const jsonObj = JSON.parse(jsonString);
//     console.log(jsonObj.name);  // Output: John
    
//     ```
    
//     **JSON.stringify()**
    
//     ```jsx
//     const jsonObj = {name: "John", age: 30};
//     const jsonString = JSON.stringify(jsonObj);
//     console.log(jsonString);  // Output: {"name":"John","age":30}
    
//     ```
    
//     To store an object or an array:
    
//     ```jsx
//     const myObj = { name: 'John', age: 30 };
//     localStorage.setItem('userInfo', JSON.stringify(myObj));
    
//     const myArray = [1, 2, 3, 4];
//     localStorage.setItem('numbers', JSON.stringify(myArray));
//     ```
    
//     To retrieve the stored object or array:
    
//     ```jsx
//     const storedObj = JSON.parse(localStorage.getItem('userInfo'));
//     console.log(storedObj);  // Output: { name: 'John', age: 30 }
    
//     const storedArray = JSON.parse(localStorage.getItem('numbers'));
//     console.log(storedArray);  // Output: [1, 2, 3, 4]
//     ```
    

// ---

// ### Node JS

// A tool that lets you use JavaScript outside of web browsers. So basically NodeJS is a runtime environment that allows you to run JavaScript on the server-side. Before Node.js, JavaScript could only be run in the browser, which is client-side.

// 1. **Server-side**: This is where your website's data is stored, and it's where things happen behind the scenes, on the servers that host your website.
// 2. **Client-side**: This is what happens locally on your own computer, in your web browser.

// So, Node.js extended the capabilities of JavaScript to be used outside of the browser, allowing developers to use JavaScript to write server-side code.

// ---

// ### Node Environment & ( NPM ) Node Package Manager

// The **Node environment** refers to the ecosystem or the set of tools and libraries that Node.js provides to developers. If you are using Node.js and its tools to develop your application. It means you are working in node environment.

// Here are some key concepts related to the Node environment:

// - Core Modules
// - NPM ( Node Package Manager )
// - Event Loop
// - Command Line Interface
// 1. **Core Modules**: Built-in tools and functions that Node provides. For example, tools to read and write files, manage paths, or make network requests.
// 2. **NPM ( Node Package Manager )**: This is a tool that comes with Node.js when you install it. It allows you to easily use external libraries and packages in your Node.js applications, which can save you a lot of time and effort.
    
//     ### package.json
    
//     The `package.json` file is like a manifest or a list of details about your project. It contains metadata like the project's name, version, and description. Most importantly, it lists the packages (and their specific versions) that your project depends on.
    
//     **Key Points:**
    
//     1. **Dependencies**: When you install a package and save it, the package name and its version are added to the `dependencies` section.
//     2. **Dev Dependencies**: If you install a package that's only needed during development (like a testing library), it's added to the `devDependencies` section using `npm install <package-name> --save-dev`
    
//     ### **node_modules  :**
    
//     When you install packages using `npm`, they are downloaded and stored in a directory called **`node_modules`**. This directory contains all the code for the packages you've installed, as well as their dependencies (other packages that they rely on to work).
    
//     **Local vs Global** : Packages can be installed locally (specific to a project) or globally (available to all projects on your computer). Local packages go into the **`node_modules`** folder inside your project directory.
    
//     **Avoid Versioning** : Typically, you don't include the **`node_modules`** directory in version control (like git). Instead, you use the **`package.json`** to keep track of which packages your project needs.
    
// 3. **Event Loop**: Node.js is designed to be non-blocking and asynchronous. This means that it can perform many operations at the same time without having to wait for one to finish before starting another. The event loop is a mechanism that enables this behavior, allowing Node.js to be very efficient.
// 4. **Command Line Interface (CLI)**: Using the command line, you can start, stop, or manage your Node applications.

// **Quick Summary** :

// - **Node.js**: A tool that lets you use JavaScript outside of web browsers.
// - **Node environment**: All the features, tools, and surroundings that Node provides to help you run your JavaScript code efficiently.









// # Pre Class Video & Notes II

// ---

// Notes : 

// ### To generate mock data :

// [Mockaroo - Random Data Generator and API Mocking Tool | JSON / CSV / SQL / Excel](https://www.mockaroo.com/)

// ### Json server :

// [GitHub - typicode/json-server: Get a full fake REST API with zero coding in less than 30 seconds (seriously)](https://github.com/typicode/json-server#getting-started)

// Setup a server for all kinds of requests easily

// ```bash
// mkdir api-mocker

// cd api-mocker

// npm init ( press enter for everything )
// // the above command will create a package.json file
// // you are creating a new project here
// // npm means node package manager

// npm install json-server
// // this will add json-server as a package into your project

// // open package.json file and the following to the scripts key
// // db.json is the file that you need to add your json for
// "start" : "json-server --watch db.json"

// npm run start
// // run this for starting the server

// // alternatively
// json-server --watch db.json
// ```

// ```
// GET    /posts
// GET    /posts/1
// POST   /posts
// PUT    /posts/1
// PATCH  /posts/1
// DELETE /posts/1

// GET    /profile
// POST   /profile
// PUT    /profile
// PATCH  /profile
// ```

// ### Filter

// ```
// GET /posts?title=json-server&author=typicode
// GET /posts?id=1&id=2
// GET /comments?author.name=typicode
// ```

// ### Pagination

// ```
// GET /posts?_page=7
// GET /posts?_page=7&_limit=20
// ```

// ### Sort

// ```
// GET /posts?_sort=views&_order=asc
// GET /posts/1/comments?_sort=votes&_order=asc
// ```

// ### Operators

// ```
// Add _gte or _lte for getting a range

// GET /posts?views_gte=10&views_lte=20
// Add _ne to exclude a value

// GET /posts?id_ne=1
// Add _like to filter (RegExp supported)

// GET /posts?title_like=server
// ```

// ### Full text search

// ```
// // Add q

// GET /posts?q=internet
// ```

// ### Alternative port

// You can start JSON Server on other ports with the --port flag:

// ```
// json-server --watch db.json --port 3004
// ```

// modify this in your scripts in package.json