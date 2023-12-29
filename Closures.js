// # Pre class notes #


// Think of a closure as a backpack that a function carries around with it. This backpack contains all the variables that were in scope when the function was declared. The magic of closures is that a function retains access to this backpack, and hence the variables in it, even after the environment where the function was declared has gone away.

// Let's go step by step:

// 1. **Functions Inside Functions:** In JavaScript, you can define a function inside another function. For example:
    
function outerFunction() {
    var outerVariable = 'I am outside!';

    function innerFunction() {
        console.log(outerVariable);
    }

    return innerFunction;
}

    
// Here, `innerFunction` is a closure that is defined inside `outerFunction`.
    
// 2. **Access to Outer Variables:** The inner function (`innerFunction`) has access to the variables of the outer function (`outerFunction`). In this case, `innerFunction` can access `outerVariable`.

// 3. **The Closure Part:** Now, the interesting part is what happens when `outerFunction` finishes executing. Normally, you'd expect that all its variables would be gone, since the function is done. But, if you return the inner function and keep a reference to it, something special happens.
    
var myClosure = outerFunction();
myClosure(); // Logs: "I am outside!"
    
    
// When you call `myClosure()`, it still has access to `outerVariable`, even though `outerFunction` has finished executing. That's because `myClosure` has closed over, or captured, `outerVariable`. It's like `myClosure` has a backpack (closure) that keeps `outerVariable` in it.
    
// 4. **Why Use Closures?** Closures are useful for things like data privacy (encapsulation), creating function factories, and in callbacks and event handlers.

// 5. **Memory Considerations:** One thing to note is that closures can lead to memory leaks if not handled properly. Since the variables in the closure are kept in memory as long as the closure exists, it's important to set closures to null or undefined when they're no longer needed.

// 6. **Real-World Example:** Closures are often used in JavaScript for event handling and callbacks, where you might want to access some data that was in scope when the event listener was added.

// In summary, closures are a powerful feature in JavaScript that allows functions to remember and access variables from their lexical scope, even after that scope has finished executing. This enables many useful patterns and techniques in JavaScript programming.










// # Class notes



// We'll delve into two important concepts in JavaScript: closures and debouncing. We'll explore how closures work and how they're closely related to function execution, scopes, and execution contexts. Then, we'll see how these concepts are applied in a practical use-case: debouncing, particularly in improving web application performance.

// 1. **Closures in JavaScript**

// **Concept** :

// A closure in JavaScript is a function bundled together with references to its surrounding state (lexical environment). It gives you access to an outer function’s scope from an inner function.


// ### Examples :

function greet() {
    let name = "sam";
    return function() {
        console.log(name);
    };
}
let output = greet();
output(); // Outputs 'sam'


// - **Creation Process**:

//     - **Function Execution & Context**: When a function is executed in JavaScript, it creates an execution context. This context includes the function's variables and its scope. Upon completion, this execution context is typically destroyed.

//     - **Example with Closures**:
        
//  Here, `output` retains the reference to `name` even after `greet()` has executed, thanks to closure.
        
// - **Nesting and Scope**: The inner function has access to the variables of the outer function. This is crucial for closure formation.
// - **Extended Lifetime**: Variables used by the inner function continue to exist even after the parent function has completed execution.


function createCounter() {
    let count = 0;  // a variable in the outer scope

    function increment() {  // a nested function
        count++;  // accessing outer scope variable
        console.log(count);
    }

    return increment;  // returning the nested function
}

let counter = createCounter();  // store the returned function in a variable
counter();  // Output: 1
counter();  // Output: 2



// - In this code:

//     - `createCounter` is an outer function with a variable `count`.
//     - `increment` is a nested function that accesses and modifies `count`.
//     - We return `increment` from `createCounter`, and every time we call `counter()`, it remembers the value of `count` and increments it.


// 1. **Benefits of Closures:**

//     - **Privacy:** Closures help in creating private variables which can prevent accidental changes from the outside code.
//     - **Persistence:** The variables in the closure hold their value and aren’t reset each time the function is called.
//     Some Practical application in real world include `debouncing` `throttling` etc


// 2. **Understanding the Magic:**

//     - The magic is in the concept of scope and environment. Even though `createCounter` has finished executing, the `increment` function still has access to `count` because it remembers its scope environment.

// A better way to understand this would be to use https://pythontutor.com/render.html#mode=display 

// - Go to the above link
// - Paste the above code snippet
// - Click on Visualize Execution


// ## 2. **Debouncing :**

// ### **Concept** :

// Debouncing in JavaScript is a practice used to improve browser performance by limiting the rate at which a function can fire. A debounced function will only execute after a specified amount of time has passed since it was last called.

// - **Use-Case**: This technique is useful in scenarios like search bars where you want to limit API calls triggered by user input.


// ### Use-Case & Benefits

// - **Real-World Application**: Consider a search feature in a web application like Hotstar. Without debouncing, every keystroke by the user might trigger an API call, leading to performance issues.
// - **Benefits of Debouncing**:
//     - Reduces the number of API calls.
//     - Improves performance and user experience.
//     - Prevents server overload.


// ### Real World Examples

// 1. **Search Functionality in Web Applications**:
//     - When users type in a search box, you don't want to call the search API with every keystroke. Debouncing allows the application to wait for a pause in typing before sending the API request.
    

// ### Example :

// <!-- HTML structure -->
// <input type="text" id="query" oninput="debounce(main, 1000)" />
// <div id="movies"></div>



// JavaScript for Debouncing
let timerId;
function debounce(func, delay) {
    if (timerId) {
        clearTimeout(timerId);
    }
    timerId = setTimeout(function () {
        func();
    }, delay);
}


// In summary, closures are a powerful feature in JavaScript allowing functions to retain access to their lexical scope even after the outer function has returned. Debouncing, utilizing the concept of closures, is an effective technique to optimize performance, especially in scenarios involving frequent events or API calls. Understanding and applying these concepts can significantly enhance the functionality and efficiency of your JavaScript applications.






function MyFunnction(){

    var massage = "Hello";
    return function(){
        return massage + " Amzad";
    }
}

MyFunnction()();



function MyCounter()
{
    var count = 0;

    function IncreaseCount(){
        count++;
        console.log(count);

        
    }

    function DecreaseCount(){
        count--;
        console.log(count);
        
    }

    function IncreaseCountBySomeValue(value){
        count += value;
        console.log(count);
    }

    return {
        IncreaseCount: IncreaseCount,
        DecreaseCount: DecreaseCount,
        IncreaseCountBySomeValue: IncreaseCountBySomeValue
    };

    IncreaseCount();
    IncreaseCount();

    DecreaseCount();

    IncreaseCountBySomeValue(20);
}