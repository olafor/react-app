import React, {useState, useEffect} from 'react';
import {v4} from 'uuid'
import './App.css';
import SetList from './components/task-list';
import TaskInput from './components/task-input';

const TodoList = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        document.title = `${tasks.length} tasks`;
    });

    const getNewTask = (newTask) => {
        let task = {"description": newTask, "isDone": false, "id": v4()};
        setTasks(tasks => [...tasks, task]);
    }

    const updateFromTask = (taskID) => {
        let index = tasks.findIndex((task) => {
            return task.id === taskID;
        });

        let temp = tasks;

        if (index > -1) {
            if (tasks[index].isDone) {
                temp.splice(index,1);
            }
            else {
                temp[index].isDone = true;
            }
        }
        setTasks(temp => [...temp]);
    }

    return(
        <div>
            <TaskInput newTask={getNewTask}/>
            <SetList tasks={tasks}
            update={updateFromTask} />
        </div>
    );
}

const App = () => {
  return (
    <div>
    <header style={{
        fontWeight: 'bold',
        color: 'black',
        fontFamily: "Times New Roman"}}>
            Plan your day!
    </header>
        <TodoList/>
    </div>
  );
}

export default App;
