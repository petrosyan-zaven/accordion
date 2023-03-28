import React, { Component } from 'react';

class Buttons extends Component {
  constructor(props) {
    super(props);
    this.button = Math.ceil(this.props.length / this.props.count);
    this.arr = Array.from({ length: this.button }, (_, index) => index + 1);
  }

  handleClick(page) {
    this.props.getPage(page);
  }

  render() {
    return (
      this.arr.map((el, index) => {
        return (
          <button key={index} onClick={this.handleClick.bind(this, el)} value={el}>{el}ooo</button>
        )
      })
    );
  }
}

export default Buttons;
