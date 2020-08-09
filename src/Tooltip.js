import React from 'react';
import InputComp from './InputComp';


class Tooltip extends React.Component{

    constructor(){
        super();
        this.state = {
            position: "displayNoneClass"
        }
    }
    //change state on selecting any position
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
            {/* Title  */}
            <div className="title-design">
                <h1>Select the position of tooltip text</h1>
            </div>
            
            {/* Input Component to select position */}
            <InputComp
            setPositionLeft={this.setPositionLeft}
            setPositionRight={this.setPositionRight}
            setPositionTop={this.setPositionTop}
            setPositionBottom={this.setPositionBottom}
            />
            
            {/* button and tooltip design */}
            <div className="tooltip-main-container">
               <button>Hover Over Me</button>
               <div className= {this.state.position}>
                <p>
                    {/* Toop tip text here */}
                    Hello There!
                </p>
               </div>
            </div>
            
         </div>
        );
    }
}

export default Tooltip;
