import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { v4 } from 'uuid';
import SetTask from './task-list';
import TaskInput from './task-input';

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
    <Grid container justify="center" spacing={10} style={{ padding: '20px' }}>
      <Grid item>
        <TaskInput newTask={getNewTask} />
        <ol align="right">
          {tasks.map((task) => (
            <SetTask key={task.id} task={task} update={updateFromTask} />
          ))}
        </ol>
      </Grid>
    </Grid>
  );
};

export default TodoList;
