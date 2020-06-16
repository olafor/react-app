import React from 'react';

class SetList extends React.Component {
    constructor(props) {
        super(props);
        this.update = this.update.bind(this);
    }

    update(taskID, time) {
        this.props.update(taskID, time);
    }

    render() {

        const rowsTODO = [];
        const rowsDONE = [];

        this.props.tasks.forEach((t) => {
            if (t.statusColor === "black") {
                rowsTODO.push(
                    <SetTask task={t}
                    update={this.props.update}/>
                );
            }
            else {
                rowsDONE.push(
                    <SetTask task={t}
                    update={this.props.update} />);
            }
        });

        return (
            <div>
                <ol
                >{rowsTODO}</ol>
                <ul >{rowsDONE}</ul>
            </div>
        );
    }
}

class SetTask extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        event.preventDefault();
        this.props.update(
            this.props.task.id);
    }

    render() {
    const task = this.props.task;

    return (
        <li key={task.id}
        style={{color: task.statusColor,
        fontFamily: "Courier",
        fontWeight: "bold",
        padding: "10px"}}
        onClick={this.handleChange}>
          {task.description}
        </li>
    );
  }
}

export default SetList;

