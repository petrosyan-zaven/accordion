import React, { Component } from 'react';

class Buttons extends Component {
  constructor(props) {
    super(props);
    // this.button = 26;
    // this.button = Math.ceil(this.props.length / this.props.count);
    // this.arr =Array.from({ length: this.button }, (_, index) => index + 1);
    this.state = {
      button: Math.ceil(props.length / props.count),
    }
  }

  handleClick(page) {
    this.props.getPage(page);
  }

  render() {
    // console.log(this.arr);
    console.log(this.state.button);
    // console.log(this.props.length );
    console.log(this.props);
    // console.log(Math.ceil(this.props.length / this.props.count));
    return (
      this.arr?.map((el, index) => {
        return (
          <button key={index} onClick={this.handleClick.bind(this, el)} value={el}>{el}</button>
        )
      })
    );
  }
}

export default Buttons;
