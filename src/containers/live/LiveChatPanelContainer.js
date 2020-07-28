import React,{ Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import LiveChatPanel from '../../components/live/LiveChatPanel'
import * as liveActions from 'redux/modules/livePage'
import * as LiveApi from 'lib/api/live';
import storage from 'lib/storage'
import { StreamChat } from 'stream-chat';
import {CHAT_STREAM_KEY, CHAT_SECERT_KEY} from 'lib/constant'
import jwt from 'jwt-simple'
import * as baseActions from 'redux/modules/base';

class LiveChatPanelContainer extends Component {
    constructor() {
        super()
        this.state = {
            typingMessage:'',
            channel:null,
            connectionError:false,
            errorMessage:'Error',
            timer:0,
            timerLoop:null
        }
    }
    async componentDidMount()
    {
        const {channelID,chatUserID,BaseActions, LiveActions} = this.props
        const presentChannel = this.props.channel
        if(!presentChannel)
        {
            BaseActions.setPageLoading(true)
            const {nickname} = storage.get('userInfo')
            try {    
                //create Chat Client Object
                const client = new StreamChat(CHAT_STREAM_KEY,);
                //generate token
                const token = jwt.encode({user_id:chatUserID}, CHAT_SECERT_KEY);
                await client.setUser(
                    {
                        id: chatUserID,
                        name: nickname,
                    },
                    token,
                );
                
                const channel = client.channel('livestream', channelID);
                this.setState({channel:channel})
                //subscribe channel
                await channel.watch();
                channel.on('message.new', event => this.receivedMessage(event));
                LiveActions.setChannel({channel})
                BaseActions.setPageLoading(false)
            } catch (error) {
                this.setState({connectionError:true,errorMessage:'お疲れ様でしたこのライブは終了しています'})
            }
        }
        
        const {liveStatus, startTime, endTime} = this.props
        if(liveStatus === 2)
        {
            //this.setState({timer:endTime - startTime})
            console.log('hi')
            clearTimeout(this.state.timerLoop);
        }
        else
        {
            const timerLoop = setInterval(() => {
                this.setState({timer:Date.now() - startTime})
            }, 1000)
            this.setState({timerLoop:timerLoop})
        }
    }
    componentDidUpdate(){
        const {liveStatus} = this.props
        if(liveStatus === 2)
        {
            //this.setState({timer:endTime - startTime})
            console.log('hi')
            clearTimeout(this.state.timerLoop);
        }
    }
    handleQuit = async () => {
        const {LiveActions,liveID} = this.props
        LiveActions.updateStatus(2)
        return
        const token = storage.get('token');
        LiveApi.quitLive({id: liveID, token: token}).then(
            (res) => {
                LiveActions.updateStatus(2)
            },
            (e) => {
            }
        )

    }
    
    sendMessage = async () => {
        const {typingMessage} = this.state
        const {channel} = this.props
        if(channel == null ) return

        if(typingMessage.length > 0)
        {
            this.setState({typingMessage:''})
            try {    
                
                await channel.sendMessage({
                    text:typingMessage,
                    customField: '123',
                });
              } catch (error) {
                this.setState({connectionError:true,errorMessage:'お疲れ様でしたこのライブは終了しています'})
            }
        }
    }
    receivedMessage = (e) => {
        const message = {name:e.user.name,message:e.message.text}
        const {LiveActions} = this.props
        //["aleId": aleType.rawValue, "position": position]
        if(!message.message.includes('aleId'))
        {
            LiveActions.addMessage(message)
        }
        else
        {
            const {aleId,position} = JSON.parse(message.message)
            LiveActions.addStamp({stamp:{gridPosition:position},index:aleId})
            if(aleId > 8)
            {
                const apperTime = aleId === 9?2000:3300
                setTimeout(
                    function() {
                        LiveActions.invisibleStamp({index:aleId})
                    },
                    apperTime
                );
            }
        }
    }
    handleChange = (e) => {
        this.setState({typingMessage:e.target.value})
    }
    handleCloseDialog = () => {
        this.setState({connectionError:false})
    }
    render() {
        const {messages, liveStatus} = this.props
        const {timer} = this.state
        const minutes = Math.floor(timer / 60000);
        const seconds = ((timer % 60000) / 1000).toFixed(0);
        const liveTime = minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
        return (
            <LiveChatPanel 
                onQuit={this.handleQuit}
                messages={messages}
                typingMessage={this.state.typingMessage}
                messagesEnd={this.state.messagesEnd}
                sendMessage={this.sendMessage}
                handleChange={this.handleChange}
                connectionError={this.state.connectionError}
                onCloseDialog={this.handleCloseDialog}
                errorMessage={this.state.errorMessage}
                liveTime={liveTime}
                liveStatus={liveStatus}
            />
        )
    }
}

export default connect(
    (state) => ({
        liveID:state.livePage.get('id'),
        channelID:state.livePage.get('channelID'),
        chatAdminID:state.livePage.get('chatAdminID'),
        chatUserID:state.livePage.get('chatUserID'),
        messages:state.livePage.get('messages').toJS(),
        nickname:state.user.getIn(['userInfo','nickname']),
        channel:state.livePage.get('channel'),
        startTime:state.livePage.get('startTime'),
        liveStatus:state.livePage.get('status')
    }),
    (dispatch) => ({
        LiveActions: bindActionCreators(liveActions, dispatch),
        BaseActions: bindActionCreators(baseActions, dispatch)
    })
)(LiveChatPanelContainer);