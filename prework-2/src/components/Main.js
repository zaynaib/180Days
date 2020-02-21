import React from "react";
import Header from "./Header";
import Input from "./Input";
import Card from "./Card";
import fonts from "../data.json";
import "./Main.css"
//https://stackoverflow.com/questions/44309300/iterating-over-json-in-react


class Main extends React.Component{
    constructor(props){
        super(props);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);


        this.state = {temperature: ''};


    }

    handleFahrenheitChange(temperature) {
        this.setState({temperature});
        console.log(this.state.temperature)
      }

     

    

    render(){
        const temperature = this.state.temperature;

        return(
            <div>
            
                <Header/>
                <Input onTemperatureChange={this.handleFahrenheitChange} />
                <div className="container">
              

                 {fonts.map( (font,index) => {
                    if(this.state.temperature === ''){
                        return <Card title ={font.name} author={font.author} display = "The quick brown fox jumps over the lazy dog"/>
                      }
                      else{
                        return <Card title ={font.name} author={font.author} display = {this.state.temperature}/>              
                      }
                    
                })}

                </div>
             
            </div>
            
        )
    }

}

export default Main