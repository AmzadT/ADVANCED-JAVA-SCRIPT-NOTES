//  **  JAVA-SCRIPT-REVISION-NOTES  **



//  FRONTEND:-  Visual Piece like --> Images,texts, Etc...

//  BACKEND:-  DataBase-->(MongoDB, MySQL)-->Server/Computer-->Client


//  HTML:-  Structure to your Webpage (Like Skeleton/Black & White)
//  CSS:-  Styling your Webpage (Color,Videos,Simple Animation, Hovering, Like Muscles of Body)
//  JAVA-SCRIPT:-  Intractivity,Functionality,Movement


//  Use JS DOM Manipulations:-  use Array of Objects and created fake data and iterated through that Data.




//  **  CLASS-NOTES  **


// 1. **Frontend and Backend**:

//     - The **frontend** is what you see and interact with on the web. It's all about the userexperience, from the layout to the colors and fonts used.


//     - The **backend** is like the engine of a car—it's under the hood. You don't see it, but it's what makes the website work. It deals with the server, applications, and databases.


// 2. **Frontend**:     

// a. **HTML & CSS - Flex and Grid**:
//     - HTML (HyperText Markup Language) is like the skeleton of a web page. It gives structure by defining elements like headings, paragraphs, and images.


//     - CSS (Cascading Style Sheets) is like the clothing for the HTML skeleton. It styles the web page with colors, fonts, and layouts.


//     - Flex and Grid are tools in CSS that allow you to layout and align elements on your page efficiently.


//         - **Flex** is for one-dimensional layouts. Imagine it like a string of beads—flex lets you align these beads in a line and space them out nicely.


//         - **Grid** is for two-dimensional layouts. Think of it like a chessboard, where you can control the placement of items both vertically and horizontally.
        

//         Please note that it’s more of a general pattern and helps built things easily and there is no strict rule/recommendation that flex should only be used of 1D and grid for  2D
        
    
//     b. **JavaScript and DOM**:
    

//     - JavaScript is the programming language that makes web pages interactive. If HTML/CSS is the body, JavaScript is the nervous system that reacts to what you do, like clicking a button or submitting a form.


//     - DOM (Document Object Model) is a representation of the HTML structure that JavaScript uses to manipulate the content, structure, and style of the website.


// 3. **Backend**:
// a. **Server**:
//     - A server is a computer that serves up your website. When you visit a website, you're actually connecting to a server that sends you the files needed to display the site.
    

//     b. **Database**:
    
//     - This is where all the data of your website is stored. Think of it as a huge filing cabinet with all the information that your website needs to function.
    

//     c. **Request-Response Cycle**:
    
//     - This is the process that happens when you ask (or request) to see a website. Your browser sends a request to the server, which finds the right data in the database, puts it together in a web page, and sends it back (or responds) to you.


// 4. **JSON**
    
//     JSON stands for JavaScript Object Notation, and it's a way to store and transport data. Let's simplify this:
    

//     Imagine you have a bunch of postcards with different bits of information on them—someone's name, an address, or a little note. Each postcard represents a piece of data. Now, if you wanted to send a bunch of these postcards to a friend, you'd put them all in a box and mail them. In the world of web development, JSON is like that box of postcards.
    

//     JSON is favoured because it's easy for humans to read and write, and also easy for machines to parse and generate. Here's what makes JSON special:
    

//     1. **Text-based and Lightweight**:
//         - JSON is just text, which means we can quickly send it across the internet. It's like sending an email instead of a heavy package.


//     2. **Structured Data**:
//         - JSON is organized. Think of it like a closet with different shelves. Each shelf has a label, and you put the right items on the right shelf. In JSON, these labels are called keys, and the items you put on the shelves are called values. Together, they make a key-value pair, which looks like this: `"key": "value"`.


//     3. **Arrays and Objects**:
//         - JSON can hold two things: objects and arrays. An object is like a box with labeled compartments. Each piece of data has its own spot. In coding terms, this is written with curly braces `{}`.
//         - An array is a list where the order matters, like a shopping list. This is written with square brackets `[]`.

    
//     **Example 1** : Here's an example JSON that represents an array of objects. Each object could represent a product in an online store:
    

//     ```json
//     [
//       {
//         "productId": 101,
//         "productName": "Super Widget",
//         "price": 25.99,
//         "stock": 50,
//         "categories": ["gadgets", "widgets", "electronics"]
//       },
//       {
//         "productId": 102,
//         "productName": "Mega Widget",
//         "price": 29.99,
//         "stock": 35,
//         "categories": ["gadgets", "widgets", "home"]
//       },
//       {
//         "productId": 103,
//         "productName": "Hyper Widget",
//         "price": 39.99,
//         "stock": 20,
//         "categories": ["gadgets", "widgets", "office"]
//       }
//     ]



//     // An array in JSON is a collection of items, which can be numbers, strings, booleans, objects, or even other arrays. An array of objects would be a list where each item is a "box" of associated key-value pairs.
//     ```
    

//     In this JSON array:
    
//     - Each set of `{}` is an individual object, each representing a product.
//     - The square brackets `[]` indicate the start and end of the array.
//     - Each object has the same structure but with different data, making it easy to process them in the same way, like displaying them on a webpage or storing them in a database.
//     - `"productId"`, `"productName"`, `"price"`, `"stock"`, and `"categories"` are keys common to all objects.


//     - The values for `"categories"` themselves are arrays, showing that JSON can nest arrays within objects for complex data structures.
    

//     This structure is very common when you're dealing with multiple items that need to be processed in the same manner, like displaying a list of products on a website, which might be fetched from a server's database in this JSON format.
    

//     **Example 2** : Here's an example JSON that represents an object. Each object could represent one entity
    


//     ```json
//     {
//       "name": "John Doe",
//       "age": 30,
//       "isStudent": false,
//       "courses": ["Web Development", "Design Basics"],
//       "address": {
//         "street": "123 Main St",
//         "city": "Anytown"
//       }
//     }
    
//     ```
    


//     In this JSON:
    
//     - `"name"`, `"age"`, `"isStudent"`, `"courses"`, and `"address"` are all keys.
//     - Each key has a value: a string like `"John Doe"`, a number like `30`, a Boolean like `false`, a list like `["Web Development", "Design Basics"]`, and an object like `{"street": "123 Main St", "city": "Anytown"}`.
    

//     Why use JSON in web development? 

//     Because it's a standard format that allows you to exchange data between a server and a client (like your browser), and it's supported in pretty much all programming languages, not just JavaScript. It's especially handy when you fetch data from a server to display on a webpage or send a user's information back to the server.