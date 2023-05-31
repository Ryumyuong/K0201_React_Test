import React, { useRef } from 'react';

const TestInputTest = (props) => {
  const inputElem = useRef(null);
  const onButtonClick = () => {
    inputElem.current.focus();
  };
  return (
    <>
      <input ref={inputElem} type="text" />
      <button onClick={onButtonClick}>입력창에 포커스</button>
    </>
  );
};

export default TestInputTest;
