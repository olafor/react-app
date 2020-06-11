import React from 'react';

class SetList extends React.Component {
    constructor(props) {
        super(props);
        this.update = this.update.bind(this);
    }

    update(taskID, time) {
        this.props.update(taskID);
    }

    render() {

        const rowsTODO = [];
        const rowsDONE = [];

        this.props.tasks.forEach((t) => {
            if (t.statusColor === "black") {
                rowsTODO.push(
                    <SetTask task={t}
                    update={this.props.update}
                    timerToggle={this.timerToggle}/>
                );}
            else {
                rowsDONE.push(
                    <SetTask task={t}
                    update={this.props.update} />);
            }
        });

        return (
            <div>
                <ol>{rowsTODO}</ol>
                <ul>{rowsDONE}</ul>
            </div>
        );
    }
}

class SetTask extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            timerOn: true,
            timeElapsed: 0
        };
        this.handleChange = this.handleChange.bind(this);
        this.timerToggle = this.timerToggle.bind(this);
    }

    tick() {
        this.setState(state => ({
            timeElapsed: state.timeElapsed + 1
        }));
    }

    componentDidMount() {
        if (this.state.timerOn && this.props.task.statusColor === "black") {
            this.interval = setInterval(() => this.tick(), 1000);
        }
        else {
            this.setState({timeElapsed: this.props.task.timeElapsed})
        }
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    handleChange(event) {
        event.preventDefault();
        this.props.update(
            this.props.task.id,
            this.state.timeElapsed);
    }

    timerToggle() {
        this.setState({timerToggle: !this.state.timerOn})
    }

    render() {
    const task = this.props.task;

    return (
        <li key={task.id}
        style={{color: task.statusColor}}
        onClick={this.handleChange}>
          {task.description} ({this.state.timeElapsed})
        </li>
    );
  }
}

export default SetList;

