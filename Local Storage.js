//  **  LOCAL-STORAGE  **



//  Json:-  it just a Data-Format

//  localStorage.setItem("key","value")

localStorage.setItem("Name","Amzad");
localStorage.setItem("Age",23);

localStorage.setItem("Address",JSON.stringify,{
    City: "Siwan",
    Country: "India",
    Village: "Bindusar Bujurg Purab Tola"
})


//  Retrieve Informatuion from localStorage (How we can do it ?)
var name = JSON.parse(localStorage.getItem("City"));
console.log(name);

//  in localStorage if you send any Number into localStrage and after that You will Retrieve the Data from localStorage then it will send in a (string Format).

//  How to delete anything in localStorage --> localStorage.clear()


localStorage.setItem("Age",JSON.stringify(23));
var age = JSON.parse(localStorage.getItem("Age"));  // (Converted back to Actual/Original Format) you Retrievng data, Convert string To Number, or you can simply write(Number instead of JSON.parse)

console.log(age);


// 1. localStorage.setItem()
// 2. localStorage.getItem()
// 3. localStorage.removeItem()
// 4. localStorage.clear()




// # Class Notes :-



// 1. **What is Local Storage?**

//     - Think of Local Storage like a small notebook that your web browser has. Each website can write, read, and store its own notes in this notebook, but it can't see or change the notes from other websites.
//     - It's part of the Web Storage API, which provides a way for web pages to store data locally within the user's browser.


// 2. **Characteristics of Local Storage**:

//     - **Persistent Storage**: Unlike cookies, which can expire, Local Storage data remains saved even after you close and reopen the browser. It's like writing something in pen—it stays until you erase it.

//     - **Capacity**: Local Storage can hold a lot more data than cookies. Typically, it can store up to 5MB of data, which is like going from a small sticky note to a full notebook.

//     - **Per Domain**: Each website has its own separate Local Storage. This means that Website A can't look at or change the Local Storage of Website B.


// 3. **How It's Used**:

//     - **Storing User Preferences**: Say you choose a dark mode on a website. The site can save this preference in Local Storage, so next time you visit, it remembers your choice.
//         - Open https://chakra-ui.com/ and see for yourself.

//     - **Saving Application State**: If you're using a web application and you've made some changes, the app can save these changes to Local Storage. This way, if you accidentally close the tab, your changes aren't lost.

//     - **Caching Data**: Websites can store some data locally to load faster. For example, a website could save a list of your most recently viewed items.


// 4. **How to Use It in JavaScript**:

//     - **Setting an Item**: You can store data using `localStorage.setItem('key', 'value');`. This is like writing a note with a label (key) and a message (value).
        
//         ```jsx
//         localStorage.setItem("name", "Bruce Wayne");
//         ```
        
//     - **Getting an Item**: To read the data, you use `localStorage.getItem('key');`. This is like reading the note you've written earlier.
        
//         ```jsx
//         localStorage.getItem("name");
//         ```
        
//     - **Removing an Item**: If you want to erase a note, you use `localStorage.removeItem('key');`.
        
//         ```jsx
//         localStorage.removeItem("name");
//         ```
        

// 5. **Limitations and Considerations**:

//     - It's only for small amounts of data. You wouldn't use it to store large files.
//     - It’s not secure for sensitive data, as anyone with access to the browser can potentially read it.
//     - All data is stored as strings, so you'll need to convert it if you're working with other data types (like numbers or objects).


//         - Numbers
            
//             ```jsx
//             localStorage.setItem("age", 23);
            
//             console.log(typeof localStorage.getItem("age")); // string
//             ```
            
//             Convert it to number
            
//             ```jsx
//             let age = Number(localStorage.getItem("age"));
//             console.log(typeof age); // number
//             ```
            

//         - Objects
            
//             ```jsx
//             let profile1 = {
//               name: "John",
//               age: 30,
//               city: "New York",
//             };
            
//             // storing it into localStorage
//             localStorage.setItem("profile1", JSON.stringify(profile1));
            
//             // getting it back from localStorage
//             let profile1Obj = JSON.parse(localStorage.getItem("profile1"));
//             console.log(profile1Obj);
//             ```
            

//         - Arrays
            
//             ```jsx
//             let students = [
//               {
//                 id: 1,
//                 name: "John",
//                 age: 30,
//                 city: "New York",
//               },
//               {
//                 id: 2,
//                 name: "Bruce",
//                 age: 28,
//                 city: "New Delhi",
//               },
//             ];
            
//             // Store students in local storage
//             localStorage.setItem("students", JSON.stringify(students));
            
//             // Retrieve students from local storage
//             let studentsArray = JSON.parse(localStorage.getItem("students"));
//             console.log(studentsArray);
//             ```
            

// Local Storage is a handy tool for enhancing user experience by remembering user settings and speeding up website performance through local data caching. However, its use should be tailored to the nature of the data and the requirements of the web application.

