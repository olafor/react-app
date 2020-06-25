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
    function handleChange(event) {
        event.preventDefault();
        props.update(props.task.id);
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
            </del></li>
        )}
    else {
        return (
            <li key={props.task.id}
            style={{color: 'black',
            fontFamily: "Courier",
            fontWeight: "bold",
            padding: "10px"}}
            onClick={handleChange}>
            {props.task.description}
            </li>
        )}
}

export default SetList;

