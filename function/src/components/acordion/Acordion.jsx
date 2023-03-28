import React from 'react';
import { useState } from 'react';


const Acordion = (props) => {

  const country = props.props;


  const [ flag, setFlag ] = useState(false);

   function handleClick  () {
        setFlag(!flag)
    }

  
    
      const { name, capital } = country;
    
      return (

        <div className='main'>
          <div className="accordion">
            <div className="accordion-item">
              <div className="accordion-title">
                <div className='title'>{name}</div>
                <button className='plus' onClick={handleClick}>{flag? '-': '+'}</button>
              </div>
              <div className={flag? "active" : "accordion-content"}>{capital}</div>
            </div>
          </div>
        </div>
      );
    };


export default Acordion