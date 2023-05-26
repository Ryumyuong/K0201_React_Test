import React from 'react';
import logo from './bread2.jpg';

const styles = {
  wrapper: {
    margin: 10,
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    border: '1px solid grey',
    borderRadius: 16,
  },
  imageContainer: {},
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  contentContainer: {
    marginLeft: 10,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  nameText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  commentText: {
    color: 'black',
    fontSize: 18,
  },
};

const Comment = (props) => {
  return (
    <div style={styles.wrapper}>
      <div style={styles.imageContainer}>
        <img src={logo} style={styles.image} alt="로컬사진" />
      </div>
      <div style={styles.contentContainer}>
        <span style={styles.nameText}>{props.name}</span>
        <span style={styles.CommentText}>{props.comment}</span>
      </div>
      <h1>테스트 컴포넌트</h1>
    </div>
  );
};

export default Comment;
