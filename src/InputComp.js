import React from 'react';


const InputComp = (props) => {

    return (
        <div className="input-container">   
        <div>
        <input type="radio" name="position" id="left" onChange={props.setPositionLeft}/>
        <label for="left">Left</label>
        </div> 
        <div>
        <input type="radio" name="position" id="top" onChange={props.setPositionTop}/>
       <label for="top">Top</label>   
       </div>  
       <div>
       <input type="radio" name="position" id="right" onChange={props.setPositionRight}/>
       <label for="right">Right</label>    
       </div>  
       <div>
       <input type="radio" name="position" id="bottom" onChange={props.setPositionBottom}/>
       <label for="bottom">Bottom</label>    
       </div>  
       </div>
    );
} 

export default InputComp;

