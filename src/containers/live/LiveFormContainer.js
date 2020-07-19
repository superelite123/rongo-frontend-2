import React,{Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import LiveForm from 'components/live/LiveForm'
import * as liveActions from 'redux/modules/livePage'
import { SHOW_LIVEPRODUCTLIST } from 'lib/constant'
class LiveFormContainer extends Component {
    constructor() {
        super()
        this.state = {
            title:'',
            tag:'',
            thumbnail:null,
        }
    }
    handleAddProduct = () => {
        this.props.LiveActions.changePanelStatus({panelNumber:SHOW_LIVEPRODUCTLIST,panelIndex:2})
    }
    
    handleChangeInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleTakePhoto = (event) => {
        event.preventDefault();
        let reader = new FileReader();
        let file = event.target.files[0];
        reader.onloadend = () => {
        
            this.setState({thumbnail:reader.result})
            
        }
        reader.readAsDataURL(file)
    }
    render() {
        
        return (
            <LiveForm 
                products={this.props.products.toJS()}
                handleAddProduct={this.handleAddProduct}
                thumbnail={this.state.thumbnail}
                handleChangeInput={this.handleChangeInput}
                handleTakePhoto={this.handleTakePhoto}
            />
        )
    }
}
export default connect(
    (state) => ({
        products:state.livePage.get('products')
    }),
    (dispatch) => ({
        LiveActions: bindActionCreators(liveActions, dispatch),
    })
)(LiveFormContainer);
