import React, { useState, useEffect } from 'react';
import { v4 } from 'uuid';
import './App.css';
import SetTask from './components/task-list';
import TaskInput from './components/task-input';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    document.title = `${tasks.length} tasks`;
  });

  const getNewTask = (newTask) => {
    const task = { description: newTask, isDone: false, id: v4() };
    setTasks((unchangedTasks) => [...unchangedTasks, task]);
  };

  const updateFromTask = (taskID) => {
    const index = tasks.findIndex((task) => task.id === taskID);

    const temp = tasks;

    if (index > -1) {
      if (tasks[index].isDone) {
        temp.splice(index, 1);
      } else {
        temp[index].isDone = true;
      }
    }
    setTasks((tasksWithUpdate) => [...tasksWithUpdate]);
  };

  return (
    <div>
      <TaskInput newTask={getNewTask} />
      <ol
        style={{
          textAlign: 'left',
          paddingLeft: '30%',
          paddingRight: '30%',
        }}
      >
        {tasks.map((task) => (
          <SetTask key={task.id} task={task} update={updateFromTask} />
        ))}
      </ol>
    </div>
  );
};

const App = () => (
  <div>
    <header
      style={{
        fontWeight: 'bold',
        color: 'black',
        fontFamily: 'Times New Roman',
      }}
    >
      Plan your day!
    </header>
    <TodoList />
  </div>
);

export default App;
