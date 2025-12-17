import { useState } from 'react';
import './App.css';

function TodoItem({ title, dueDate, completed }) {
  const [isDone, setIsDone] = useState(completed);

  function handleClick() {
    setIsDone(!isDone);
  }

  return (
    <div
      className={`todo-item ${isDone ? 'done' : ''}`}
      onClick={handleClick}
    >
      <h3>{title}</h3>
      <p>Due Date: {dueDate}</p>
    </div>
  );
}

function App() {
  const tasks = [
    { title: 'Morning Workout', dueDate: 'Morning', completed: true },
    { title: 'Study React', dueDate: 'Afternoon', completed: false },
    { title: 'Pray', dueDate: 'Evening', completed: false }
  ];

  return (
    <div className="app">
      <h2>My Tasks</h2>
      {tasks.map((task, index) => (
        <TodoItem
          key={index}
          title={task.title}
          dueDate={task.dueDate}
          completed={task.completed}
        />
      ))}
    </div>
  );
}

export default App;
