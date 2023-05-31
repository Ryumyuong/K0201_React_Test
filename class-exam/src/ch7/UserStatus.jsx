import React, { useState, useEffect } from 'react';

const UserStatus = (props) => {
  const [isOnline, setIsOnline] = useState(null);

  function handleStatusChange(status) {
    setIsOnline(status, isOnline);
  }

  const exFunc2 = () => {
    // ServerAPI.subscribeUserStatus(props.id, handleStatusChange);
    return () => {
        // 언마운트와 같은 효과
    //   ServerAPI.unsubscribeUserStatus(props.id, handleStatusChange);
    };
  };
  useEffect(exFunc2);

  if (isOnline === null) {
    return '대기 중...';
  }
  return isOnline ? '온라인' : '오프라인';
};

export default UserStatus;
