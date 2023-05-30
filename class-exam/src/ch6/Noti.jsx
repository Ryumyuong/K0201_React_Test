import React, { Component } from 'react';

const styles = {
  wrapper: {
    margin: 8,
    padding: 8,
    display: 'flex',
    // flex 기본 옵션은 row - 가로 방향 배치
    flexDirection: 'row',
    border: '1px solid gray',
    // 리액트 jsx요소에서는 border-radius대신 borderRadius로 사용한다.
    borderRadius: 16,
  },

  messageText: {
    color: 'green',
    fontSize: 28,
  },
};

class Noti extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    console.log("componentDidMount() 호출이 되었음")
  }
  componentDidUpdate() {
    console.log("componentDidUpdate() 호출이 되었음")
  }
  componentWillUnmount() {
    console.log("componentWillUnmount() 호출이 되었음")
  }

  render() {
    return (
      <div style={styles.wrapper}>
        <span style={styles.messageText}>{this.props.message}</span>
      </div>
    );
  }
}

export default Noti;
