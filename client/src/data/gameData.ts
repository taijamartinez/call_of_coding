

export const gameData = [
    {
        id: "1",
        title: "Hack the Matrix",
        story: "A secret agency has tasked you with cracking an encrypted code to retrieve stolen data before it’s too late.",
        questions: [
          {
            text: "What is the correct syntax to declare a constant in JavaScript?",
            options: ["let x = 5;", "const x = 5;", "var x = 5;"],
            correctAnswer: "const x = 5;",
          },
          {
            text: "Which method converts JSON into a JavaScript object?",
            options: ["JSON.parse()", "JSON.stringify()", "JSON.toObject()"],
            correctAnswer: "JSON.parse()",
          },
          {
            text: "What does the 'let' keyword do in JavaScript?",
            options: ["Declares a function", "Declares a constant", "Declares a block-scoped variable"],
            correctAnswer: "Declares a block-scoped variable",
          },
          {
            text: "Which algorithm is commonly used for encrypting data?",
            options: ["Bubble Sort", "RSA", "Merge Sort"],
            correctAnswer: "RSA",
          },
          {
            text: "What does 'JSON.stringify()' do?",
            options: ["Converts a JavaScript object into a JSON string", "Parses a JSON string", "Converts JSON into a JavaScript object"],
            correctAnswer: "Converts a JavaScript object into a JSON string",
          },
          {
            text: "Which protocol is most commonly used to send data over the web?",
            options: ["HTTP", "SMTP", "FTP"],
            correctAnswer: "HTTP",
          },
          {
            text: "What is the correct way to handle errors in JavaScript?",
            options: ["if statement", "for loop", "try-catch block"],
            correctAnswer: "try-catch block",
          },
          {
            text: "Which command is used to stop a Node.js server?",
            options: ["ctrl+c", "exit", "stop"],
            correctAnswer: "ctrl+c",
          },
          {
            text: "What is a SQL injection attack?",
            options: ["Injecting malicious code into an SQL query", "Overloading a server with requests", "Inserting incorrect data into a database"],
            correctAnswer: "Injecting malicious code into an SQL query",
          },
          {
            text: "What is the most secure way to store passwords in a database?",
            options: ["Plaintext", "Hashing", "Encryption"],
            correctAnswer: "Hashing",
          },
        ],
      },
      {
        id: "2",
        title: "Glitch Wars",
        story: "You've entered a mysterious coding tournament. Solve the challenges to claim victory!",
        questions: [
          {
            text: "Which data structure follows the First In, First Out (FIFO) principle?",
            options: ["Stack", "Queue", "Linked List"],
            correctAnswer: "Queue",
          },
          {
            text: "Which sorting algorithm has an average time complexity of O(n log n)?",
            options: ["Bubble Sort", "Quick Sort", "Insertion Sort"],
            correctAnswer: "Quick Sort",
          },
          {
            text: "In which situation would you use a stack data structure?",
            options: ["To manage undo/redo operations", "To store objects in random order", "To manage a queue of customers"],
            correctAnswer: "To manage undo/redo operations",
          },
          {
            text: "What does the 'map()' function do in JavaScript?",
            options: ["Loops through an array", "Sorts an array", "Creates a new array by modifying each element"],
            correctAnswer: "Creates a new array by modifying each element",
          },
          {
            text: "Which of these methods is used to combine two arrays in JavaScript?",
            options: ["concat()", "merge()", "join()"],
            correctAnswer: "concat()",
          },
          {
            text: "What is the time complexity of the Quick Sort algorithm in the average case?",
            options: ["O(n^2)", "O(n log n)", "O(n)"],
            correctAnswer: "O(n log n)",
          },
          {
            text: "Which of these is an advantage of using a linked list over an array?",
            options: ["Faster lookups", "Efficient insertion and deletion", "Fixed size memory allocation"],
            correctAnswer: "Efficient insertion and deletion",
          },
          {
            text: "What is the Big O notation for a binary search algorithm?",
            options: ["O(n)", "O(n log n)", "O(log n)"],
            correctAnswer: "O(log n)",
          },
          {
            text: "What does a callback function do in JavaScript?",
            options: ["Executes after another function finishes", "Changes the flow of control", "Returns a value from a function"],
            correctAnswer: "Executes after another function finishes",
          },
          {
            text: "What does the 'reduce()' function do in JavaScript?",
            options: ["Reduces an array to a single value", "Adds elements to an array", "Filters elements from an array"],
            correctAnswer: "Reduces an array to a single value",
          },
        ],
      },
      {
        id: "3",
        title: "Bug Buster",
        story: "A critical application is full of hidden bugs! You must debug the code before launch.",
        questions: [
          {
            text: "What tool is commonly used to debug JavaScript in the browser?",
            options: [ "alert()", "debug.log()", "console.log()"],
            correctAnswer: "console.log()",
          },
          {
            text: "Which HTTP status code indicates a 'Not Found' error?",
            options: ["200", "404", "500"],
            correctAnswer: "404",
          },
          {
            text: "What is the purpose of the 'console.error()' method?",
            options: ["Logs error messages", "Logs general information", "Logs warnings"],
            correctAnswer: "Logs error messages",
          },
          {
            text: "What is the most efficient way to find a bug in your code?",
            options: ["Use console.log()", "Re-write the entire code", "Use a debugger"],
            correctAnswer: "Use a debugger",
          },
          {
            text: "Which keyword is used to define a function in JavaScript?",
            options: ["function", "def", "fn"],
            correctAnswer: "function",
          },
          {
            text: "How do you handle asynchronous operations in JavaScript?",
            options: ["Using callbacks", "Using promises", "Both of the above"],
            correctAnswer: "Both of the above",
          },
          {
            text: "What does the 'finally' block do in a try-catch statement?",
            options: ["Executes code regardless of any errors", "Only executes when an error occurs", "Executes only if the try block executes successfully"],
            correctAnswer: "Executes code regardless of any errors",
          },
          {
            text: "What is the correct syntax for a ternary operator?",
            options: ["condition ? expr1 : expr2", "if (condition) expr1 else expr2", "if condition expr1 else expr2"],
            correctAnswer: "condition ? expr1 : expr2",
          },
          {
            text: "What would you use to handle 404 errors in an Express.js app?",
            options: ["res.send()", "res.status(404).send()", "throw new Error()"],
            correctAnswer: "res.status(404).send()",
          },
          {
            text: "What is the most effective method for preventing SQL injection attacks?",
            options: ["Validating user input", "Encrypting all data", "Using raw SQL queries"],
            correctAnswer: "Validating user input",
          },
        ],
      },
      {
        id: "4",
        title: "Code Quest",
        story: "You've entered a mysterious coding tournament. Solve the challenges to claim victory!",
        questions: [
          {
            text: "Which data structure follows the First In, First Out (FIFO) principle?",
            options: ["Stack", "Queue", "Linked List"],
            correctAnswer: "Queue",
          },
          {
            text: "Which sorting algorithm has an average time complexity of O(n log n)?",
            options: ["Bubble Sort", "Quick Sort", "Insertion Sort"],
            correctAnswer: "Quick Sort",
          },
          {
            text: "In which situation would you use a stack data structure?",
            options: ["To manage undo/redo operations", "To store objects in random order", "To manage a queue of customers"],
            correctAnswer: "To manage undo/redo operations",
          },
          {
            text: "What does the 'map()' function do in JavaScript?",
            options: ["Loops through an array", "Creates a new array by modifying each element", "Sorts an array"],
            correctAnswer: "Creates a new array by modifying each element",
          },
          {
            text: "Which of these methods is used to combine two arrays in JavaScript?",
            options: ["concat()", "merge()", "join()"],
            correctAnswer: "concat()",
          },
          {
            text: "What is the time complexity of the Quick Sort algorithm in the average case?",
            options: ["O(n^2)", "O(n log n)", "O(n)"],
            correctAnswer: "O(n log n)",
          },
          {
            text: "Which of these is an advantage of using a linked list over an array?",
            options: ["Efficient insertion and deletion", "Faster lookups", "Fixed size memory allocation"],
            correctAnswer: "Efficient insertion and deletion",
          },
          {
            text: "What is the Big O notation for a binary search algorithm?",
            options: ["O(n)", "O(log n)", "O(n log n)"],
            correctAnswer: "O(log n)",
          },
          {
            text: "What does a callback function do in JavaScript?",
            options: ["Executes after another function finishes", "Changes the flow of control", "Returns a value from a function"],
            correctAnswer: "Executes after another function finishes",
          },
          {
            text: "What does the 'reduce()' function do in JavaScript?",
            options: ["Reduces an array to a single value", "Adds elements to an array", "Filters elements from an array"],
            correctAnswer: "Reduces an array to a single value",
          },
        ],
      },
      {
        id: "5",
        title: "Ctrl+Alt+Defeat",
        story: "A rogue developer left behind a cursed infinite loop. Find and fix the issue before it consumes all system memory!",
        questions: [
          {
            text: "What condition would cause an infinite loop in a for-loop?",
            options: [
              "for (let i = 0; i < 10; i++)",
              "for (let i = 0; i > 0; i--)",
              "for (let i = 0; i < 10; i--)",
            ],
            correctAnswer: "for (let i = 0; i < 10; i--)",
          },
          {
            text: "Which statement is used to exit a loop in JavaScript?",
            options: ["break", "exit", "stop"],
            correctAnswer: "break",
          },
          {
            text: "What happens when a JavaScript loop has no terminating condition?",
            options: ["The program exits immediately", "It causes an infinite loop", "The program hangs but eventually continues"],
            correctAnswer: "It causes an infinite loop",
          },
          {
            text: "Which loop runs through all elements in an array in JavaScript?",
            options: ["for", "forEach", "while"],
            correctAnswer: "forEach",
          },
          {
            text: "What is the purpose of the 'continue' statement in JavaScript?",
            options: ["Stops the loop entirely", "Skips the current iteration of the loop", "Pauses the loop for a moment"],
            correctAnswer: "Skips the current iteration of the loop",
          },
          {
            text: "What will happen if you call 'return' inside a for-loop?",
            options: ["Stops the loop and return from the function", "It will break the loop", "It will continue the loop"],
            correctAnswer: "Stops the loop and return from the function",
          },
          {
            text: "Which loop would be best to iterate over an array in reverse order?",
            options: ["for", "forEach", "while"],
            correctAnswer: "for",
          },
          {
            text: "What will happen if a loop keeps running indefinitely in a browser?",
            options: ["The browser will crash", "The page will reload", "The browser will freeze"],
            correctAnswer: "The browser will freeze",
          },
          {
            text: "What does 'setInterval()' do in JavaScript?",
            options: ["Executes a function repeatedly at specified intervals", "Executes a function once after a delay", "Pauses a function for a set time"],
            correctAnswer: "Executes a function repeatedly at specified intervals",
          },
          {
            text: "What is the correct way to check if an array is empty in JavaScript?",
            options: ["array.length == 0", "array == null", "array.isEmpty()"],
            correctAnswer: "array.length == 0",
          },
        ],
      },
    ];
