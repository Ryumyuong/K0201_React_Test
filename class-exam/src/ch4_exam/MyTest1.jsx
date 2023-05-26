// import React from 'react';
// import PropTypes from 'prop-types';

// const MyTest1 = ({ name, number, children }) => {
//   return (
//     <div>
//       이름은 : {name}입니다.
//       <br />
//       children 값 : {children}
//       <br />
//       종아하는 숫자 : {number}
//     </div>
//   );
// };

// MyTest1.defaultProps = {
//   name: '기본이름',
// };

// MyTest1.defaultProps = {
//   name: PropTypes.string,
//   number: PropTypes.number.isRequired,
// };

// export default MyTest1;
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyTest1 extends Component {
  static defaultProps = {
    name: '기본이름',
  };
  render() {
    const { name, number, children } = this.props;
    return (
      <div>
        이름은 : {name}입니다.
        <br />
        children 값 : {children}
        <br />
        종아하는 숫자 : {number}
      </div>
    );
  }
}

export default MyTest1;
