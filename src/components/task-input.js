import React from 'react';

class TaskInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit= this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        if (this.state.value.length > 0) {
            this.props.newTask(this.state.value);
            this.setState({value: ''});
        }
    }

    render() {
        return (
            <form>
                <input
                    type="text"
                    placeholder="Enter a task..."
                    value={this.state.value}
                    onChange={this.handleChange}
                    onClick={this.handleSubmit}/>
                <button onClick={this.handleSubmit}>
                    Add Task
                </button>
            </form>
          );
    }
}

export default TaskInput;