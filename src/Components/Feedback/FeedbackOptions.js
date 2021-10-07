import React from 'react';
import PropTypes from 'prop-types';
import s from './Feedback.module.css';
const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      <ul className={s.list}>
        {options.map(option => (
          <li key={option}>
            <button onClick={onLeaveFeedback} name={option}>
              {option}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
