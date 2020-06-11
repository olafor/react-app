import React from 'react';
import './App.css';
import SetList from './components/task-list'
import TaskInput from './components/task-input'

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {allTasks: []};
        this.getNewTask = this.getNewTask.bind(this);
        this.updateTask = this.updateTask.bind(this);
    }

    getNewTask(newTask) {
        let task = {"description": newTask,
        "statusColor": "black", "id": Math.random()};
        console.log("new task: ", task);
        this.setState({
            allTasks: [...this.state.allTasks, task]
        });
        console.log("all tasks: ", this.state.allTasks);
    }

    updateTask(taskID) {
        let index = this.state.allTasks.findIndex((task) => {
            return task.id === taskID;
        });
        console.log("index: ", index);

        if (this.state.allTasks[index].statusColor === "black") {
            let temp = this.state.allTasks;
            temp[index].statusColor = "green";
            console.log("temp: ", temp);
            this.setState({allTasks: temp});
        }
        else if (this.state.allTasks[index].statusColor === "green") {
            let temp = this.state.allTasks;
            temp[index].statusColor = "red";
            console.log("temp: ", temp);
            this.setState({allTasks: temp});
        }
        else {
            if (index > -1) {
                let temp = this.state.allTasks;
                if (index > -1) {
                    temp.splice(index, 1);
                    this.setState({allTasks: temp});
                }
              }
        }
    }

    render () {
        return(
            <div>
                <TaskInput newTask={this.getNewTask}/>
                <SetList tasks={this.state.allTasks}
                update={this.updateTask}/>
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
