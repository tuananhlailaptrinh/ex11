import TodoList from './components/TodoList';
import Calculator from './components/Calculator';
import SearchFilter from './components/SearchFilter';

function App() {
  return (
    <div className="app-container">
      <h1>React Components Exercise</h1>
      <div className="components-grid">
        <TodoList />
        <Calculator />
        <SearchFilter />
      </div>
    </div>
  );
}

export default App;
