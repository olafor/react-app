import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';

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
    <form>
      <TextField
        type="text"
        label="Enter a task..."
        value={textField}
        onChange={handleChange}
        onClick={handleSubmit}
      />
      <Button
        variant="contained"
        color="primary"
        type="submit"
        onClick={handleSubmit}
      >
        Add Task
      </Button>
    </form>
  );
};

export default TaskInput;
