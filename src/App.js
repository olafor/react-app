import React from 'react';
import './App.css';
import SetList from './components/task-list';
import TaskInput from './components/task-input';

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
        this.setState({
            allTasks: [...this.state.allTasks, task]
        });
    }

    updateTask(taskID, time) {
        let index = this.state.allTasks.findIndex((task) => {
            return task.id === taskID;
        });

        if (index > -1) {
            if (this.state.allTasks[index].statusColor === "black") {
                let temp = this.state.allTasks;
                temp[index].statusColor = "green";
                temp.push(temp[index]);
                temp.splice(index,1);
                this.setState({allTasks: temp});
            }
            else {
                let temp = this.state.allTasks;
                temp.splice(index, 1);
                this.setState({allTasks: temp});
            }
        }
    }

    render () {
        return(
            <div>
                <TaskInput newTask={this.getNewTask}/>
                <SetList tasks={this.state.allTasks}
                update={this.updateTask} />
            </div>
        );
    }
}

function App() {
  return (
    <div>
    <header style={{
        fontWeight: 'bold', color: 'black',
        fontFamily: "Times New Roman"
        }}>Plan your day!</header>
    <TodoList/>
    </div>
  );
}

export default App;
