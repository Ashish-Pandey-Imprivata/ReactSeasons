import React from 'react';
import './SeasonDisplay.css';

const ErrorDisplay = props => {
  return (
    <div class="season-display">
      <div className="ui negative message">
        <i className="close icon" />
        <div className="header">Oh snap...</div>
        <p>{props.errorMessage}</p>
      </div>
    </div>
  );
};

export default ErrorDisplay;
