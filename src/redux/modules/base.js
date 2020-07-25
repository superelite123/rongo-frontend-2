import { Map } from 'immutable';
import { handleActions, createAction } from 'redux-actions';

const SET_HEADER_VISIBILITY = 'base/SET_HEADER_VISIBILITY'; // 헤더 렌더링 여부 설정
const SET_PAGE_LOADING = 'base/SET_PAGE_LOADING'

export const setHeaderVisibility = createAction(SET_HEADER_VISIBILITY); // visible
export const setPageLoading = createAction(SET_PAGE_LOADING)
const initialState = Map({
    header: Map({
        visible: true
    }),
    pageLoading:false
});

export default handleActions({
    [SET_HEADER_VISIBILITY]: (state, action) => state.setIn(['header', 'visible'], action.payload),
    [SET_PAGE_LOADING]:(state,action) => state.set('pageLoading',action.payload)
}, initialState);