import React, { useRef, useState } from 'react'
import './Calculator.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const Calculator = () => {

    const [number,setnumber]=useState(0);
    const answerref=useRef(null);
   const inputref=useRef(null);
    
    function update(method){


       if(method==="add"){
                if(Number(inputref.current.value)){
                       setnumber(number+Number(inputref.current.value));
                        }
        
       }

       else if(method==="subtract"){
                if(Number(inputref.current.value)){
                       setnumber(number-Number(inputref.current.value));
                        }
     
       }
       else if(method==="multiply"){
                if(Number(inputref.current.value)){
                       setnumber(number*Number(inputref.current.value));
                        }
       
       }
       else if(method==="divide"){
                if(Number(inputref.current.value)){
                       setnumber(number/Number(inputref.current.value));
                        }
        
       }


    }

    function Reset(method){
        if(method==="input"){
              inputref.current.value="";
        }
        else if(method==="result"){
            setnumber(0);
        }

    }
 
  return (
    <>

    <div className='outdiv'>

                                            <div className='divboard'>
                                                <p className='board' ref={answerref}>Answer is {number}</p> 
                                              
                                            </div>

                                    <div className='items'>

                                          <input type="number" className='form-control input' ref={inputref}/>
                                               <div className='buttons'>
                                                         <button className='btn btn-secondary btn1' onClick={()=>update("add")}>Add</button>
                                                             <button className='btn btn-secondary' onClick={()=>update("subtract")}>Subtract</button>
                                                               <button className='btn btn-secondary' onClick={()=>update("multiply")}>Multiply</button>
                                                               <button className='btn btn-secondary' onClick={()=>update("divide")}>Divide</button>
                                                         <button className='btn btn-secondary' onClick={()=>Reset("input")}>Reset input</button>
                                                                          <button className='btn btn-secondary' onClick={()=>Reset("result")}>Reset result</button>
                                                     </div>
                                 </div>        
                                    
                      

    </div>
   
    
    </>
  )
}

export default Calculator