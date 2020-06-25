import React, {useState} from 'react';

function TaskInput(props) {
    const [textField, setTextField] = useState('');

    function handleChange(event) {
        setTextField(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (textField.length > 0) {
            props.newTask(textField);
            setTextField('');
        }
    }

    return (
        <form >
            <input style={{
                width: "30%",
                margin: "8px 0",
                border: "1px solid #ccc",
                borderRadius: "4px",
                boxSizing: "border-box",
                padding: "12px 20px"
            }}
                type="text"
                placeholder="Enter a task..."
                value={textField}
                onChange={handleChange}
                onClick={handleSubmit}/>
            <button style={
                {border: "2px solid black",
                borderRadius: "2px",
                backgroundColor: "black",
                color: "white",
                padding: "10px 15px"
                }}
                onClick={handleSubmit}>
                Add Task
            </button>
        </form>
        );
}

export default TaskInput;