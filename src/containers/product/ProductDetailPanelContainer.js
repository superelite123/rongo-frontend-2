import React,{Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as productActions from 'redux/modules/product/productList'
import ProductDetailPanel from 'components/product/ProductDetailPanel'
import * as homeActions from 'redux/modules/homePage';
import * as productFormActions from 'redux/modules/product/productForm';
import {SHOW_PFORM,SHOW_PPROUCTSPANEL,} from 'lib/constant'
import {isMobile} from "react-device-detect";

class ProductDetailPanelContainer extends Component
{

    getProduct = async () => {
        const { HomeActions, ProductActions, productDetail,  showProduct} = this.props;

        try {
            await ProductActions.getProductDetail({id:showProduct.id});
        } catch (e) {
            console.log(e)
        }
    }

    goBack = () => {
        const { HomeActions, ProductActions, productDetail,  showProduct} = this.props;
        
        HomeActions.changeThirdStatus(0)
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
        if(isMobile)
        {
            const {HomeActions} = this.props
            HomeActions.changeSecondStatus(SHOW_PPROUCTSPANEL)
        }
    }
    render()
    {
        const { showProduct, userInfo, productDetail } = this.props

        return (
            <ProductDetailPanel 
            product = { productDetail } 
            title={ userInfo.username } 
            goBack={this.goBack}
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
    })
)((ProductDetailPanelContainer));