import React from 'react';

const sNames = {
  c: '섭씨',
  f: '화씨',
};

const TestInput = (props) => {
//   const [temp, setTemp] = useState('');

  const handleChange = (event) => {
    // setTemp(event.target.value);
    props.onTempChange(event.target.value)
  };
  return (
    <fieldset>
      <legend>온도를 입력하세요.(단위:{sNames[props.scale]}):</legend>
      {/* <input value={temp} onChange={handleChange} /> */}
      <input value={props.temp} onChange={handleChange} />
    </fieldset>
  );
};

export default TestInput;
