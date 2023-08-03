import React from "react";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className="first-wrap">
      {options.map((option) => (
        <button key={option} onClick={() => onLeaveFeedback(option)}>
          {option}
        </button>
      ))}
    </div>
  );
};

export default FeedbackOptions;