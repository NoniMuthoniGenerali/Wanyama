import React from 'react';
import Birds from './Components/Birds/Birds';
import Reptiles from './Components/Reptiles/Reptiles'
import Mammals from './Components/Mammals/Mammals'
import Fish from './Components/Fish/fish'
import Amphibians from './Components/Amphibians/Amphibians'





function App(){
  return (
    <div>
          <Birds/>
          <Reptiles/>
          <Mammals/>
          <Fish/>
          <Amphibians/>
    </div>
     
  
 );
}

export default App;