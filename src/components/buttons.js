import React, {useContext} from 'react';
import { calciContext } from '../App';
 
function Buttons() {
    let intbtn1=[];
    let intbtn2=[];

    let context=useContext(calciContext); 
    console.log(context.symbol);
    
    
         
    for(let i=5;i<10;i++)
    {
        intbtn1.push(i);       
    }
    for(let j=4;j>=0;j--)
    {
        intbtn2.push(j);       
    }
                     
        function entry(e){
            if(context.count===0)
           { 
               console.log(e);
            let res=(Number(context.input)*10)+e;
            context.setInput(res); 
        } 
       else{
            console.log(e);
            let res=(Number(context.input1)*10)+e;
            context.setInput1(res);  
        }   }   
        
        function operatorHandler(e){
            if(context.count===0 && e!=="=")
            {
               context.setSymbol(e)
               console.log(context.count);
               let result=context.count+1;
               context.setCount(result);
            }
            else if(context.count>0 && e!=="="){
                context.setInput(context.output);
                context.setInput1('');
                context.setSymbol(e);   
            }
            else if(e==="=")
            {
                context.setInput(context.output);
                context.setInput1('');
                context.setSymbol(''); 
            }
                                            
        }
    
    return (
        <div className='btn-wrapper'>
                <div className='all-clear'><button onClick={()=>{context.setInput('');
                                                                context.setInput1('');
                                                                context.setCount(0);
                                                                context.setSymbol('');
                                                                context.setOutput(0)}}>AC</button></div>

                <div className='operator-btn'>
                        <button onClick={()=>{operatorHandler('+')}}>+</button>
                        <button onClick={()=>{  operatorHandler('-')}}>-</button>
                        <button onClick={()=>{operatorHandler('*')}}>*</button>
                        <button onClick={()=>{operatorHandler('/')}}>/</button>
                        <button className="equal-btn"onClick={()=>{operatorHandler('=')}}>=</button>
                </div>


                <div className='numeric-btn-5-9'>
                    {
                        intbtn1.map((e,i)=>{
                                            return <button key={i} onClick={()=>{entry(e)}}>{e}</button>
                                        })
                    }
                </div>
                
                <div className='numeric-btn-4-0'>
                    {
                        intbtn2.map((e,i)=>{
                                            return <button key={i} onClick={()=>{entry(e)}}>{e}</button>
                                        })
                    }  
                </div>
        </div>
    )
}

export default Buttons;
