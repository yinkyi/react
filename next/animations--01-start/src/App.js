import React, { Component } from "react";

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";
import {Transition} from 'react-transition-group';
class App extends Component {
  state={
    modelIsOpen:false,
    showBlock:false
  }
  showModel=()=>{
    this.setState({modelIsOpen:true});
  }
  closeModel=()=>{
    this.setState({modelIsOpen:false});
  }
  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        <button className="Button"
        onClick={()=>this.setState(prevState=>({showBlock:!prevState.showBlock}))}
        >Toggle</button>
        <br/>
        <Transition
          in={this.state.showBlock}
          timeout={1000}
          mountOnEnter
          unmountOnExit
          onEnter={()=>console.log("onEnter")}
          onEntering={()=>console.log("onEntering")}
          onEntered={()=>console.log("onEntered")}
          onExit={()=>console.log("onExit")}
          onExiting={()=>console.log("onExiting")}
          onExited={()=>console.log("onExited")}
        >
          {state =>(
            <div style={{
                        backgroundColor:'red',
                        width:100,
                        height:100,
                        margin:"auto",
                        transition:'opacity 1s east-out',
                        opacity:state==='exiting'?0:1
                      }}></div>
           )}
        </Transition>
        <Modal close={this.closeModel} show={this.state.modelIsOpen}/>
        <Transition
          in={this.state.modelIsOpen}
          timeout={1000} 
          mountOnEnter
          unmountOnExit
        >
          {state=>(
             <Backdrop show={state}/>
          )}
        </Transition>
        
        <button className="Button" onClick={this.showModel}>Open Modal</button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
