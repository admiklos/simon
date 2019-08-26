import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <h1>Simon</h1>
        <Box id={1} color={{num1:255, num2:0, num3:0}}/>
        <Box id={2} color={{num1:0, num2:255, num3:0}}/>
        <Box id={3} color={{num1:255, num2:255, num3:0}}/>
        <Box id={4} color={{num1:0, num2:0, num3:255}}/>
      </div>
      );
  }
}

  const Box = (props) => {
    let boxStyle = {
      backgroundColor : "rgba(" + props.color.num1 + "," +
                                 props.color.num2 + "," + 
                                 props.color.num3 + ", .5)",
      maxWidth : 100,
      borderRadius : "5px",
      borderColor : "black",
      borderWidth : 5
    };
    return (
      <div style={boxStyle}>box {props.id}</div>
      );
  }


export default App;
