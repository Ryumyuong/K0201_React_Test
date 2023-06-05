import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Test2 from './ch15-0/Test2';
import ItemList from './ch17-pdtest/ItemList';
import Categories from './ch17-pdtest/Categories';
import App from './App';

// const[category, setCategory] = useState('food')
// const onSelect = useCallback(category => setCategory(category),[])

// 생성주기를 테스트 하는 코드에서 React.StrictMode를 제거하고 실행하는게 가독성 면에서 좋다.
ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <ItemList /> */}
    {/* <Categories category={category} onSelect={onSelect}/>
    <ItemList category={category} /> */}
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
