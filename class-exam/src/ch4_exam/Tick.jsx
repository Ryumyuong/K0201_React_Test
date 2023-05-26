import React from 'react';
import WeekendSchedule from './WeekendSchedule';

const Tick = (props) => {
  return (
    <div>
      <h1>현재 시간 : {new Date().toLocaleTimeString()}</h1>
    </div>
  );
};

export default Tick;
