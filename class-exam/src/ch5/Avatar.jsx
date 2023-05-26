import React from 'react';

const Avatar = (props) => {
  return (
    <div>
      <img src={props.src} alt={props.alt} style={props.style} />
    </div>
  );
};

export default Avatar;
