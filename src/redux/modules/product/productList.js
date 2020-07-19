import { createAction, handleActions } from 'redux-actions';
import { Map } from 'immutable';
import { pender } from 'redux-pender';

import * as ProductAPI from 'lib/api/product';

const GET_PRODUCTS = 'product/GET_PRODUCTS';
const GET_PRODUCT_DETAIL = 'product/GET_PRODUCT_DETAIL'
const SHOW_PRODUCT_DETAIL = 'product/SHOW_PRODUCT_DETAIL'
const SHOW_PRODUCT_TYPE = 'product/SHOW_PRODUCT_TYPE'

export const getProducts = createAction(GET_PRODUCTS, ProductAPI.getProducts);
export const showProduct = createAction(SHOW_PRODUCT_DETAIL);
export const getProductDetail = createAction(GET_PRODUCT_DETAIL, ProductAPI.getProductDetail); // { email, password }
export const changeCurrentType = createAction(SHOW_PRODUCT_TYPE);

const initialState = Map({
    productList: null,
    showProduct: null,
    productDetail: null,
    currentType: 0
})

export default handleActions({
    [SHOW_PRODUCT_DETAIL]: (state, action) => {
        const product = action.payload
        state = state.set('showProduct',product)
        
        return state
    },
    [SHOW_PRODUCT_TYPE]: (state, action) => {
        const type = action.payload
        state = state.set('currentType',type)
        
        return state
    },
    ...pender({
        type: GET_PRODUCTS,
        onSuccess: (state, action) => {
            const { products } = action.payload.data;
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
    })

}, initialState)