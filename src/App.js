import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
     pattern : [],
     history : [],
        box1 : false,
        box2 : false,
        box3 : false,
        box4 : false
    }
  }


  handleClick = (id, event) => {
      let ch = this.state.history;
      ch.push(id);
      setTimeout( () => {
        this.setState({["box" + id] : !(this.state["box" + id]) });
      }, 300*id );
      this.setState({ ["box" + id] : !(this.state["box" + id]) });
  }

    // the id can be received using event below, OR through the code:
    // handleClick = (id, event) => or
    // handleClick(event)   event.target.dataset.id == id
  handleStart = (id, event) => {
   // let currentBox = "box" + id;
   // let currentState = this.state[currentBox];
   // this.setState({[currentBox] : !currentState});
    let cp = this.state.pattern;
    cp.push(Math.floor(Math.random() * 4) + 1);
    console.log(cp);
    this.playPattern();
  }
    
  render() {
    let wrapperStyle = {display       : "flex",
                       flexFlow       : "inherit",
                       justifyContent : "space-around",
                       flex           : "1 auto",
                       margin         : 0,
                       padding        : 0};
    let startStyle = { background : "center" };
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
        <button onClick={this.handleStart} style={startStyle}>Start</button>
      </div>
      );
  }

  playPattern () {
    let cp = this.state.pattern;
    console.log("This is cp: " + cp);
    for(let i=0; i<cp.length; i++){
          setTimeout( () => {
            this.setState({["box" + cp[i]] : !(this.state["box" + cp[i]]) });
          }, 300*(i+1) );
        this.setState({["box" + cp[i]] : !(this.state["box" + cp[i]]) });
    }
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
