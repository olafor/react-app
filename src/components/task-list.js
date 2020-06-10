import React from 'react';

class GetList extends React.Component {
  render() {

    const rows = [];

    this.props.tasks.forEach((t) => {
      rows.push(
        <getTask
          task={t} />
      );
    });

    return (
      <ol>
        <li>task 1</li>
        {rows}
        <li>task 2</li>
      </ol>
    );
  }
}

class GetTask extends React.Component {
  render() {

    const name = this.props.task.name

    return (
      <li>{name}</li>
    );
  }
}

export default GetList;

