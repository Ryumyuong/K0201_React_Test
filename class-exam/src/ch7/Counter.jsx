import React, { useState, useEffect } from 'react';

const Counter = (props) => {
  const [count, setCount] = useState(0);

  const exFunc = () => {document.title = `총 ${count}번 클릭했음.`}

    // 의존성 배열이 없어서 매번 업데이트
//   useEffect(exFunc);

  // 빈배열이라서 1회 호출
//   useEffect(exFunc, []);

  // 변수가 변경될 때마다 이펙트 함수가 호출
  useEffect(exFunc, [count]);

  // 의존성 배열이 없는 경우와 변수가 변경될때의 차이점
  // 배열이 없는 경우는 count변수가 변경이 안되고 p,s,부,강이 되도 exFucn가 호출
  // 3번은 변수가 변경될 때만 exFunc가 호출

  return (
    <div>
      <p>총 {count}번 클릭했음</p>
      <button onClick={() => setCount(count + 1)}>클릭</button>
    </div>
  );
};

export default Counter;
