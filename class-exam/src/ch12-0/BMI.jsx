import React, { useState } from 'react';
import BMIInput from './BMIInput';

const BMI = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');

  const toBMI = (height, weight) => {
    const hei = height / 100;
    return weight / (hei * hei);
  };

  const output = toBMI(height, weight);
    const rounded = Math.round(output * 100) / 100;
    const BMI = rounded.toString()

  const BMIMessage = (props) => {
    if (output >= 25) {
      return <p>BMI가 {BMI}이므로 비만</p>;
    } else if (output > 23) {
      return <p>BMI가 {BMI}이므로 과체중</p>;
    } else if (output > 18.5) {
      return <p>BMI가 {BMI}이므로 정상</p>;
    } else {
      return <p>BMI가 {BMI}이므로 저체중</p>;
    }
  };

  const handleHeightChange = (height) => {
    setHeight(height);
  };

  const handleWeightChange = (weight) => {
    setWeight(weight);
  };

  return (
    <div>
      <BMIInput scale="height" status={height} onChange={handleHeightChange} />
      <BMIInput scale="weight" status={weight} onChange={handleWeightChange} />
      <BMIMessage toBMI={BMI} />
    </div>
  );
};

export default BMI;
