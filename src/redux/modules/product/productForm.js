import { createAction, handleActions } from 'redux-actions';
import { Map } from 'immutable';
import { pender } from 'redux-pender';

import * as ProductAPI from 'lib/api/product';

const SAVE_PROUCT = 'productForm/SAVE_PROUCT';
export const getProducts = createAction(SAVE_PROUCT, ProductAPI.getProducts);
const initialState = Map({
    selProduct: null,
})
export default handleActions({
    ...pender({
        type: SAVE_PROUCT,
        onSuccess: (state, action) => {
            const { products } = action.payload.data;
            console.log(products)
            return state.set('productList', products)            
        }
    }),

}, initialState)