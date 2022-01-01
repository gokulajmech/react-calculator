import React, { useState } from 'react';
import './App.css';
import Display from './components/display';
import Buttons from './components/buttons';
export const calciContext=React.createContext();

function App() {

  let [symbol,setSymbol]=useState('');
  let [input,setInput]=useState('');
  let [input1,setInput1]=useState('');
  let [count,setCount]=useState(0);
  let [output,setOutput]=useState(0);
  return (
    <calciContext.Provider value={{symbol,setSymbol,input,setInput,input1,setInput1,count,setCount,output,setOutput}}>
    <div className='screen'>
        <div className="App">
      
          <Display/> 
          <Buttons/>
        
        </div>
    </div>
    </calciContext.Provider>
  );
}

export default App;
