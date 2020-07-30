import React, {Component} from 'react'
import {withStyles} from '@material-ui/styles'
import { IconButton, Button, TextField } from "@material-ui/core"
import CloseIcon from '@material-ui/icons/Close';
import LivePanelTemplete from '../base/LivePanelTemplete'
import SendIcon from '@material-ui/icons/Send';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle'
const useStyles = (theme) => ({
    root:{
        width:'100%',
        height:'100%',
        position:'relative'
    },
    header: {
        paddingTop: 'px',
        paddingBottom: 'px',
    },
    leftTopButton: {
        margin: 'auto'
    },
    headerLabel: {
        fontFamily: 'Noto Sans JP',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: '17px',
        marginTop: '15px',
        marginBottom: '14px',
    },
    searchButton: {
        verticalAlign: 'text-bottom',
        color: '#BBA884'
    },
    quitButtonWrapper:{
        display:'flex',
        height:'50px',
        border:'1px solid #333333',
        width:'100px',
        borderRadius:'30px',
        marginTop:'10px',
        marginBottom:'10px',
        marginLeft:'70%'
    },
    quitTimeWrapper:{
        color:'#333333',
        fontSize:'12px',
        display:'block',
        margin:'auto'
    },
    quitButton:{
        borderRadius:'12px',
        border:'1px solid #333333',
        fontSize:'11px'
    },
    container:{
        border: '1px solid #c4c4c4',
        width:'95%',
        height:'calc(100% - 50px)',
        position:'absolute',
        left:0,
        top:'20px'
    },
    chatPanel:{
        height:'calc(100% - 130px)',
        width:'95%',
        margin:'auto',
        overflowY:'scroll',
        position:'relavitve'
    },
    stamp:{
        width:'100px',
        height:'100px',
        position:'absolute',
        left:0,
        top:0
    },
    chatInputWrapper:{
        width:'95%',
        height:'50px',
        margin:'auto',
        borderTop:'1px solid #c4c4c4',
        display: 'flex'
    },
    message:{
        width: '92%',
        display:'flex',
        fontSize: '14px',
        fontWeight:'500',
        borderRadius: '3px',
        background:'white',
        padding:'3px',
        marginBottom:'10px'
    },
    messageName:{
        color:'#A5A5A5',
        textAlign:'left',
        marginRight:'10px'
    },
    messageBody: {
        color: '#333333',
        textAlign: 'left',
        width:'80%',
        wordWrap:'break-word'
    }
})
class LiveChatPanel extends Component {
    constructor() {
        super()
        this.chatPanelRef = React.createRef();
        this.state = {
        }
    }
    componentDidMount() {
    }
    componentDidUpdate()
    {
        this.scrollToBottom()
    }
    handleKeyPress = (e) => {
        if(e.key === 'Enter'){
            this.handleSendMessage()
        }
    }
    handleSendMessage = () => {
        this.scrollToBottom()
        this.props.sendMessage()
    }
    scrollToBottom = () => {
        const scroll = this.chatPanelRef.current.scrollHeight - this.chatPanelRef.current.clientHeight;
        this.chatPanelRef.current.scrollTo(0, scroll);
    }
    render() {
        const { onQuit, classes, messages, errorMessage, typingMessage,liveTime,
                handleChange, connectionError,onCloseDialog,isQuit } = this.props;
        return (
            <LivePanelTemplete mode={0}>
                <div className={classes.root}>
                    <div className={classes.container}>
                        <div className={classes.quitButtonWrapper}>
                            <IconButton color="primary" onClick={onQuit} aria-label="upload picture" component="span">
                                <CloseIcon />
                            </IconButton>
                            <div className={classes.quitTimeWrapper}>
                                <div></div>
                                <div>{liveTime}</div>
                            </div>
                        </div>
                        {/**Chat Panel*/}
                        <div ref={this.chatPanelRef} className={classes.chatPanel}>
                            {
                                messages.map((message,index) => 
                                    <div key={index} className={classes.message}>
                                        <div className={classes.messageName}>
                                            {message.name}
                                        </div>
                                        <div className={classes.messageBody}>
                                            {message.message}
                                        </div>
                                    </div>
                                    )
                            }
                        </div>
                        <div className={classes.chatInputWrapper}>
                            <TextField id="outlined-basic" variant="outlined" 
                                        value={typingMessage} 
                                        onChange={handleChange}
                                        style={{width:'90%',marginTop:'2px'}} 
                                        onKeyPress={this.handleKeyPress}
                            />
                            <Button style={{width:'10%'}} onClick={this.handleSendMessage}><SendIcon /></Button>
                        </div>
                        {/**./Chat Panel*/}
                    </div>
                </div>
                <Dialog
                    open={connectionError }
                    onClose={() =>  onCloseDialog(1) }
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{"お知らせ"}</DialogTitle>
                    <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {errorMessage}
                    </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                    <Button  onClick={() => { onCloseDialog(1) }} color="primary" autoFocus>
                        はい
                    </Button>
                    </DialogActions>
                </Dialog>
                
                <Dialog
                    open={isQuit }
                    onClose={() =>  onCloseDialog(2) }
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{"お知らせ"}</DialogTitle>
                    <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {"LIveが終了しました。"}
                    </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                    <Button  onClick={() => { onCloseDialog(2) }} color="primary" autoFocus>
                        はい
                    </Button>
                    </DialogActions>
                </Dialog>
            </LivePanelTemplete>
        )
    }
}
export default withStyles(useStyles)(LiveChatPanel)