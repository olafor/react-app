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
        this.props.newTask(this.state.value);
        this.setState({value: ''});
    }

    render() {
        return (
            <form>
                <input
                    type="text"
                    placeholder="Enter a task..."
                    value={this.state.value}
                    onChange={this.handleChange}/>
                <button onClick={this.handleSubmit}>Submit task</button>
            </form>
          );
    }
}

export default TaskInput;