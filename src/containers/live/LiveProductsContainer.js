import React,{Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Dialog from '@material-ui/core/Dialog';
import {
    TextField,DialogActions,DialogContent,
    DialogContentText,DialogTitle,Button,
} from '@material-ui/core'
import Alert from '@material-ui/lab/Alert';
import LiveProducts from 'components/live/LiveProducts'
import * as liveActions from 'redux/modules/livePage'
import * as LiveApi from 'lib/api/live';
import storage from 'lib/storage'

class LiveProductsContainer extends Component {
    constructor() {
        super()
        this.state = {
            products: [],
            open:false,
            selectedProduct:null,
            addQty:0,
            error:false
        }
    }
    initialize = async () => {
        const token = storage.get('token');
        LiveApi.getProducts(token).then((res) => {
            this.setState({products:res.data})
        })
    }
    componentDidMount() {
        this.initialize();
    }
    handleAddProduct = (index) => {
        this.setState({open:true,selectedProduct:index})
    }
    handleAdd = () => {
        const {addQty,selectedProduct} = this.state
        const avaliableQty = this.state.products[selectedProduct].quantity
        if(addQty < 1 || addQty > avaliableQty)
        {
            this.setState({error:true})
            
        }
        else
        {
            const {LiveActions} = this.props
            const {selectedProduct} = this.state
            let product = this.state.products[selectedProduct]
            product.addQty = parseInt(addQty)
            product.soldQty = 0
            LiveActions.addProduct(product)
            this.setState(
                {
                    products: this.state.products.filter((p,i) => i !== selectedProduct),
                    selectedProduct:null,
                    addQty:0,
                    open:false
                }
            )
        }
    }
    handleClose = () => {
        this.setState({open:false})
    };
    handleQtyChange=(e) => this.setState({addQty:e.target.value,error:false})
    render() {
        const {open,error,selectedProduct,products} = this.state
        const product = products[selectedProduct]
        return (
            <div>
                <LiveProducts products={this.state.products} handleAddProduct={this.handleAddProduct} />
                <Dialog open={open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
                        <DialogTitle id="form-dialog-title">出品数を入力してください</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                在庫数： { product != null?product.quantity:0}
                                { error && <Alert severity="error">This is an error alert — check it out!</Alert>} 
                            </DialogContentText>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="name"
                                type="number"
                                fullWidth
                                defaultValue={0}
                                onChange={this.handleQtyChange}
                            />
                            </DialogContent>
                        <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                        キャンセル
                        </Button>
                        <Button onClick={this.handleAdd} color="primary">
                        出品する
                        </Button>
                        </DialogActions>
                    </Dialog> 
            </div>
        )
    }
}
export default connect(
    (state) => ({
    
    }),
    (dispatch) => ({
        LiveActions: bindActionCreators(liveActions, dispatch),
    })
)(LiveProductsContainer);