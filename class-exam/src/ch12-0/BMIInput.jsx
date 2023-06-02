import React from 'react';

const sNames = {
    height: '키(CM)',
    weight: '몸무게(KG)',
  };

const BMIInput = (props) => {
    const handleChange = (event) => {
        props.onChange(event.target.value)
      };
      return (
        <fieldset>
          <legend>{sNames[props.scale]}를 입력하세요.</legend>
          <input value={props.status} onChange={handleChange} />
        </fieldset>
      );
};

export default BMIInput;