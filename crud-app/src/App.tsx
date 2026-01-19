import {FaPen, FaClipboardList } from 'react-icons/fa';
import { TodoList } from './components/TodoList.tsx';

function App() {

  return (
    <div className="app">
      <div className="header">
        <div className="logoside">
          <FaPen />
          <h1>What To Do</h1>
          <FaClipboardList />
        </div>
      </div>
      <TodoList />
    </div>
  )
}

export default App;
