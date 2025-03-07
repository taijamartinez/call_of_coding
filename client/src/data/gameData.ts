

export const gameData = [
    {
        id: "fix-broken-function",
        title: "Fix Broken Function",
        story: "A secret agency has tasked you with cracking an encrypted code to retrieve stolen data before it’s too late.",
        questions: [
          {
            text: "What is the correct syntax to declare a constant in JavaScript?",
            options: ["const x = 5;", "let x = 5;", "var x = 5;"],
            correctAnswer: "const x = 5;",
          },
          {
            text: "Which method converts JSON into a JavaScript object?",
            options: ["JSON.parse()", "JSON.stringify()", "JSON.toObject()"],
            correctAnswer: "JSON.parse()",
          },
        ],
      },
      {
        id: "bug-buster",
        title: "Bug Buster",
        story: "A critical application is full of hidden bugs! You must debug the code before launch.",
        questions: [
          {
            text: "What tool is commonly used to debug JavaScript in the browser?",
            options: ["console.log()", "alert()", "debug.log()"],
            correctAnswer: "console.log()",
          },
          {
            text: "Which HTTP status code indicates a 'Not Found' error?",
            options: ["200", "404", "500"],
            correctAnswer: "404",
          },
        ],
      },
      {
        id: "code-quest",
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
        ],
      },
      {
        id: "cursed-codebase",
        title: "Cursed Codebase Escape",
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
        ],
      },
    ];
