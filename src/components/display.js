import React,{useContext}from 'react'
import { calciContext } from '../App'
function Display() {
    let res=0;
    let context=useContext(calciContext);
    if(context.symbol==='+')
    {
         res= context.input+context.input1;
         context.setOutput(res);
    }
    else if(context.symbol==='-')
    {
         res= context.input-context.input1;
         context.setOutput(res);
    }
    else if(context.symbol==='*')
    {
         res= context.input*context.input1;
         context.setOutput(res);
    }
    else if(context.symbol==='/')
    {
         res= context.input/context.input1;
         context.setOutput(res);
    }
    
    return (
        <div className='display'>

           <span className='output-display'>({context.output})</span><span className='input-display'>{context.input}{ context.symbol}{ context.input1}</span>

        </div>
    )
}

export default Display
