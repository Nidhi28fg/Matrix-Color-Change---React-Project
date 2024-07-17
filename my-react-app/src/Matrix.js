// src/Matrix.js
import React, { useState } from 'react';
import './Matrix.css';

const Matrix = () => {
  const [matrix, setMatrix] = useState(Array(9).fill('white'));
  const [clickSequence, setClickSequence] = useState([]);

  const handleBoxClick = (index) => {
    if (matrix[index] === 'white') {
      const newMatrix = [...matrix];
      newMatrix[index] = 'green';
      setMatrix(newMatrix);
      setClickSequence([...clickSequence, index]);
    }

    if (clickSequence.length === 8) {
      changeAllToOrange();
    }
  };

  const changeAllToOrange = () => {
    const newMatrix = [...matrix];
    clickSequence.forEach((index, i) => {
      setTimeout(() => {
        newMatrix[index] = 'orange';
        setMatrix([...newMatrix]);
      }, i * 500);
    });
  };

  return (
    <div className="matrix">
      {matrix.map((color, index) => (
        <div
          key={index}
          className="box"
          style={{ backgroundColor: color }}
          onClick={() => handleBoxClick(index)}
        ></div>
      ))}
    </div>
  );
};

export default Matrix;
