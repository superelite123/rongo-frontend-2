import { createAction, handleActions } from 'redux-actions';
import { Map } from 'immutable';
import { pender } from 'redux-pender';

import * as ProductAPI from 'lib/api/product';

const GET_PRODUCTS = 'product/GET_PRODUCTS';
const GET_PRODUCT_DETAIL = 'product/GET_PRODUCT_DETAIL'
const SHOW_PRODUCT_DETAIL = 'product/SHOW_PRODUCT_DETAIL'
const SHOW_PRODUCT_TYPE = 'product/SHOW_PRODUCT_TYPE'
const TOGGEL_LOADING_STATE = 'product/TOGGEL_LOADING_STATE'
const DELETE_PRODUCTS = 'product/DELETE_PRODUCTS'
const STAGE_PROUCT = 'product/STAGE_PROUCT'
export const getProducts = createAction(GET_PRODUCTS, ProductAPI.getProducts);
export const showProduct = createAction(SHOW_PRODUCT_DETAIL);
export const getProductDetail = createAction(GET_PRODUCT_DETAIL, ProductAPI.getProductDetail); // { email, password }
export const changeCurrentType = createAction(SHOW_PRODUCT_TYPE);
export const toggleLoadingState = createAction(TOGGEL_LOADING_STATE)
export const deleteProducts = createAction(DELETE_PRODUCTS,ProductAPI.deleteProducts)
export const stageProduct = createAction(STAGE_PROUCT,ProductAPI.stageProduct)
const initialState = Map({
    productList: null,
    showProduct: null,
    productDetail: null,
    currentType: 0,
    isLoading:true,
})

export default handleActions({
    [SHOW_PRODUCT_DETAIL]: (state, action) => {
        const product = action.payload
        state = state.set('showProduct',product)
        
        return state
    },
    [TOGGEL_LOADING_STATE]: (state, action) => {
        const isLoading = action.payload
        state = state.set('isLoading',isLoading)
        
        return state
    },
    [SHOW_PRODUCT_TYPE]: (state, action) => {
        const type = action.payload
        state = state.set('currentType',type)
        
        return state
    },
    ...pender({
        type: DELETE_PRODUCTS,
        onSuccess: (state, action) => {
            let productList = state.get('productList')
            const {IDs} = action.payload.data
            let updatedProducts = []
            productList.map((product) => {
                let isEqual = false
                IDs.forEach(id => {
                    if(id == product.id)
                    {
                        isEqual = true
                    }
                    
                })
                
                if(!isEqual) updatedProducts.push(product)
            })
            state = state.set('productList',updatedProducts);
            console.log(productList)
            return state         
        }
    }),
    ...pender({
        type: GET_PRODUCTS,
        onSuccess: (state, action) => {
            const products = action.payload.data;
            console.log(products)
            return state.set('productList', products)            
        }
    }),
    ...pender({
        type: GET_PRODUCT_DETAIL,
        onSuccess: (state, action) => {
            const { product } = action.payload.data;
            console.log(product)
            return state.set('productDetail', product)            
        }
    }),
    ...pender({
        type: STAGE_PROUCT,
        onSuccess: (state, action) => state.set('productList',state.get('productList').map(
            product => 
                product.id == action.payload.data.id?{...product,status:action.payload.data.status}:product
        ))
    })

}, initialState)