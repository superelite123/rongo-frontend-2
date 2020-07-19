import React,{Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as productActions from 'redux/modules/product/productList'
import ProductDetailPanel from 'components/product/ProductDetailPanel'
import * as homeActions from 'redux/modules/homePage';

class ProductDetailPanelContainer extends Component
{

    getProduct = async () => {
        const { HomeActions, ProductActions, productDetail,  showProduct} = this.props;

        try {
            await ProductActions.getProductDetail({id:showProduct.id});
            console.log(productDetail)
        } catch (e) {
            console.log(e)
        }
    }

    goBack = () => {
        const { HomeActions, ProductActions, productDetail,  showProduct} = this.props;
        
        HomeActions.changeThirdStatus(0)
    }

    componentWillMount() {
        this.getProduct()
    }


    render()
    {
        const { showProduct, userInfo, productDetail } = this.props
        console.log(productDetail)

        return (
            <ProductDetailPanel product = { productDetail } title={ userInfo.username } goBack={this.goBack}/>
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
    })
)((ProductDetailPanelContainer));