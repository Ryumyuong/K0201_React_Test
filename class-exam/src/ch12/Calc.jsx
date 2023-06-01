import React, { useState } from 'react';
import TestInput from './TestInput';

const BoilMessage = (props) => {
  if (props.celsius >= 100) {
    return <p>물이 끓어요</p>;
  }
  return <p>물이 끓지 않아요</p>;
};

const toCel = (fah) => {
  return ((fah - 32) * 5) / 9;
};

const toFah = (cel) => {
  return (cel * 9) / 5 + 32;
};

const tryCon = (temp, convert) => {
  const input = parseFloat(temp);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
};

const Calc = (props) => {
  const [temp, setTemp] = useState('');
  const [scale, setScale] = useState('c');

  const handleCelChange = (temp) => {
    setTemp(temp);
    setScale('c');
  };

  const handleFahChange = (temp) => {
    setTemp(temp);
    setScale('f');
  };

  const celsius = scale === 'f' ? tryCon(temp, toCel) : temp;
  const fah = scale === 'c' ? tryCon(temp, toFah) : temp;

  return (
    <div>
      <TestInput scale="c" temp={celsius} onTempChange={handleCelChange} />
      <TestInput scale="f" temp={fah} onTempChange={handleFahChange} />
      <BoilMessage celsius={celsius} />
    </div>
  );
};

export default Calc;
