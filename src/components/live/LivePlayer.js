import React,{useRef, Component } from 'react'
import { Button } from "@material-ui/core"
import LivePanelTemplete from '../base/LivePanelTemplete'
import ReactPlayer from 'react-player'
class LivePlayer extends Component{
  constructor() {
    super()
    this.state = {
        streamname:'dkxkWlQy',
        url:'https://cdn3.wowza.com/1/NURVSXRVTzBmV1Fl/dkxkWlQy/hls/live/playlist.m3u8'
    }
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
    const {url} = this.state.url
      return (
        <LivePanelTemplete mode={0}>
        </LivePanelTemplete>
      )
  }
}

export default LivePlayer;