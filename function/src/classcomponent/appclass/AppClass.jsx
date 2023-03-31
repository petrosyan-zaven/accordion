import React, { Component } from 'react'
import Acordion from '../accordionclass/Acordion'
import Buttonclass from '../buttonclass/Buttonclass'

export class AppClass extends Component {
    constructor(props) {
        super(props)
        this.state = {data:[], page:1}
    }

    getPage = (page) => {
        this.setState(() => {return  {page}})
    }

    componentDidMount() {
        fetch('https://countriesnow.space/api/v0.1/countries/capital')

        .then(response=> response.json())
        .then(result => this.setState(state => { return {data:result.data}}))
      }
    
  render() {
    const data = this.state.data;
    const length = data.length;
    const count = 10;
    const start = (this.state.page - 1) * count;
    const end = start + count;
    const dataArray = data.slice(start, end);
    return (
      <div>
        <h1>Class component</h1>
        {
            dataArray.map((item, index) => {
                return <Acordion key={index} item={item} />
            })
        }
        <div className="buttons"><Buttonclass length={length} count={count} getPage={this.getPage} /></div>
      </div>
    )
  }

}
export default AppClass
