import React,{Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as productActions from 'redux/modules/product/productList'
import ProductDetailPanel from 'components/product/ProductDetailPanel'
import * as homeActions from 'redux/modules/homePage';
import * as productFormActions from 'redux/modules/product/productForm';
import {SHOW_PFORM,SHOW_PPROUCTSPANEL,SHOW_PADDLINK} from 'lib/constant'
import {isMobile} from "react-device-detect";
import * as baseActions from 'redux/modules/base';
import storage from 'lib/storage'
class ProductDetailPanelContainer extends Component
{
    constructor(props) {
        super(props)
        this.state = {
            token:null,
        }
    }
    getProduct = async () => {
        const { ProductActions, BaseActions, showProduct} = this.props;
        const token = storage.get('token');
        this.setState({token:token})
        try {
            BaseActions.setPageLoading(true)
            await ProductActions.getProductDetail({id:showProduct.id,token:token});
        } catch (e) {
            console.log(e)
        }
        BaseActions.setPageLoading(false)
    }
    componentDidMount() {
        this.getProduct()
    }

    handleEdit = () => {
        const { HomeActions, ProductFormActions, showProduct} = this.props;
        ProductFormActions.selectProduct(showProduct.id)
        HomeActions.changeThirdStatus(SHOW_PFORM,3)
    }
    handleGoBack = () => {
        const {HomeActions} = this.props
        if(isMobile)
        {
            HomeActions.changeSecondStatus(SHOW_PPROUCTSPANEL)
        }
        if(!isMobile)
        {
            HomeActions.changeThirdStatus(SHOW_PADDLINK)
        }
    }
    render()
    {
        const { userInfo, productDetail } = this.props

        return (
            <ProductDetailPanel 
            product = { productDetail } 
            title={ userInfo.username } 
            handleEdit={this.handleEdit}
            handleGoBack={this.handleGoBack}
            />
        )
    }
}

export default connect(
    (state) => ({
        showProduct: state.productList.get('showProduct'),
        productDetail: state.productList.get('productDetail'),
        userInfo: state.user.get('userInfo')
    }),
    (dispatch) => ({
        HomeActions: bindActionCreators(homeActions, dispatch),
        ProductActions: bindActionCreators(productActions, dispatch),
        ProductFormActions: bindActionCreators(productFormActions, dispatch),
        BaseActions: bindActionCreators(baseActions, dispatch)
    })
)((ProductDetailPanelContainer));