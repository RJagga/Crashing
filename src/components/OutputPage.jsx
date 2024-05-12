import React from 'react';

const OutputPage = ({ outputData1, outputData2 }) => {
  return (
    <div>
      <h2>Output 1</h2>
      <p>{outputData1}</p>
      <h2>Output 2</h2>
      <p>{outputData2}</p>
    </div>
  );
};

export default OutputPage;
