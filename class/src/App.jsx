import React, { Component } from 'react';
import Accordion from './components/accordion/Accordion';
import Buttons from './components/buttons/Buttons';

class App extends Component {
  constructor(props) {
    super(props);
    this.URL = 'https://countriesnow.space/api/v0.1/countries/capital';
    this.state = {
      data: [],
      page: 1,
    };
    this.count = 10;
    this.start = (this.state.page - 1) * this.count;
    this.end = this.start + this.count;
  }

  componentDidMount() {
    fetch(this.URL)
      .then(result => result.json())
      .then(data => this.setState({ data: data.data }));
  }

  getPage(page) {
    this.setState({ page: page });
  }

  render() {
    const data = this.state.data;
    const length = data.length;
    const dataArray = this.state.data.slice(this.start, this.end);
    console.log(dataArray);
    console.log(this.page);
    return (
      <div className="app">
        <h1>React Accordion in class component</h1>

        {
          dataArray?.map((item, index) => {
          return <Accordion key={index} props={item} />;
          })
        }

        <div className="buttons">
          <Buttons length={length} getPage={this.getPage.bind(this)} count={this.count} />
        </div>
      </div>
    );
  }
}

export default App;

// SELECT * FROM products ORDER BY name;

// SELECT * FROM products WHERE price BETWEEN 500 AND 800;

// SELECT SUM(salary) FROM employees;