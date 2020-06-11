import React from 'react';
import './App.css';
import SetList from './components/task-list'
import TaskInput from './components/task-input'

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {allTasks: []};
        this.getNewTask = this.getNewTask.bind(this);
    }

    getNewTask(newTask) {
        let task = {"description": newTask, "status": "todo", "id": Math.random()};
        console.log("new task: ", task);
        this.setState({
            allTasks: [...this.state.allTasks, task]
        });
        console.log("all tasks: ", this.state.allTasks);
    }

    render () {
        return(
            <div>
                <TaskInput newTask={this.getNewTask}/>
                <SetList tasks={this.state.allTasks}/>
            </div>
        );
    }
}

function App() {
  return (
    <TodoList/>
  );
}

export default App;
