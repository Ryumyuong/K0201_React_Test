import React, { useState } from 'react';

const NameForm = (props) => {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
    // alert('입력한 이름 : ' + value)
  };

  const handleSubmit = (event) => {
    alert('입력한 이름 : ' + value);
    // 자바스크립트 기본로직 - submit = 제출
    // preventDefault() - 기본 로직을 못하게 방지
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        이름 :
        <input type="text" value={value} onChange={handleChange} />
      </label>
      <button type="submit">제출</button>
    </form>
  );
};

export default NameForm;
