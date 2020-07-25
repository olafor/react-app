import React from 'react';
import { Button, ButtonGroup, Paper } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

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
      <Paper onClick={handleChange}>
        <del>{props.task.description}</del>
        <Button color="secondary" variant="contained">
          Remove
        </Button>
      </Paper>
    );
  }

  return (
    <Grid item>
      <Paper elevation={3} variant="outlined" square>
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
        <ButtonGroup
          variant="contained"
          color="primary"
          aria-label="contained primary button group"
        >
          <Button color="primary" variant="contained" onClick={takeTime}>
            Select
          </Button>
          <Button color="secondary" variant="contained" onClick={handleChange}>
            Done
          </Button>
        </ButtonGroup>
      </Paper>
    </Grid>
  );
};

export default SetTask;
