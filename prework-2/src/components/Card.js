import React from "react";
import "./Card.css";





class Card extends React.Component{
    render(){
        let fontf = this.props.title;
        let fontsiz = `${this.props.size}px`;
        const divStyle ={
            fontFamily:  fontf,
            fontSize: fontsiz
             
        }

        {console.log(fontsiz)}


        return(
            <div className="Card" style={divStyle}>

                <div className="Card__metadata">
                    <p className="Card__title">
                        {this.props.title}
                    </p>

                    <p className="Card__author">
                        {this.props.author}
                    </p>
                </div>
                <p className="Card__display">
                        {this.props.display}
                 </p>
                <button className="Card__button">Plus</button>


            
            </div>
        )
    }
}

export default Card