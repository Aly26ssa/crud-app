# Todo CRUD Application

A simple and intuitive Todo application built with React and TypeScript, featuring full CRUD (Create, Read, Update, Delete) functionality with local storage persistence.

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

## Core Components

### TodoService

A service module that handles all CRUD operations and localStorage interactions:

- `getTodos()` - Retrieves all todos from localStorage
- `addTodos(text)` - Adds a new todo
- `updateTodo(todo)` - Updates an existing todo
- `deleteTodo(id)` - Deletes a todo by ID

### TodoForm

A controlled form component for adding new todos with validation to prevent empty submissions.

### TodoList

The main component that displays all todos and handles:
- Inline editing mode with save/cancel actions
- Delete functionality
- State management for the todo list

## Installation

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

## Usage

1. **Add a Todo**: Type your task in the input field and click "Add Todo" or press Enter
2. **Edit a Todo**: Click the edit icon (✏️) next to any todo, modify the text, and click the check mark (✓) to save or cancel (✖) to discard changes
3. **Delete a Todo**: Click the delete icon (🗑️) to remove a todo

## Type Definitions

```typescript
interface TodoTypes {
  id: number;
  text: string;
  completed: boolean;
}
```

## Future Enhancements

- Add todo completion/checkbox functionality
- Implement filtering (All, Active, Completed)
- Add due dates and priorities
- Implement drag-and-drop reordering
- Add categories/tags
- Export/import functionality
- Dark mode support

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).
