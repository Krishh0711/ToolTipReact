import React from 'react';


class Tooltip extends React.Component{

    constructor(){
        super();
        this.state = {
            position: "displayNoneClass"
        }
    }

    setPositionLeft = () => {
        this.setState({
          position : "left"
        });
    }

    setPositionTop = () => {
        this.setState({
          position : "top"
        });
    }

    setPositionRight = () => {
        this.setState({
          position : "right"
        });
    }

    setPositionBottom = () => {
        this.setState({
          position : "bottom"
        });
    }





    render(){
        return(
         <div className="tooltip-container">
            <div className="title-design">
                <h1>Select the position of tooltip text</h1>
            </div>
            <div className="input-container">   
             <div>
             <input type="radio" name="position" id="left" onChange={this.setPositionLeft}/>
             <label for="left">Left</label>
             </div> 
             <div>
             <input type="radio" name="position" id="top" onChange={this.setPositionTop}/>
            <label for="top">Top</label>   
            </div>  
            <div>
            <input type="radio" name="position" id="right" onChange={this.setPositionRight}/>
            <label for="right">Right</label>    
            </div>  
            <div>
            <input type="radio" name="position" id="bottom" onChange={this.setPositionBottom}/>
            <label for="bottom">Bottom</label>    
            </div>  
            </div>
            <div className="tooltip-main-container">
               <button>Hover Over Me</button>
               <div className= {this.state.position}>
                <p>
                    Hello There!
                </p>
               </div>
            </div>
            
         </div>
        );
    }
}

export default Tooltip;
