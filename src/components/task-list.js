import React from 'react';
import { Button } from '@material-ui/core';

const SetTask = (props) => {
  const handleChange = (event) => {
    event.preventDefault();
    props.update(props.task.id);
  };

  const takeTime = (event) => {
    event.preventDefault();
  };

  if (props.task.isDone) {
    return (
      <li onClick={handleChange}>
        <del>{props.task.description}</del>
        <Button color="secondary" variant="contained">
          Remove
        </Button>
      </li>
    );
  }

  return (
    <li>
      <span
        role="presentation"
        onClick={handleChange}
        style={{ marginRight: '1.0em' }}
        onKeyPress={(event) => {
          if (event.key === 'Space') {
            handleChange();
          }
        }}
      >
        {props.task.description}
      </span>
      <Button color="primary" variant="contained" onClick={takeTime}>
        Select
      </Button>
      <Button color="secondary" variant="contained" onClick={handleChange}>
        Done
      </Button>
    </li>
  );
};

export default SetTask;
