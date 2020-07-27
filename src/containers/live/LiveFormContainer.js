import React,{Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import LiveForm from 'components/live/LiveForm'
import * as liveActions from 'redux/modules/livePage'
import { SHOW_LIVEPRODUCTLIST,SHOW_LIVECHATPANEL,BASE_LIVE_URL } from 'lib/constant'
import * as LiveApi from 'lib/api/live';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import storage from 'lib/storage'

class LiveFormContainer extends Component {
    constructor() {
        super()
        this.state = {
            title:'',
            tag:'',
            thumbnail:null,
            confirmOpen:false,
            error:false,
            backDrop:false,
            isQuit:true
        }
    }
    handleAddProduct = () => {
        this.props.LiveActions.changePanelStatus({panelNumber:SHOW_LIVEPRODUCTLIST,panelIndex:2})
    }
    componentDidMount(){
        const {LiveActions} = this.props
        LiveActions.setStartTime({startTime:Date.now()})
    }
    handleChangeInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        this.props.LiveActions.updateForm({name:e.target.name,value:e.target.value})
    }
    handleTakePhoto = (event) => {
        event.preventDefault();
        let reader = new FileReader();
        let file = event.target.files[0];
        reader.onloadend = () => {
            
            this.setState({thumbnail:reader.result})
            this.props.LiveActions.updateForm({name:'thumbnail',value:reader.result})
            
        }
        reader.readAsDataURL(file)
    }
    saveLive = async () => {
        const token = storage.get('token');
        
        // const postData = {
        //     title:this.state.title,
        //     tag:this.state.tag,
        //     thumbnail:this.state.thumbnail.replace(/^data:image\/(png|jpg|jpeg);base64,/, ""),
        //     //products:[this.props.products]
        //     token: token,
        //     products:[]
        // }
        const postData = {id:1}
        LiveApi.saveLive(postData).then(
            (res) => {
                this.setState({backDrop:false})
                const {id,channel_id,cadmin_id,chat_user_id} = res.data
                this.props.LiveActions.updateLiveID(id)
                this.props.LiveActions.updateStatus(1)
                this.props.LiveActions.setChatInfo({channelID:channel_id,chatAdminID:cadmin_id,chatUserID:chat_user_id})
                this.props.LiveActions.changePanelStatus({panelNumber:SHOW_LIVECHATPANEL,panelIndex:2})
                // const {application_name,sdp_url,stream_name} = res.data.liveData
                // window.open(
                //             BASE_LIVE_URL + 'webrtc-examples/src/dev-view-publish.html?url=' + sdp_url + 
                //             '&appname=' + application_name + 
                //             '&streamname=' + stream_name, '_blank');
            },
            (e) => {
                this.setState({backDrop:false})
            }
        )
    }
    handleSubmit = () => {
        const {title,tag,thumbnail} = this.state
        // if(title === '' || tag === '' || thumbnail === null)
        // {
        //     this.setState({error:true})
        //     return
        // }
        this.setState({backDrop:true})
        this.setState({confirmOpen:true})
    }
    handleClose = () => {
        this.setState({confirmOpen:false,backDrop:true})
        this.saveLive()
    }
    
    render() {
        
        const quit = this.props.liveStatus === 2 && this.state.isQuit
        return (
            <div>
                <LiveForm 
                    products={this.props.products}
                    handleAddProduct={this.handleAddProduct}
                    thumbnail={this.state.thumbnail}
                    handleChangeInput={this.handleChangeInput}
                    handleTakePhoto={this.handleTakePhoto}
                    handleSubmit={this.handleSubmit}
                    error={this.state.error}
                    status={this.props.liveStatus}
                    backDrop={this.state.backDrop}
                    handleBottomTab={this.props.handleBottomTab}
                />
                <Dialog
                    open={this.state.confirmOpen}
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{"放送を開始しますか？"}</DialogTitle>
                    <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        放送を開始しますか？
                    </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={() => { this.setState({confirmOpen:false}) }} color="primary">
                        キャンセル
                    </Button>
                    <Button onClick={this.handleClose} color="primary" autoFocus>
                        はい
                    </Button>
                    </DialogActions>
                </Dialog>
                <Dialog
                    open={this.state.error}
                    onClose={() => { this.setState({error:false}) }}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{"追加する商品の数量を入力してください。"}</DialogTitle>
                    <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        
                    </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                    <Button  onClick={() => { this.setState({error:false}) }} color="primary" autoFocus>
                        はい
                    </Button>
                    </DialogActions>
                </Dialog>

                <Dialog
                    open={quit }
                    onClose={() => {this.setState({isQuit:false}) }}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{"ライブ配信後の カメラの変更はできません"}</DialogTitle>
                    <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        お疲れ様でした
                        このライブは終了しています
                    </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                    <Button  onClick={() => { this.setState({isQuit:false}) }} color="primary" autoFocus>
                        はい
                    </Button>
                    </DialogActions>
                </Dialog>

            </div>
        )
    }
}
export default connect(
    (state) => ({
        products:state.livePage.get('products').toJS(),
        thumbnail:state.livePage.get('thumbnail'),
        liveStatus:state.livePage.get('status'),
    }),
    (dispatch) => ({
        LiveActions: bindActionCreators(liveActions, dispatch),
    })
)(LiveFormContainer);
