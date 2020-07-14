import React from 'react';
// import PropTypes from 'prop-types';

const Opacity = { low: 0.6, high: 1 };

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
      <li
        style={{
          color: 'green',
          fontFamily: 'Courier',
          fontWeight: 'bold',
          padding: '10px',
        }}
        onClick={handleChange}
      >
        <del>{props.task.description}</del>
        <button
          type="button"
          style={{
            marginLeft: '1.0em',
            border: '1.5px solid black',
            borderRadius: '5px',
            backgroundColor: 'red',
            color: 'black',
            padding: '5px 8px',
            fontSize: '15px',
            opacity: '0.7',
          }}
          onMouseEnter={(event) => {
            event.target.style.opacity = Opacity.high;
          }}
          onMouseLeave={(event) => {
            event.target.style.opacity = Opacity.low;
          }}
        >
          Remove
        </button>
      </li>
    );
  }

  return (
    <li
      style={{
        color: 'black',
        fontFamily: 'Courier',
        fontWeight: 'bold',
        padding: '10px',
      }}
    >
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
      <button
        type="button"
        style={{
          marginRight: '1.0em',
          border: '1.5px so     lid black',
          borderRadius: '5px',
          backgroundColor: 'yellow',
          color: 'black',
          padding: '5px 8px',
          fontSize: '15px',
          opacity: '0.7',
        }}
        onClick={takeTime}
        onMouseEnter={(event) => {
          event.target.style.opacity = Opacity.high;
        }}
        onMouseLeave={(event) => {
          event.target.style.opacity = Opacity.low;
        }}
      >
        Select
      </button>
      <button
        type="button"
        style={{
          border: '1.5px solid black',
          borderRadius: '5px',
          backgroundColor: 'green',
          color: 'black',
          padding: '5px 8px',
          fontSize: '15px',
          opacity: '0.7',
        }}
        onClick={handleChange}
        onMouseEnter={(event) => {
          event.target.style.opacity = Opacity.high;
        }}
        onMouseLeave={(event) => {
          event.target.style.opacity = Opacity.low;
        }}
      >
        Done
      </button>
    </li>
  );
};

export default SetTask;
