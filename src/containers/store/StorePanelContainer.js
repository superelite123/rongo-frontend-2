import React,{Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import StorePanel from 'components/store/StorePanel'
import * as userActions from 'redux/modules/user';
import * as homeActions from 'redux/modules/homePage';
import storage from 'lib/storage'
import * as StoreApi from 'lib/api/store';
import * as baseActions from 'redux/modules/base';
import {SHOW_HOMEPANEL,} from 'lib/constant'
import {isMobile} from "react-device-detect";
class StorePanelContainer extends Component {
    constructor() {
        super()
        this.state = {
            tags: [],
            backgrounds:[],
            isEHovered: {},
            isBGHovered: {},
            explantions:[],
            selectedExplantion:null,
            description:'',
            saveSuccess:false
        }
    }
    initialize = async () => {
        const token = storage.get('token');
        StoreApi.getMyStore(token).then((res) => {
            //set description
            this.setState({description:res.data.description})
            //set explantion
            this.setState({explantions:res.data.explantions})
            //set backgrounds
            this.setState({backgrounds:res.data.backgrounds})
            //set tags
            this.setState({tags:res.data.tags})
        })
    }
    componentDidMount() {
        this.initialize();
    }
    onRegister = async () => {

    }
    handleEMouseEnter = index => {
        this.setState(prevState => {
            return { isEHovered: { ...prevState.isEHovered, [index]: true } };
        });
    };
    handleEMouseLeave = index => {
        this.setState(prevState => {
            return { isEHovered: { ...prevState.isHovered, [index]: false } };
        });
    };
    handleBGMouseEnter = index => {
        this.setState(prevState => {
            return { isBGHovered: { ...prevState.isEHovered, [index]: true } };
        });
    };
    handleBGMouseLeave = index => {
        this.setState(prevState => {
            return { isBGHovered: { ...prevState.isHovered, [index]: false } };
        });
    };
    handleChangeAvatar = (event) => {
        event.preventDefault();
        const reader = new FileReader();
        const file = event.target.files[0];
        reader.readAsDataURL(file)
        const {UserActions} = this.props
        reader.onloadend = () => {
            UserActions.setAvatar(reader.result)
        }
    }
    handleDescChange = (e) => {
        this.setState({description:e.target.value})
    }
    handleAddExplantion = (event) => {
        event.preventDefault();
        let reader = new FileReader();
        let file = event.target.files[0];
        reader.onloadend = () => {
        
            this.setState({selectedExplantion:reader.result})
            
        }
        reader.readAsDataURL(file)
    }
    handleAdd1Explantion = () => {
        if(this.state.selectedExplantion != null)
        {
            this.setState({
                explantions:[...this.state.explantions,this.state.selectedExplantion]
            })
            this.setState({selectedExplantion:null})
        }
    }
    handleChangeExplantion = (event,index) => {
        event.preventDefault();
        let reader = new FileReader();
        let file = event.target.files[0];
        reader.onloadend = () => {
            this.setState(state => {
                const list = state.explantions.map((item, j) => {
                  if (j === index) {
                    return reader.result
                  } else {
                    return item;
                  }
                });
           
                return {
                    explantions:list,
                };
            });
        }
        reader.readAsDataURL(file)
    }
    handleRemoveExplantion = (index) => {
        const { explantions } = this.state;
        this.setState({
            explantions: explantions.filter((explantion,i) => i !== index)
        })

    }
    handleAddBackground = (event,id) => {
        event.preventDefault();
        let reader = new FileReader();
        let file = event.target.files[0];
        reader.onloadend = () => {
            this.setState({
                backgrounds:[...this.state.backgrounds,reader.result]
            })
        }
        reader.readAsDataURL(file)
    }
    handleChangeBackground = (event,index) => {
        console.log('hi')
        event.preventDefault();
        let reader = new FileReader();
        let file = event.target.files[0];
        reader.onloadend = () => {
            this.setState(state => {
                const list = state.backgrounds.map((item, j) => {
                  if (j === index) {
                    return reader.result
                  } else {
                    return item;
                  }
                });
           
                return {
                    backgrounds:list,
                };
            });
        }
        reader.readAsDataURL(file)
    }
    handleRemoveBackground = (index) => {
        const { backgrounds } = this.state;
        this.setState({
            backgrounds: backgrounds.filter((background,i) => i !== index)
        })
    }
    handleSubmit = async () => {
        const {BaseActions} = this.props
        BaseActions.setPageLoading(true)
        const avatar = this.props.userInfo.toJS().thumbnail.replace(/^data:image\/(png|jpg|jpeg);base64,/, "")
        const explantions = this.state.explantions.map((explantion) => (explantion.replace(/^data:image\/(png|jpg|jpeg);base64,/, "") ) ) 
        const backgrounds = this.state.backgrounds.map((background) => (background.replace(/^data:image\/(png|jpg|jpeg);base64,/, "") ) ) 
        const store = {
            avatar:avatar,
            description:this.state.description,
            explantions:explantions,
            backgrounds:backgrounds,
            tags:this.state.tags
        }

        const token = storage.get('token');
        StoreApi.setMyStore(store, token).then((res) => {
            BaseActions.setPageLoading(false)
            this.setState({saveSuccess:true})
        })
    }
    handleGoBack = () => {
        const {HomeActions} = this.props
        if(isMobile)
        {
            HomeActions.changeFirstStatus(SHOW_HOMEPANEL)
        }
    }
    handleCloseSnackbar = () => {
        this.setState({saveSuccess:false})
    }
    render () {
        let nickname="",thumbnail=""
        if(this.props.userInfo != null)
        {
            nickname = this.props.userInfo.toJS().nickname
            thumbnail = this.props.userInfo.toJS().thumbnail
        }
        else{
            nickname=""
            thumbnail=""
        }
        const {description} = this.state
        const handleTagChange = (tags) => {
            this.setState({tags})
        }
        return (
            <StorePanel 
                        nickname={nickname}
                        avatar={thumbnail}
                        description={description}
                        tags={this.state.tags} 
                        backgrounds={this.state.backgrounds} 
                        explantions={this.state.explantions}
                        isEHovered={this.state.isEHovered} 
                        isBGHovered={this.state.isBGHovered} 
                        handleChangeAvatar={this.handleChangeAvatar}
                        handleTagChange={handleTagChange}
                        handleEMouseEnter={this.handleEMouseEnter}
                        handleEMouseLeave={this.handleEMouseLeave}
                        handleBGMouseEnter={this.handleBGMouseEnter}
                        handleBGMouseLeave={this.handleBGMouseLeave}
                        handleAddExplantion={this.handleAddExplantion}
                        handleAdd1Explantion={this.handleAdd1Explantion}
                        handleChangeExplantion={this.handleChangeExplantion}
                        handleRemoveExplantion={this.handleRemoveExplantion}
                        handleAddBackground={this.handleAddBackground}
                        handleChangeBackground={this.handleChangeBackground}
                        handleRemoveBackground={this.handleRemoveBackground}
                        handleDescChange={this.handleDescChange}
                        selectedExplantion={this.state.selectedExplantion}
                        handleSubmit={this.handleSubmit}
                        onGoBack={this.handleGoBack}
                        saveSuccess={this.state.saveSuccess}
                        handleCloseSnackbar={this.handleCloseSnackbar}
                        />
        )
    }


}

export default connect(
    (state) => ({
        userInfo:state.user.get('userInfo'),
    }),
    (dispatch) => ({
        UserActions: bindActionCreators(userActions, dispatch),
        BaseActions: bindActionCreators(baseActions, dispatch),
        HomeActions: bindActionCreators(homeActions, dispatch),
    })
)((StorePanelContainer));