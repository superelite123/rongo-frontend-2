import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import ProductFormPanel from 'components/product/ProductFormPanel'
import * as homeActions from 'redux/modules/homePage';
import * as productListActions from 'redux/modules/product/productList';
import * as ProductApi from 'lib/api/product';
class ProductFormPanelContainer extends Component {
    constructor() {
        super()
        this.state = {
            id:-1,
            label: '',
            portfolios:[null,null,null,null,null,null,null,null],
            number:'',
            tags: [],
            suggestTags:['sadsasadas'],
            description:'',
            qty:0,
            shipDays:1,
            shipper:1,
            price:0,
            dFee:0,
            formErrors:{
                label:'',
                number:'',
                description:'',
                qty:'',
                ship_days:'',
                shipper:'',
                price:'',
                dFee:'',
                tags:'',
                portfolios:''
            },
            currencies:[
                {
                  value: '1',
                  label: '1',
                },
                {
                  value: '2',
                  label: '2',
                },
                {
                  value: '3',
                  label: '3',
                },
                {
                  value: '4',
                  label: '4',
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
                        console.log(index)
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
    }
    handleTagChange = (tags) => {
        this.setState({tags})
        console.log(this.state.tags)
    }
    handleSuggestTagChange = (index) => {

    }
    handleSubmit = () => {
        //check portfolio validation
        let isError = false
        let portfolioError = true
        let formErrors = { ...this.state.formErrors }
        this.state.portfolios.map((porfolio) => {
            if(porfolio !== null)
            {
                portfolioError = false
            }
        })
        if(portfolioError)
        {
            formErrors.portfolios = 'aaa'
            isError = true
        }
        else
        {
            formErrors.portfolios = ''
        }
        
        //label
        if(this.state.label.length < 1)
        {
            formErrors.label = 'aaa'
            isError = true
        }
        else
        {
            formErrors.label = ''
        }
        //number
        if(this.state.number.length < 1)
        {
            formErrors.number = 'aaa'
            isError = true
        }
        else
        {
            formErrors.number = ''
        }

        //tags
        if(this.state.tags.length < 1)
        {
            formErrors.tags = 'aaa'
            isError = true
        }
        else
        {
            formErrors.tags = ''
        }
        //description
        if(this.state.description.length < 1)
        {
            formErrors.description = 'aaa'
            isError = true
        }
        else
        {
            formErrors.description = ''
        }
        //qty
        if(this.state.qty < 1)
        {
            formErrors.qty = 'aaa'
            isError = true
        }
        else
        {
            formErrors.qty = ''
        }
        //shippDays
        if(this.state.shipDays < 1)
        {
            formErrors.shippDays = 'aaa'
            isError = true
        }
        else
        {
            formErrors.shippDays = ''
        }
        //shipper
        if(this.state.shipper < 1)
        {
            formErrors.shipper = 'aaa'
            isError = true
        }
        else
        {
            formErrors.shipper = ''
        }
        //price
        if(parseFloat(this.state.price) <= 0)
        {
            formErrors.price = 'aaa'
            isError = true
        }
        else
        {
            formErrors.price = ''
        }
        //dFee
        if(parseFloat(this.state.dFee) <= 0)
        {
            formErrors.dFee = 'aaa'
            isError = true
        }
        else
        {
            formErrors.dFee = ''
        }
        if(isError)
        {
            this.setState({formErrors})
            return
        }
        
        ProductApi.saveProduct({formData:this.state}).then((res) => {
            
        })
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
                formErrors={this.state.formErrors}
                initData={this.state}
                currencies={this.state.currencies}
                handleSubmit={this.handleSubmit}
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