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
            portfolios:[null,null,null,null,null,null,null,null],
            number:'',
            tags: [],
            suggestTags:['sadsasadas'],
            description:'',
            qty:0,
            ship_days:0,
            shipper:0,
            price:0,
            dFee:0,
            errors:{
                label:false,
                number:false,
                description:false,
                qty:false,
                ship_days:false,
                shipper:false,
                price:false,
                dFee:false,
                tags:false,
                portfolios:false,
            },
            currencies:[
                {
                  value: 'USD',
                  label: '$',
                },
                {
                  value: 'EUR',
                  label: '€',
                },
                {
                  value: 'BTC',
                  label: '฿',
                },
                {
                  value: 'JPY',
                  label: '¥',
                },
            ],
        }
    }

    componentDidMount() {
        this.getProductDetail()
    }

    getProductDetail = () => {
        const {product, ProductActions} = this.props
        
        if(product != null)
        {
            console.log('entered')
            ProductActions.getProductDetail({id:1}).then(
                (res) => {
                    console.log('success')
                },
                (e) => {

                }
            )
        }
        else
        {

        }
    }

    handleChangePortfolio = (event,index) => {
        event.preventDefault();
        let reader = new FileReader();
        let file = event.target.files[0];
        reader.onloadend = () => {
            this.setState(
                state => {
                    const list = state.portfolios.map((item, i) => {
                        if (i === index) {
                            return reader.result
                        } else {
                            return item;
                        }
                    });
                 
                    return {
                        portfolios:list,
                    };
                }
            )
        }

        reader.readAsDataURL(file)
    }

    handleChangeInput = (e) => {
        this.setState({[e.target.name]:e.target.value})
    }
    handleTagChange = (tags) => {
        this.setState({tags})
        console.log(this.state.tags)
    }
    handleSuggestTagChange = (index) => {

    }
    render() {
        return (
            <ProductFormPanel
                handleChangePortfolio={this.handleChangePortfolio}
                handleChangeInput={this.handleChangeInput}
                handleTagChange={this.handleTagChange}
                handleSuggestTagChange={this.handleSuggestTagChange}
                portfolios={this.state.portfolios}
                tags={this.state.tags}
                suggestTags={this.state.suggestTags}
                errors={this.state.errors}
                currencies={this.state.currencies}
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