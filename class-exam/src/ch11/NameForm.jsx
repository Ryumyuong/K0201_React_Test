import React, { useState } from 'react';

const NameForm = (props) => {
  const [value, setValue] = useState('');

  const [textAreaValue, setTextAreaValue] = useState('');

  const [selectValue, setSelectValue] = useState("닭칼국수")

  const handleChange = (event) => {
    // setValue(event.target.value);
    // setTextAreaValue(event.target.value);
    setSelectValue(event.target.value);
    // 대문자만
    // setValue(event.target.value.toUpperCase());
    // 소문자만
    // setValue(event.target.value.toLowerCase());
    // 입력할때마다 띄우기
    //  alert('입력한 이름 : ' + textAreaValue)
  };

  const handleSubmit = (event) => {
    alert('선택한 메뉴는 : ' + selectValue);
    // 자바스크립트 기본로직 - submit = 제출
    // preventDefault() - 기본 로직을 못하게 방지
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
         이름 : 
         <input type="text" value={value} onChange={handleChange} />
      </label><br/>
      <label>
        점심메뉴 고르기
        <select multiple={true} value={selectValue} onChange={handleChange}>
            <option value="KoreanFood1">돼지국밥</option>
            <option value="KoreanFood2">닭칼국수</option>
            <option value="KoreanFood3">두루치기</option>
            <option value="KoreanFood4">닭야채볶음밥</option>
            <option value="KoreanFood5">삼선우동</option>
        </select>
      </label><br/>
      <label>
        댓글 :
        <textarea value={textAreaValue} onChange={handleChange} />
      </label>
      
      <button type="submit">제출</button>
    </form>
  );
};

export default NameForm;
