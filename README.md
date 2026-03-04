# Todo CRUD Application

A simple and intuitive Todo application built with React and TypeScript, featuring full CRUD (Create, Read, Update, Delete) functionality with local storage persistence.

## Screenshots

<img width="1176" height="590" alt="image" src="https://github.com/user-attachments/assets/f94a06f7-a279-4d83-87d0-51bf50af9132" />

## Features

- ✅ Add new todos
- ✏️ Edit existing todos with inline editing
- 🗑️ Delete todos
- 💾 Persistent storage using localStorage
- 🎨 Clean and responsive UI
- 🔒 Type-safe with TypeScript

## Tech Stack

- **React** - UI library
- **TypeScript** - Type safety and better developer experience
- **React Icons** - Icon library for UI elements
- **localStorage** - Client-side data persistence

*Add screenshots of your application here*

## Project Structure
```
src/
├── components/
│   ├── TodoForm.tsx      # Form component for adding new todos
│   └── TodoList.tsx      # Main component displaying todos list
├── CSS/
│   ├── TodoForm.css      # Styles for TodoForm component
│   └── TodoList.css      # Styles for TodoList component
├── todoService.ts        # Service layer for todo operations
└── todo.ts               # TypeScript type definitions
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <your-repo-url>
cd todo-app
```

2. Install dependencies
```bash
npm install
```

3. Install required packages
```bash
npm install react-icons
```

4. Start the development server
```bash
npm run dev
```

5. Open your browser and navigate to `http://localhost:5173` (or the port shown in your terminal)

### Usage

- **Add a Todo**: Type your task in the input field and click "Add Todo"
- **Edit a Todo**: Click the edit icon next to any todo, modify the text, and save or cancel
- **Delete a Todo**: Click the delete icon to remove a todo

## 📝 License

This project is open source and available under the [MIT License](LICENSE).
