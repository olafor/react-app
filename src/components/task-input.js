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
    <div style={{ paddingLeft: '20px', paddingTop: '20px' }}>
      <form>
        <TextField
          style={{
            width: '400px',
            marginTop: 0,
            backgroundColor: 'white',
          }}
          type="text"
          variant="outlined"
          size="large"
          color="primary"
          label="Enter a task..."
          value={textField}
          onChange={handleChange}
          onClick={handleSubmit}
        />
        <Button
          variant="contained"
          color="secondary"
          type="submit"
          onClick={handleSubmit}
        >
          Add Task
        </Button>
      </form>
    </div>
  );
};

export default TaskInput;
