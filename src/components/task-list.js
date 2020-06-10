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
        <li>dfgdfg</li>
        {rows}
        <li>kreudfhjukeh</li>
      </ol>
    );
  }
}

class GetTask extends React.Component {
  render() {

    const name = this.props.task.name

    return (
      <li>name</li>
    );
  }
}

export default GetList;

