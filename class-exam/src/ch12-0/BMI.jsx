import React, { useState } from 'react';
import BMIInput from './BMIInput';

const BoilMessage = (props) => {
  if (toBMI >= 25) {
    return <p>비만</p>;
  } else if(toBMI >= 23)
  return <p>과체중</p>;
};

const toBMI = (height, weight) => {
    const hei = height/100
  return weight/hei*hei
};

const BMI = () => {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);

  const handleHeightChange = (height) => {
    setHeight(height);
  };

  const handleWeightChange = (weight) => {
    setWeight(weight);
  };

  return (
    <div>
      <BMIInput scale="height" bmi={height} onTempChange={handleHeightChange} />
      <BMIInput scale="weight" bmi={weight} onTempChange={handleWeightChange} />
      <BoilMessage celsius={celsius} />
    </div>
  );
};

export default BMI;
