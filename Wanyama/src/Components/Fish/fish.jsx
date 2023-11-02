import React from 'react';
import './Fish.css'


function Fish(){
   return (
    
       <div className="fish-container">
            <img src= "src/Components/Assets/Fish.jpeg" />
            <div className='overview'>
            <h1>Fish</h1>
            <a href='https://kids.nationalgeographic.com/animals/fish' >
                Learn More 
            </a>
        </div>
       </div>
   );
}
export default Fish;