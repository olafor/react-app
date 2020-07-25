import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const TaskInput = (props) => {
  const [textField, setTextField] = useState('');

  const handleChange = (event) => {
    setTextField(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (textField.length > 0) {
      props.newTask(textField);
      setTextField('');
    }
  };

  return (
    <AppBar position="static" color="default">
      <Toolbar>
        <form>
          <TextField
            type="text"
            variant="filled"
            color="primary"
            label="Enter a task..."
            value={textField}
            onChange={handleChange}
            onClick={handleSubmit}
          />
          <Button
            variant="contained"
            color="secundary"
            type="submit"
            onClick={handleSubmit}
          >
            Add Task
          </Button>
        </form>
      </Toolbar>
    </AppBar>
  );
};

export default TaskInput;
