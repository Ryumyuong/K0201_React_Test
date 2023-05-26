import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ConfirmDialog from './ch4/ConfirmDialog';
import Tick from './ch4_exam/Tick';
import WeekendSchedule from './ch4_exam/WeekendSchedule';
import MyTest1 from './ch4_exam/MyTest1';
import CommentList from './ch5/CommentList';

ReactDOM.render(
  <React.StrictMode>
    <CommentList/>
  </React.StrictMode>,
  document.getElementById('root')
);

// setInterval(콜백함수, 시간(ms)) -> 특정 시간마다 첫번째 매개변수에서 정의한 함수가 실행
// setInterval( () => {
//   ReactDOM.render(
//     <React.StrictMode>
//       {/* <Tick />
//       <WeekendSchedule sat="잠자기" sun="쉬기" /> */}
//       {/* <MyTest1 number={7} >
//         children 영역입니다.
//       </MyTest1> */}
//       <Co
//     </React.StrictMode>,
//   document.getElementById('root')
//   );
// }, 1000);
  


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
