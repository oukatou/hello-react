import React, { Component } from 'react';
import logo from '../assets/image/logo.svg';
import MouseMove from './MouseMove'
import './ReactLogo.css';

class Logo extends Component {
  render() {
    const {mouse,onMouseMove}=this.props
    return (
      <div className="App" onMouseMove={onMouseMove}>
        <img src={logo} className="App-logo" alt="logo" style={{position:"absolute",left:mouse.x,top:mouse.y}}/>
      </div>
    );
  }
}

function MouseTrack(){
  return <MouseMove>
            {(mouse,onMouseMove)=><Logo mouse={mouse} onMouseMove={onMouseMove}/>}
        </MouseMove>
}
export default MouseTrack;
