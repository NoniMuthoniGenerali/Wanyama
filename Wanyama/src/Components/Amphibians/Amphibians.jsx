import React from 'react';
import './Amphibians.css'


function Amphibians(){
   return (
    
       <div className="amphibians-container">
            <img src= "src/Components/Assets/amphibians.jpeg"/>
            <div className='overview'>
            <h1>Amphibians</h1>
            <a href='https://kids.nationalgeographic.com/animals/amphibians' >
                Learn More 
            </a>
        </div>
       </div>
   );
}

export default Amphibians