import React from "react";

const FeedbackOptions = ({ options, LeaveFeedbacks }) => {
  return (
    <div className="first-wrap">
      {options.map((option, index) => (
        <button key={index} onClick={() => LeaveFeedbacks[index](prevValue => prevValue + 1)}>
          {option}
        </button>
      ))}
    </div>
  );
};

export default FeedbackOptions;