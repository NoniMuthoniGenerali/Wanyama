import React from 'react';
import './Birds.css'

function Birds(){
   return (
    
       <div className="bird-container">
            <img src= "src/Components/Assets/Birds.jpeg" />
            <div className='overview'>
            <h1>Birds</h1>
            <a href='https://kids.nationalgeographic.com/animals/birds' >
                Learn More 
            </a>
        </div>
       </div>
   );
}

export default Birds;