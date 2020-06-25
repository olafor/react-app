import React from 'react';

function SetList(props) {
    function updateFromTask(taskID) {
        props.update(taskID);
    }

    return(
        <div>
            <ol>
                {props.tasks.map((task) => {
                    return (
                        <SetTask key={task.id}
                        task={task}
                        update={updateFromTask} />
                    )})}
            </ol>
        </div>
    );
}

function SetTask(props) {

    function increaseOpacity(event) {
        event.target.style.opacity = 1;
    }

    function decreaseOpacity(event) {
        event.target.style.opacity = 0.7;
    }

    function handleChange(event) {
        event.preventDefault();
        props.update(props.task.id);
    }

    function takeTime(event) {
        event.preventDefault();
    }

    if (props.task.isDone) {
        return (
            <li
            style={{color: 'green',
            fontFamily: "Courier",
            fontWeight: "bold",
            padding: "10px"}}
            onClick={handleChange}><del>
            {props.task.description}
            </del>
            <button style={{marginLeft: '1.0em',
                border: "1.5px solid black",
                borderRadius: "2px",
                backgroundColor: "red",
                color: "black",
                padding: "5px 8px",
                fontSize: '15px',
                opacity: '0.7'}}
                onMouseEnter={increaseOpacity}
                onMouseLeave={decreaseOpacity}>
                    Remove
            </button>
            </li>
        )}
    else {
        return (
            <li style={{color: 'black',
                fontFamily: "Courier",
                fontWeight: "bold",
                padding: "10px"}}>
            <span onClick={handleChange}
                style={{marginRight: '1.0em'}}>
                {props.task.description}</span>
            <button style={{marginRight: '1.0em',
                border: "1.5px solid black",
                borderRadius: "2px",
                backgroundColor: "yellow",
                color: "black",
                padding: "5px 8px",
                fontSize: '15px',
                opacity: '0.7'}}
                onClick={takeTime}
                onMouseEnter={increaseOpacity}
                onMouseLeave={decreaseOpacity}>
                Select
            </button>
            <button style={{border: "1.5px solid black",
                borderRadius: "2px",
                backgroundColor: "green",
                color: "black",
                padding: "5px 8px",
                fontSize: '15px',
                opacity: '0.7'}}
                onClick={handleChange}
                onMouseEnter={increaseOpacity}
                onMouseLeave={decreaseOpacity}>Done</button>
            </li>
        )}
}

export default SetList;

