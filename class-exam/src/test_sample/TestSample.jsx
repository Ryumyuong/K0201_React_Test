import React, { useState } from 'react';

const TestSample = () => {
  const [names, setNames] = useState([
    { id: 1, text: '류명조1' },
    { id: 2, text: '류명조2' },
    { id: 3, text: '류명조3' },
    { id: 4, text: '류명조4' },
  ]);

  const [inputText, setInputText] = useState('');
  const [nextId, setNextId] = useState(5);

  const onChange = (e) => setInputText(e.target.value);

  const nameList = names.map(name => <li key={name.id}>{name.text}</li>)
  return <>
    <input value={inputText} onChange={onChange}/>
    <button>추가</button>
    <ul>{nameList}</ul>
  </>;
};

export default TestSample;
