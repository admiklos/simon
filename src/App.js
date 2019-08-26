import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
        box1 : false,
        box2 : false,
        box3 : false,
        box4 : false
    }
  }

    // the id can be received using event below, OR through the code:
    // handleClick = (id, event) =>
  handleClick = (id, event) => {
    let currentBox = "box" + id;
    let currentState = this.state[currentBox];
    this.setState({[currentBox] : !currentState});
  }
    
  render() {
    let wrapperStyle = {display       : "flex",
                       flexFlow       : "inherit",
                       justifyContent : "space-around",
                       flex           : "1 auto",
                       margin         : 0,
                       padding        : 0};
    // 
    return (
      <div>
        <h1>Simon</h1>
        <div className="boxWrapper" style={wrapperStyle}>
          <Box active={this.state.box1} handleClick={this.handleClick} id={1} color={{num1:255, num2:0, num3:0}}/>
          <Box active={this.state.box2} handleClick={this.handleClick} id={2} color={{num1:0, num2:255, num3:0}}/>
        </div>
        <div className="boxWrapper" style={wrapperStyle}>
          <Box active={this.state.box3} handleClick={this.handleClick} id={3} color={{num1:255, num2:255, num3:0}}/>
          <Box active={this.state.box4} handleClick={this.handleClick} id={4} color={{num1:0, num2:0, num3:255}}/>
        </div>
      </div>
      );
  }
}

  const Box = (props) => {
    let opacity = props.active ? "1" : ".5";
    let bRadius = props.id === 1 ? "30px 0 0 0" : 
                  props.id === 2 ? "0 30px 0 0" :
                  props.id === 3 ? "0 0 0 30px" : "0 0 30px 0";
    let boxStyle = {
      backgroundColor : "rgba(" + props.color.num1 + "," +
                                  props.color.num2 + "," + 
                                  props.color.num3 + ", " + opacity + ")",
      width        : "50vw",
      height       : "50vw",
      borderRadius : bRadius,
      margin       : "5px",
      textAlign    : "center"
    };

    // the id can be passed using html as below, OR through the code:
    // <div onClick={(event)=>props.handleClick(props.id, event)}
    // <div data-id={props.id} onClick={props.handleClick} 
    return (
      <div onClick={(event)=>props.handleClick(props.id, event)} className="boxStyling" style={boxStyle}>{"box " + props.id}</div>
      );
  }


export default App;
