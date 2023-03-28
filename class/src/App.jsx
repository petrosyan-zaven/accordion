// import React, { Component } from 'react'
// import Accordion from './components/accordion/Accordion';
// import Buttons from './components/buttons/Buttons';

// export class App extends Component {

  

//   constructor(props) {
//     super(props);
//         this.state = {
//     };
//   }

//   componentDidMount() {
//       fetch('https://countriesnow.space/api/v0.1/countries/capital') 
//         .then(result => result.json())
//         .then(data => this.setState(data.data))
//   }


//   render() { 
//     const country = this.state;
//     const length = this.state.length;
//     console.log(country);
//     console.log(length);
//     //  console.log(country[0]);
//     return (
//       <div className='app'>
//         <h1>React Accordion in class component </h1>

//         {/* {
//           country?map((item, index) => {
//             return(
//               <Accordion key={index} props={item}/>
//             )
//           })
//         } */}
//       </div>
//     )
//   }
// }

// export default App

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
    const length = this.state.data.length;
    const dataArray = this.state.data.slice(this.start, this.end);
    return (
      <div className="app">
        <h1>React Accordion Demo</h1>
        {dataArray?.map((item, index) => {
          return <Accordion key={index} props={item} />;
        })}
        <div className="buttons">
          <Buttons length={length} getPage={this.getPage.bind(this)} count={this.count} />
        </div>
      </div>
    );
  }
}

export default App;
