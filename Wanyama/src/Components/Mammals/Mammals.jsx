import React from 'react';
import './Mammals.css'


function Mammals(){
   return (
    
       <div className="mammals-container">
            <img src= "src/Components/Assets/mammals.jpeg" />
            <div className='overview'>
            <h1>Mammals</h1>
            <a href='https://kids.nationalgeographic.com/animals/birds' >
                Learn More 
            </a>
        </div>
       </div>
   );
}

export default Mammals;