import React,{Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import ProductListPanel from 'components/product/ProductListPanel'
import * as productListActions from 'redux/modules/product/productList';

class ProductListPanelContainer extends Component
{
    getProductList = async () => {
        const { ProductActions,  productList} = this.props;

        try {
            await ProductActions.getProducts({type:0});
            console.log(this.props.productList)
        } catch (e) {
            console.log(e)
        }
        
    }

    componentWillMount() {
        this.getProductList()
    }

    render()
    {
        const { ProductActions,  productList} = this.props;
        
        return (
            <ProductListPanel productList={productList}/>
        )
    }
}

export default connect(
    (state) => ({
        productList: state.productList.get('productList'),
    }),
    (dispatch) => ({
        ProductActions: bindActionCreators(productListActions, dispatch),
    })
)((ProductListPanelContainer));