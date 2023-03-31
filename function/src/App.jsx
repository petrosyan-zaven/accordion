import React from 'react'
import { useState, useEffect } from 'react'
import Acordion from './components/acordion/Acordion'
import Buttons from './components/buttons/Buttons'



function App() {

  const URL = 'https://countriesnow.space/api/v0.1/countries/capital'
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const count = 10;
  const start = (page - 1 ) * count;
  const end = start + count;
  
  useEffect(() => {
    fetch(URL) 
    .then(result => result.json())
    .then(data => setData(data.data))
   
  },[])

  const length = data.length;
  
  
  function getPage (page) {
    setPage(page);
 }

 const dataArray = data.slice(start, end);
  
console.log(page);
  return (
    <div className='app'>
    <h1>React Accordion in function component</h1>
      {
        dataArray?.map((item, index) => {
          return (
            <Acordion key={index} props={item}/>
          )
        })
      }
      <div className="buttons">
          <Buttons length={length} getPage={getPage} count={count}/>
      </div>
      {/* <AppClass /> */}
    </div>
  )
}

export default App