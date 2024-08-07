
import React from "react";
import "./style.css";
import { render } from "@testing-library/react";
class Timer extends React.Component{
  constructor(){
    super();
    this.state ={
  
      time : 300
    }
  }
  componentDidMount(){
    let timer = setInterval(() => {
      this.setState((time) => {
        if (time === 0) {
          clearInterval(timer);
          return 0;
        } else return time - 1;
      });
    }, 1000)
  }
  render(){
    return(
      <h2 className="timer">
        it is {this.state.time}
      </h2>
    )
  }
}


  export default Timer;