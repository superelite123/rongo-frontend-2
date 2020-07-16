import { createAction, handleActions } from 'redux-actions';
import { Map } from 'immutable';
import { pender } from 'redux-pender';

import * as ProductAPI from 'lib/api/product';

const GET_PRODUCTS = 'product/GET_PRODUCTS';
const SHOW_PRODUCT_DETAIL = 'product/SHOW_PRODUCT_DETAIL'

export const getProducts = createAction(GET_PRODUCTS, ProductAPI.getProducts); // { email, password }

const initialState = Map({
    productList: null,
    showProduct: null,
})

export default handleActions({
    [SHOW_PRODUCT_DETAIL]: (state, action) => {
        const product = action.payload
        state = state.set('showProduct',product)
        
        return state
    },
    ...pender({
        type: GET_PRODUCTS,
        onSuccess: (state, action) => {
            const { products } = action.payload.data;
            console.log(products)
            return state.set('productList', products)            
        }
    })
}, initialState)