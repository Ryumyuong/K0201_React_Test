import React from 'react';

const sNames = {
    height: '키',
    weight: '몸무게',
  };

const BMIInput = (props) => {
    const handleChange = (event) => {
        props.onTempChange(event.target.value)
      };
      return (
        <fieldset>
          <legend>{sNames[props.scale]}를 입력하세요.</legend>
          <input value={props.bmi} onChange={handleChange} />
        </fieldset>
      );
};

export default BMIInput;