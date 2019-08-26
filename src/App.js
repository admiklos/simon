import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {

    }
  }

  render() {
    let wrapperStyle = {display       : "flex",
                       flexFlow       : "inherit",
                       justifyContent : "space-around",
                       flex           : "1 auto",
                       margin         : 0,
                       padding        : 0};
    return (
      <div>
        <h1>Simon</h1>
        <div className="boxWrapper" style={wrapperStyle}>
          <Box id={1} color={{num1:255, num2:0, num3:0}}/>
          <Box id={2} color={{num1:0, num2:255, num3:0}}/>
          </div>
        <div className="boxWrapper" style={wrapperStyle}>
          <Box id={3} color={{num1:255, num2:255, num3:0}}/>
          <Box id={4} color={{num1:0, num2:0, num3:255}}/>
        </div>
      </div>
      );
  }
}

  const Box = (props) => {
    let boxStyle = {
      backgroundColor : "rgba(" + props.color.num1 + "," +
                                  props.color.num2 + "," + 
                                  props.color.num3 + ", .5)",
      width        : "50vw",
      height       : "50vw",
      borderRadius : "10px",
      margin       : "5px",
      textAlign    : "center"
    };
    return (
      <div onClick={()=>console.log("trigger")} className="boxStyling" style={boxStyle}>box {props.id}</div>
      );
  }


export default App;
