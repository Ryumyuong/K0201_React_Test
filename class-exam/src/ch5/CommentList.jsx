import React from 'react';
import Comment from './Comment';

const CommentList = (props) => {
  return (
    <div>
      <Comment name="류명조1" comment="test 컴포넌트1" />
      <Comment name="류명조2" comment="test 컴포넌트2" />
    </div>
  );
};

export default CommentList;
