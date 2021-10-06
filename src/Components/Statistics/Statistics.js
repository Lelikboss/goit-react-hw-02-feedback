import React from 'react';
const Statistics = ({ good, bad, neutral, total, positivePercentage }) => {
  return (
    <div>
      <ul>
        <li>good: {good}</li>
        <li>neutral: {neutral}</li>
        <li>bad: {bad}</li>
        <li>total: {total} </li>
        <li>percent: {positivePercentage}%</li>
      </ul>
    </div>
  );
};
export default Statistics;
