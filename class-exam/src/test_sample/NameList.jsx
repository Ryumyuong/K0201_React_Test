import React, { useState } from 'react';

const NameList = () => {
  const [names, setNames] = useState([
    { id: 1, name: '홍길동1', text: '햄버거' },
    { id: 2, name: '홍길동2', text: '짜장면' },
    { id: 3, name: '홍길동3', text: '닭갈비' },
    { id: 4, name: '홍길동4', text: '볶음밥' },
  ]);

  const [inputName, setInputName] = useState('');
  const [inputText, setInputText] = useState('');
  const [nextId, setNextId] = useState(5);

  const onChangeName = (e) => setInputName(e.target.value);
  const onChangeText = (e) => setInputText(e.target.value);

  const onClick = () => {
    const nextNames = names.concat({
      id: nextId,
      name: inputName,
      text: inputText,
    });
    setNextId(nextId + 1);
    setNames(nextNames);
    setInputName('');
    setInputText('');
  };

  const onRemove = (id) => {
    const nextNames = names.filter((name) => name.id !== id)
    setNames(nextNames)
  }

  const nameList = names.map((name) => (
    <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
      {name.name}<br/>
      {name.text}
      </li>    
  ))

  return (
    <>
      이름 : <input value={inputName} onChange={onChangeName} /><br/>
      메세지 : <input value={inputText} onChange={onChangeText} /><br/>
      <button onClick={onClick}>추가</button>
      <ul>
        {nameList}
      </ul>
    </>
  );
};

export default NameList;
