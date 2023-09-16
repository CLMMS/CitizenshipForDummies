// InteractiveBox.js
import React from 'react';

const InteractiveBox = ({ title, content }) => {
  return (
    <div className="interactive-box">
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default InteractiveBox;
