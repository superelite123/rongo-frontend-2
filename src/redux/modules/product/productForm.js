import { createAction, handleActions } from 'redux-actions';
import { Map } from 'immutable';
import { pender } from 'redux-pender';

import * as ProductAPI from 'lib/api/product';

const SAVE_PROUCT = 'productForm/SAVE_PROUCT';
const SELECT_PRODUCT = 'productForm/SELECT_PRODUCT'
export const getProducts = createAction(SAVE_PROUCT, ProductAPI.getProducts);
export const selectProduct = createAction(SELECT_PRODUCT)
const initialState = Map({
    productID: null,
})
export default handleActions({
    [SELECT_PRODUCT]: (state, action) => state.set('productID',action.payload),
    ...pender({
        type: SAVE_PROUCT,
        onSuccess: (state, action) => {
            const { products } = action.payload.data;
            console.log(products)
            return state.set('productList', products)            
        }
    }),

}, initialState)