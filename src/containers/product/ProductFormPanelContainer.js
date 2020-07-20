import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import ProductFormPanel from 'components/product/ProductFormPanel'
import * as homeActions from 'redux/modules/homePage';
import * as productListActions from 'redux/modules/product/productList';

class ProductFormPanelContainer extends Component {
    constructor() {
        super()
        this.state = {
            label: {},
            portfolios:[],
            number:'',
            tags: [],
            description:'',
            qty:0,
            ship_days:0,
            shipper:0,
            price:0,
            dFee:0,
        }
    }
    loadProduct = async () => {
        const { ProductActions, showProduct} = this.props;

        try {
            await ProductActions.getProductDetail({id:showProduct.id});
        } catch (e) {
            console.log(e)
        }
    }
    handleChangePortfolio = () => {

    }
    componentDidMount() {
        const product = this.props.showProduct
        if(product != null)
        {

        }
    }

    render() {
        const { HomeActions, ProductActions,showProduct } = this.props;
        
        const handleSubmit = (panelNumber, panelType, product) => {
            
        }

        const switchingType = (typeId) => {
            console.log(typeId)
            this.getProductList({ type: typeId })
            ProductActions.changeCurrentType(typeId)
        }

        return (
            <ProductFormPanel
            handleChangePortfolio={this.handleChangePortfolio}
            />
        )
    }
}

export default connect(
    (state) => ({
        showProduct: state.productList.get('showProduct'),
    }),
    (dispatch) => ({
        HomeActions: bindActionCreators(homeActions, dispatch),
        ProductActions: bindActionCreators(productListActions, dispatch),
    })
)((ProductFormPanelContainer));