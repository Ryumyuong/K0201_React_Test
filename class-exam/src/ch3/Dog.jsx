import React from 'react';

function Dog(props) {
  return (
    <div>
      <h1>{`강아지의 이름:${props.name}입니다.`}</h1>
      <h2>{`강이지의 나이:${props.age}입니다.`}</h2>
    </div>
  );
}
export default Dog;
