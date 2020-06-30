import { createAction, handleActions } from 'redux-actions';

import { Map } from 'immutable';

const CHANGE_INPUT = 'login/CHANGE_INPUT'; // input 값 변경
const INITIALIZE_FORM = 'login/INITIALIZE_FORM'; // form 초기화

export const changeInput = createAction(CHANGE_INPUT); //  { form, name, value }
export const initializeForm = createAction(INITIALIZE_FORM); // form 

const initialState = Map({
    email: '',
    password: ''
});

export default handleActions({
    [CHANGE_INPUT]: (state, action) => {
        const { name, value } = action.payload;
        return state.set(name, value);
    },
    [INITIALIZE_FORM]: (state, action) => {
        return state.set(initialState);
    }
}, initialState);