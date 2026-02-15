📚 Library App

A clean, modern Library web application built using HTML, CSS, and JavaScript.
This app allows users to add, display, update, and remove books dynamically using object-oriented JavaScript and DOM manipulation.

This project was built as part of The Odin Project curriculum and demonstrates core frontend development concepts including state management, event handling, and dynamic UI rendering.

⸻

✨ Features
• Add new books using a modal dialog form
• Store books as objects in a structured array
• Automatically generate unique IDs using crypto.randomUUID()
• Display books as responsive cards
• Toggle read/unread status using checkbox
• Remove books from the library
• Prevent duplicate entries
• Form validation with required fields and numeric constraints
• Responsive grid layout
• Clean, modern UI design

⸻

🧠 Concepts Demonstrated

JavaScript
• Constructor functions
• Object-oriented programming
• Arrays and array methods (push, findIndex, splice)
• Event handling
• DOM manipulation
• Dynamic element creation
• State-driven UI rendering
• Form handling and validation
• Closest ancestor selection (closest())

CSS
• CSS Grid layout
• Flexbox layout
• Modal dialog styling
• Responsive design
• Hover states and interactive UI feedback
• Clean design system and color consistency

HTML
• Semantic structure
• Accessible form elements
• Dialog element (<dialog>)
• Labels and input associations

⸻

🏗 Architecture Overview

The application follows a clear separation of responsibilities:
• Data Layer
• myLibrary array stores all book objects
• Logic Layer
• addBookToLibrary() creates and stores books
• removeBook() removes books from array
• checkReadStatus() updates read status
• UI Layer
• readArrayDisplayBooks() renders UI based on current state

UI is always rebuilt from data, ensuring synchronization between state and display.

⸻

📂 Project Structure

library-app/
│
├── index.html
├── style.css
├── function.js
├── hero.png
└── README.md

⸻

🚀 How It Works 1. User clicks Add Book 2. Modal dialog opens 3. User enters book information 4. Book object is created and stored in array 5. UI re-renders dynamically 6. User can:
• Toggle read status
• Remove books

⸻

🧪 Example Book Object

{
id: "uuid",
title: "Rambo",
author: "S. Stallone",
pages: 324,
readStatus: "Read"
}

Future Improvements
• Persist data using localStorage
• Add edit book functionality
• Add animations and transitions
• Add empty state display
• Improve accessibility features

⸻

📚 What I Learned

This project strengthened my understanding of:
• JavaScript object modeling
• Dynamic DOM rendering
• Event-driven architecture
• State and UI synchronization
• Clean CSS layout systems

⸻

🌐 Live Demo

https://getcreativemalhi.github.io/library/
