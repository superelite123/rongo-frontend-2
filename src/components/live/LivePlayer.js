import React,{useRef, Component } from 'react'
import { Button } from "@material-ui/core"
import LivePanelTemplete from '../base/LivePanelTemplete'
import Webcam from "react-webcam";
class LivePlayer extends Component{
  constructor() {
    super()
      this.state = {
        width:0,
        height:0
    }
  }
  componentDidMount() {
    this.updateWindowDimensions();
    
  }
  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }  
  render() {
    const rootStyle = {
        top:0,
        width:'100%',
        height:'100%',
        background:'black'
    }
    const confirmButton = {
      position:'absolute',
      width:'165px',
      height:'50px',
      top:0,
      left:0
    }
    const videoConstraints = {
      width: 1280,
      height: 720,
      facingMode: "user"
    };
      return (
        <LivePanelTemplete mode={0}>
          <Webcam 
            videoConstraints={videoConstraints}
            height={this.state.height}
          />
        </LivePanelTemplete>
      )
  }
}

export default LivePlayer;