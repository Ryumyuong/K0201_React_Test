import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import NameForm from './ch11/NameForm';
import TestNullValue from './ch11/TestNullValue';
import SignUp from './ch11-0/SignUp';
import Calc from './ch12/Calc';
import BMI from './ch12-0/BMI';
import WelcomeDialog from './ch13/WelcomeDialog';
import ProfileCard from './ch13-0/ProfileCard';
import Main from './ch14/Main';

// 생성주기를 테스트 하는 코드에서 React.StrictMode를 제거하고 실행하는게 가독성 면에서 좋다.
ReactDOM.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  document.getElementById('root'),
);

// input null 효과
// setTimeout(() => {
//   ReactDOM.render(<input value={null} />, document.getElementById('root'));
// }, 1000)

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
