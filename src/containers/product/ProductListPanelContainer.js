import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import ProductListPanel from 'components/product/ProductListPanel'
import * as homeActions from 'redux/modules/homePage';
import * as productListActions from 'redux/modules/product/productList';
import storage from 'lib/storage'

class ProductListPanelContainer extends Component {

    constructor() {
        super()
        this.state = {
            deleteMode:false,
            searchMode:false,
            selectedProducts:[]
        }
    }

    getProductList = async ({ type }) => {
        this.props.ProductActions.toggleLoadingState(true)
        const { ProductActions, productList } = this.props;

        try {
            const token = storage.get('token');
            await ProductActions.getProducts({ type: type, token: token });
        } catch (e) {
            console.log(e)
        }
        this.props.ProductActions.toggleLoadingState(false)
    }
    toggleSearch = () => {
        this.setState({searchMode:!this.state.searchMode})
    }
    toggleDeleteMode = () => {
        const {deleteMode} = this.state
        
        this.setState({deleteMode:!deleteMode})
    }
    handleDelete = () => {

    }
    handleSelectProduct = (e) => {
        e.stopPropagation();
        const {checked} = e.target
        const id = e.target.value
        const {selectedProducts} = this.state
        if(checked)
        {
            this.setState({selectedProducts:selectedProducts.concat(id)})
        }
        else
        {
            this.setState({
                selectedProducts:selectedProducts.filter(productID => productID !== id)
            })
        }
        console.log(this.state.selectedProducts)
    }
    componentDidMount() {
        this.getProductList({ type: 0 })
    }
    render() {
        const { HomeActions, ProductActions, productList, currentType, isLoading } = this.props;
        const {deleteMode} = this.state
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
            this.getProductList({ type: typeId })
            ProductActions.changeCurrentType(typeId)
        }

        return (
            <ProductListPanel 
                mode={this.props.mode} 
                productList={productList} 
                handleClick={handleClick} 
                switchingType={switchingType} 
                type={currentType} 
                isLoading={isLoading}
                deleteMode={deleteMode}
                handleSelectProduct={this.handleSelectProduct}
                toggleDeleteMode={this.toggleDeleteMode}
            />
        )
    }
}

export default connect(
    (state) => ({
        productList: state.productList.get('productList'),
        currentType: state.productList.get('currentType'),
        isLoading: state.productList.get('isLoading'),
    }),
    (dispatch) => ({
        HomeActions: bindActionCreators(homeActions, dispatch),
        ProductActions: bindActionCreators(productListActions, dispatch),
    })
)((ProductListPanelContainer));