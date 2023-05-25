import React from 'react';

// 함수형식
function Book(props) {
  return (
    //jsx 문법
    <div>
      <h1>{`책 이름: ${props.name}입니다.`}</h1>
      <h2>{`총 페이지: ${props.numOfPage}`}</h2>
    </div>
  );
}
export default Book;
