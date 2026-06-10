import { useState } from 'react';

interface Todo {
  id: number;
  text: string;
}

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState('');

  const addTodo = () => {
    if (inputValue.trim()) {
      setTodos([...todos, { id: Date.now(), text: inputValue.trim() }]);
      setInputValue('');
    }
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="card">
      <h2>To-Do List</h2>
      <div className="input-group">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add a new task..."
          onKeyDown={(e) => e.key === 'Enter' && addTodo()}
        />
        <button onClick={addTodo} className="btn-primary">
          Add
        </button>
      </div>
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className="todo-item">
            <span>{todo.text}</span>
            <button onClick={() => deleteTodo(todo.id)} className="btn-danger">
              Delete
            </button>
          </li>
        ))}
        {todos.length === 0 && <p className="empty-state">No tasks yet. Add one!</p>}
      </ul>
    </div>
  );
}
