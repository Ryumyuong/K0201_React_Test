import React from 'react';
import TestContext from './TestContext';
import TestContext2 from './TestContext2';
import TestUser from './TestUser';

const Main = () => {
  return (
    <TestContext.Provider value="30">
      <TestContext2.Provider value="이상용">
        <div>
          <TestUser />
        </div>
      </TestContext2.Provider>
    </TestContext.Provider>
  );
};

export default Main;
