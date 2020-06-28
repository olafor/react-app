import React, {useState, useEffect} from 'react';
import './App.css';
import SetList from './components/task-list';
import TaskInput from './components/task-input';

function TodoList() {
    const [tasks, setTasks] = useState([]);
    const [keyGen, setKeyGen] = useState(0);

    useEffect(() => {
        document.title = `${tasks.length} tasks`;
    });

    function getNewTask(newTask) {
        let task = {"description": newTask, "isDone": false, "id": keyGen};
        setKeyGen(keyGen + 1);
        setTasks(tasks => [...tasks, task]);
    }

    function updateFromTask(taskID) {
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

function App() {
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
