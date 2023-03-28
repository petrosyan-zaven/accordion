
import React, { Component } from 'react';

class Accordion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flag: false,
    };
    this.country = this.props.props;
  }

  handleClick() {
    this.setState({ flag: !this.state.flag });
  }

  render() {
    const { name, capital } = this.country;
    return (
      <div className="main">
        <div className="accordion">
          <div className="accordion-item">
            <div className="accordion-title">
              <div className="title">{name}</div>
              <button className="plus" onClick={this.handleClick.bind(this)}>
                {this.state.flag ? '-' : '+'}
              </button>
            </div>
            <div className={this.state.flag ? 'active' : 'accordion-content'}>{capital}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Accordion;
