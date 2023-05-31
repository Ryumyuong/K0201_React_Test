import React, { useState } from 'react';

const Counter = (props) => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>총 {count}번 클릭했음</p>
      <button onClick={() => setCount(count + 1)}>클릭</button>
    </div>
  );
};

export default Counter;
