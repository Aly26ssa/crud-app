Todo CRUD Application
A simple and intuitive Todo application built with React and TypeScript, featuring full CRUD (Create, Read, Update, Delete) functionality with local storage persistence.

Screenshots

<img width="1173" height="702" alt="image" src="https://github.com/user-attachments/assets/3904db11-08ec-4498-a4e8-b05be85b78ff" />

Features

✅ Add new todos
✏️ Edit existing todos with inline editing
🗑️ Delete todos
💾 Persistent storage using localStorage
🎨 Clean and responsive UI
🔒 Type-safe with TypeScript

Tech Stack

React - UI library
TypeScript - Type safety and better developer experience
React Icons - Icon library for UI elements
localStorage - Client-side data persistence

Project Structure
src/
├── components/
│   ├── TodoForm.tsx      # Form component for adding new todos
│   └── TodoList.tsx      # Main component displaying todos list
├── CSS/
│   ├── TodoForm.css      # Styles for TodoForm component
│   └── TodoList.css      # Styles for TodoList component
├── todoService.ts        # Service layer for todo operations
└── todo.ts               # TypeScript type definitions

Getting Started
Prerequisites

Node.js (v14 or higher)
npm or yarn

Installation

Clone the repository

bashgit clone <your-repo-url>
cd todo-app

Install dependencies

bashnpm install

Install required packages

bashnpm install react-icons

Start the development server

bashnpm run dev

Open your browser and navigate to http://localhost:5173 (or the port shown in your terminal)

Usage

Add a Todo: Type your task in the input field and click "Add Todo"
Edit a Todo: Click the edit icon next to any todo, modify the text, and save or cancel
Delete a Todo: Click the delete icon to remove a todo
