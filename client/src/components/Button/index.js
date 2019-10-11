import React from 'react';

function Button(props) {
    return (
      <button className="Button" onClick={props.handleClick}>
        {props.label}
      </button>
    );
  }

export default Button
  