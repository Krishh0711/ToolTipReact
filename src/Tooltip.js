import React from 'react';
import InputComp from './InputComp';


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
            
            <InputComp
            setPositionLeft={this.setPositionLeft}
            setPositionRight={this.setPositionRight}
            setPositionTop={this.setPositionTop}
            setPositionBottom={this.setPositionBottom}
            />

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
