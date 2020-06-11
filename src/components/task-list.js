import React from 'react';

class SetList extends React.Component {
  render() {

    const rows = [];
    this.props.tasks.forEach((t) => {
      rows.push(
        <SetTask task={t} />
      );
    });
    console.log("rows: ", rows);

    return (
        <ol>
            {rows}
        </ol>
    );
  }
}

class SetTask extends React.Component {
  render() {

    const task = this.props.task;

    return (
        <li key={task.id}>
          {task.description}
        </li>
    );
  }
}

export default SetList;

