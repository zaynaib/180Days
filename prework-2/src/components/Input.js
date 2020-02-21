import React from "react";
import "./Input.css";
import fonts from "../data.json";
import Card from "./Card"
import Main from "./Main"
class Input extends React.Component{

    constructor(props) {
        super(props);
    
        // This binding is necessary to make `this` work in the callback
        this.handleChange = this.handleChange.bind(this);
        this.handleSizeOfFont = this.handleSizeOfFont.bind(this);
      }
    
     


    handleChange(event){
     this.props.onTemperatureChange(event.target.value);

    }

    handleSizeOfFont(event){
      this.props.onFontSize(event.target.value)
    }
    render(){
      const temperature = this.props.temperature;
      const size = this.props.size;

        return(
            
        <div>
        <div className="InputBar">

          
            <input type="text" className="InputBar__searchFont" ></input>
            <input type="text" className="InputBar__previewFont" value={temperature} onChange={this.handleChange} ></input>
             <input type="number" className="InputBar__sizeFont" value={size} onChange={this.handleSizeOfFont}></input>
             <button onClick={this.handleClick}>dark mode</button>
             <button>light mode</button>
             <button>list mode</button>
             <button>reset</button>

        </div>

    

        </div>
        )
    }
}

export default Input;