import { Map } from 'immutable';
import { handleActions, createAction } from 'redux-actions';
import { pender } from 'redux-pender';

const initialState = Map({
    email: '',
    password: '',
    error: null,
    login1:null,
    result:null
});

export default handleActions({
    ...pender({
        
    })
}, initialState)