import React, { Component } from 'react';
import MenuItem from './MenuItem';

const reserveNoti = [
    {id:1, menu: "돈가스"},
    {id:2, menu: "햄버거"},
    {id:3, menu: "자장면"},
    {id:4, menu: "국밥"}
]

var timer

class MenuItemList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      noti: [],
    };
  }

  componentDidMount() {
    const { noti } = this.state;

    timer = setInterval(() => {
      if (noti.length < reserveNoti.length) {
        const index = noti.length;
        noti.push(reserveNoti[index]);
        this.setState({
          noti: noti,
        });
      } else {
        clearInterval(timer)
        // this.setState({
        //   noti: [],
        // });
      }
    }, 1000);
  }

  render() {
    return (
      <div>
        {this.state.noti.map((noti) => {
          return <MenuItem key={noti.id} id={noti.id} menu={noti.menu} />;
        })}
      </div>
    );
  }
}

export default MenuItemList;