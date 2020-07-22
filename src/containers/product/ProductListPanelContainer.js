import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import ProductListPanel from 'components/product/ProductListPanel'
import * as homeActions from 'redux/modules/homePage';
import * as productListActions from 'redux/modules/product/productList';
import storage from 'lib/storage'

class ProductListPanelContainer extends Component {
    getProductList = async ({ type }) => {
        const { ProductActions, productList } = this.props;

        try {
            const token = storage.get('token');
            await ProductActions.getProducts({ type: type, token: token });
        } catch (e) {
            console.log(e)
        }
    }

    componentDidMount() {
        this.getProductList({ type: 0 })
    }

    render() {
        const { HomeActions, ProductActions, productList, currentType } = this.props;

        const handleClick = (panelNumber, panelType, product) => {
            switch (panelType) {
                case 1:
                    HomeActions.changeFirstStatus(panelNumber)
                    HomeActions.changeSecondStatus(0)
                    HomeActions.changeThirdStatus(0)
                    break;
                case 2:
                    HomeActions.changeSecondStatus(panelNumber)
                    HomeActions.changeThirdStatus(0)
                    break;
                case 3:
                    HomeActions.changeThirdStatus(panelNumber)
                    ProductActions.showProduct(product)
                    break;
                default:
                    break;
            }
        }

        const switchingType = (typeId) => {
            console.log(typeId)
            this.getProductList({ type: typeId })
            ProductActions.changeCurrentType(typeId)
        }

        return (
            <ProductListPanel mode={this.props.mode} productList={productList} handleClick={handleClick} switchingType={switchingType} type={currentType} />
        )
    }
}

export default connect(
    (state) => ({
        productList: state.productList.get('productList'),
        currentType: state.productList.get('currentType'),
    }),
    (dispatch) => ({
        HomeActions: bindActionCreators(homeActions, dispatch),
        ProductActions: bindActionCreators(productListActions, dispatch),
    })
)((ProductListPanelContainer));