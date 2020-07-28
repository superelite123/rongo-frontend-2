import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import ProductFormPanel from 'components/product/ProductFormPanel'
import ProductFormPanelBlank from 'components/product/ProductFormPanelBlank'
import * as homeActions from 'redux/modules/homePage';
import * as productListActions from 'redux/modules/product/productList';
import * as productFormActions from 'redux/modules/product/productForm';
import * as baseActions from 'redux/modules/base';
import * as ProductApi from 'lib/api/product';
import {SHOW_PADDLINK,SHOW_PPROUCTSPANEL,} from 'lib/constant'
import {isMobile} from "react-device-detect";
import storage from 'lib/storage'
class ProductFormPanelContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id:-1,
            portfolios:[null,null,null,null,null,null,null,null],
            label: '',
            number:'',
            tags: [],
            description:'',
            qty:0,
            shipDay:1,
            shipper:1,
            price:0,
            dFee:0,
            suggestTags:[],
            shipDays:[
                
            ],
            shippers:[
                
            ],
            portfolioError:false,
            tagError:false,
            hasFetched: false,
            token:null,
            confirmDelete:false
        }
    }
    async componentDidMount() {
        const {selectedProduct, ProductFormActions,BaseActions} = this.props
        
        const token = storage.get('token');
        this.setState({token:token})
        BaseActions.setPageLoading(true)
        ProductFormActions.getProduct({id:selectedProduct,token:token}).then(
            (res) => {
                const response = res.data
                this.setState(response)
                this.setState({hasFetched:true})
            },
            (e) => {
                BaseActions.setPageLoading(false)
            }
        )
        BaseActions.setPageLoading(false)
    }
    handleChangePortfolio = (event,index) => {
        event.preventDefault();
        let reader = new FileReader();
        let file = event.target.files[0];
        console.log(index)
        
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

    handleTagChange = (tags) => {
        this.setState({tags:tags})
        console.log(this.state.tags)
    }
    handleSuggestTagChange = (index) => {
        const {tags,suggestTags} = this.state
        const suggestTag = suggestTags[index]
        let duplicate = false
        tags.forEach(tag => {
            if(tag === suggestTag) duplicate = true
        })
        if(duplicate) return
        //add To tags
        this.setState({
            tags:tags.concat(suggestTags[index]),
        })
        //remove from suggest tags
    }
    handleSave = (data,mode) => {
        const {BaseActions} = this.props
        //check portfolios
        let portfolioError = true
        const {portfolios, tags} = this.state
        portfolios.map((porfolio) => {
            if(porfolio !== null)
            {
                portfolioError = false
            }
        })
        if(portfolioError)
        {
            this.setState({portfolioError:portfolioError})
            return 
        }
        const tagError = tags.length === 0?true:false
        if(tagError)
        {
            this.setState({tagError:tagError})
            return
        }
        BaseActions.setPageLoading(true)
        let postData = data
        postData.portfolios = portfolios.map((portfolio) => {
                if(portfolio !== null)
                {
                    if(portfolio.length > 100)
                    portfolio = portfolio.replace(/^data:image\/(png|jpg|jpeg);base64,/, "")
                }
                return portfolio
            } 
        ) ;
        postData.id = this.state.id
        postData.tags = tags
        postData.mode = mode
        
        ProductApi.saveProduct({formData:postData,token:this.state.token}).then(
            (res) => {
                BaseActions.setPageLoading(false)
            },
            (e) => {
                BaseActions.setPageLoading(false)
            }
        )
    }
    handleDelete = () => {
        this.setState({confirmDelete:false})
        const {BaseActions, ProductListActions} = this.props
        
        BaseActions.setPageLoading(true)
        ProductListActions.deleteProducts({IDs:[this.state.id],token:this.state.token}).then(
            (res) => {
                BaseActions.setPageLoading(false)
                const {HomeActions} = this.props
                HomeActions.changeThirdStatus(SHOW_PADDLINK)
            },
            (e) => {
                BaseActions.setPageLoading(false)
            }
        )
    }
    hanleOnDelete = () => this.setState({confirmDelete:true})
    updateDefaultValue = (value) => {
        this.setState({defaultValuePrepared:false})
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
    handleCloseConfirmDialog = () => this.setState({confirmDelete:false})
    render() {
        console.log('render state,' + this.state.label)
        const {hasFetched} = this.state
        const deleteDisable = this.state.id === -1
        if(hasFetched)
        {
            return (
                <ProductFormPanel
                    handleChangePortfolio={this.handleChangePortfolio}
                    handleTagChange={this.handleTagChange}
                    handleSuggestTagChange={this.handleSuggestTagChange}
                    initData={this.state}
                    handleSave={this.handleSave}
                    handleDelete={this.handleDelete}
                    hanleOnDelete={this.hanleOnDelete}
                    mode={this.props.mode}
                    deleteDisable={deleteDisable}
                    handleGoBack={this.handleGoBack}
                    confirmDelete={this.state.confirmDelete}
                    handleCloseConfirmDialog={this.handleCloseConfirmDialog}
                />
            )
        }
        else
        {
            return (
                <ProductFormPanelBlank
                    handleChangePortfolio={this.handleChangePortfolio}
                    handleTagChange={this.handleTagChange}
                    handleSuggestTagChange={this.handleSuggestTagChange}
                    initData={this.state}
                    handleSave={this.handleSave}
                    handleDelete={this.handleDelete}
                    mode={this.props.mode}
                    deleteDisable={deleteDisable}
                />
            )
        }
        
    }
}

export default connect(
    (state) => ({
        selectedProduct:state.productForm.get('productID')
    }),
    (dispatch) => ({
        HomeActions: bindActionCreators(homeActions, dispatch),
        ProductFormActions: bindActionCreators(productFormActions, dispatch),
        ProductListActions: bindActionCreators(productListActions, dispatch),
        BaseActions: bindActionCreators(baseActions, dispatch)
    })
)((ProductFormPanelContainer));