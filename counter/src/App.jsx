import { useState } from 'react'

import './App.css'

function App(){
  
 
    
       let count=0;
    function handleIncrement(){
        count++;
        console.log(count);
    }
    function handleDcrement(){
        count--;
        console.log(count);
    }
    return(
        <div>
        <button onClick={()=>{handleIncrement}}>Increment</button>
        <h1>{count}</h1>
        <button onClick={()=>{handleIncrement}}>Increment</button>
        </div>
    )
    
}


export default App
