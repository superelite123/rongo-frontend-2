import React,{useRef, Component } from 'react'
import {withStyles} from '@material-ui/styles'
import LivePanelTemplete from '../base/LivePanelTemplete'
const useStyles = (theme) => ({
  chatPanel:{
    width:'95%',
    height:'90%',
    border:'1px solid black',
    margin:'auto',
    marginTop:'30px',
    position:'relavitve'
  },
  stampQty:{
    fontSize:'12px',
    color:'#333333',
    right:0,
    top:0,
    padding:'5px 5px',
    position:'absolute',
    background:'white'
  }
})
class LivePlayer extends Component{
  constructor() {
    super()
      this.state = {
        chatPanelDemension:[],
    }
    this.chatPanelRef = React.createRef();
  }
  componentDidMount() {
    const cellHeight = this.chatPanelRef.current.clientHeight / 3;
    const cellWidth  = this.chatPanelRef.current.clientWidth / 3;
    let dimensions = []
        for(let i = 0; i < 3; i ++)
            for(let j = 0; j < 3; j ++)
            {
                dimensions.push({top:cellHeight*i + 50,left:cellWidth * j + 50})
            }
    this.setState({chatPanelDemension:dimensions})
  }
  render() {
    const {classes,stamps} = this.props
    const {chatPanelDemension} = this.state
    const isStampRender = chatPanelDemension.length > 0
      return (
        <LivePanelTemplete mode={0}>
          <div ref={this.chatPanelRef} className={classes.chatPanel}>
              {
                isStampRender &&
                stamps.map(stamp => 
                  <div 
                    style={{left:stamp.number>10?0:chatPanelDemension[stamp.gridPosition].left,
                    top:stamp.number>10?0:chatPanelDemension[stamp.gridPosition].top-10,
                    width:stamp.number>10?'90%':'100px',
                    height:stamp.number>10?'90%':'100px',
                    margin:'auto',
                    position:'absolute'}}>
                    <img 
                        style={{width:'100%',height:'100%'}}
                        alt="" 
                        src={process.env.PUBLIC_URL + `/images/ale/Picture${stamp.number}.png`} 
                    />
                    {
                      stamp.number < 10 &&
                      <div className={classes.stampQty}>{stamp.qty}</div>
                    }
                  </div>
                )
            }
          </div>
        </LivePanelTemplete>
      )
  }
}
export default withStyles(useStyles)(LivePlayer)