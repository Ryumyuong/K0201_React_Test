import React, { Component } from 'react';
import Noti from './Noti';

const reserveNoti = [
    {id:1, message: "메세지1"},
    {id:2, message: "메세지2"}, 
    {id:3, message: "메세지3"}
];

var timer;
class NotiList extends Component {
    constructor(props){
        super(props)
        // noti 라는 배열이 변화하면 업데이트 발생
        this.state = {
            noti : []
        }
    }
    // componentDidMount - 화면에 그려지고 호출되는 메서드
    componentDidMount() {
        const{noti} = this.state;

        timer = setInterval(() => {
            // noti라는 빈배열이 기존에 예약된 배열의 길이보다 작으면 실행
            if(noti.length < reserveNoti.length) {
                const index = noti.length;
                //noti 배열의 내장함수 push(add)로 추가
                noti.push(reserveNoti[index]);
                this.setState({ // 다시 그리기
                        noti: noti
                    });
            } else {
                //clearInterval(timer)
                //componentWillUnmount 콘솔을 띄우기 위해 빈 데이터 할당
                this.setState({
                    noti :[]
                });
            }
        }, 1000);
    }

  render() {
    return <div>
        {/* map 함수는 배열의 내장함수이고 배열의 요소를 하나씩 꺼내어서 특정 작업 수행후 새로운 배열을 생성하는 함수 */}
        {this.state.noti.map((noti) => {
            return<Noti key={noti.id} id={noti.id} message={noti.message}/>
        })}
    </div>;
  }
}


export default NotiList;
