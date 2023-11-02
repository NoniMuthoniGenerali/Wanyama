import React from 'react';
import './Reptiles.css'


function Reptiles(){
   return (
    
       <div className="reptiles-container">
            <img src= "src/Components/Assets/Reptiles.jpeg" />
            <div className='overview'>
            <h1>Reptiles</h1>
            <a href='https://kids.nationalgeographic.com/animals/birds' >
                Learn More 
            </a>
        </div>
       </div>
   );
}

export default Reptiles;