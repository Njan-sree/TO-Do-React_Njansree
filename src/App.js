import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [timeValue, setTimeValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleTimeChange = (e) => {
    setTimeValue(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== '') {
      setTodos([...todos, { text: inputValue, time: timeValue, completed: false }]);
      setInputValue('');
      setTimeValue('');
    } else {
      alert('Please type something!');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddTodo();
    }
  };

  const handleDeleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const handleToggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const sortedTodos = [...todos].sort((a, b) => a.time.localeCompare(b.time));

  return (
    <div className="outer">
      <h1>ToDo App</h1>
      <div className="border">
        <div className="typing">
          <input
            type="text"
            placeholder="Add Task"
            value={inputValue}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
          />
          <input
            type="time"
            value={timeValue}
            onChange={handleTimeChange}
          />
          <button onClick={handleAddTodo}>
            <i className="fa-solid fa-plus"></i>
          </button>
        </div>
        <div className="list">
          {sortedTodos.map((todo, index) => (
            <div
              key={index}
              className={`todo-item ${todo.completed ? 'completed' : ''}`}
            >
              <span>{todo.time}</span>
              <span>{todo.text}</span>
              <div className="actions">
                <button onClick={() => handleToggleTodo(index)}>
                  <i className="fa-solid fa-check check"></i>
                </button>
                <button onClick={() => handleDeleteTodo(index)}>
                  <i className="fa-solid fa-x"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
