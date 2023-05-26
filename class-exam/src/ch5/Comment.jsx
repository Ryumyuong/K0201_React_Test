import React from 'react';
import Avatar from './Avatar';
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
        <Avatar src={logo} alt="사진1" style={styles.image} />
      </div>
      <div style={styles.contentContainer}>
        <span style={styles.nameText}>{props.name}</span>
        <span style={styles.CommentText}>{props.comment}</span>
      </div>
    </div>
  );
};

export default Comment;
