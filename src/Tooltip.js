import React from 'react';


class Tooltip extends React.Component{

    render(){
        return(
         <div className="tooltip-container">
            <div className="title-design">
                <h1>Select the position of tooltip text</h1>
            </div>
            <div className="input-container">   
             <div>
             <input type="radio" name="position" id="left" />
             <label for="left">Left</label>
             </div> 
             <div>
             <input type="radio" name="position" id="top" />
            <label for="top">Top</label>   
            </div>  
            <div>
            <input type="radio" name="position" id="right" />
            <label for="right">Right</label>    
            </div>  
            <div>
            <input type="radio" name="position" id="bottom" />
            <label for="bottom">Bottom</label>    
            </div>  
            </div>
            <div className="tooltip-main-container">
               <button>Hover Over Me</button>
            </div>
            
         </div>
        );
    }
}

export default Tooltip;
