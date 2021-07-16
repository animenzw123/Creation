import * as actionLib from './actionLib'
import { fromJS } from 'immutable';

const defaultState = fromJS({
    focused: false,
    mouseIn: false,
    list: [],
    page: 1,
    totalPage: 1

});
const reducer = (state = defaultState, action) => {
    switch(action.type){
        case actionLib.SEARCH_FOCUS:
            return state.set('focused', true);
        case actionLib.SEARCH_BLUR:
            return state.set('focused', false);
        case actionLib.CHANGE_LIST:
            //merge == multiple set
            return state.merge({
                list: action.data,
                totalPage: action.totalPage
            });
        case actionLib.MOUSE_ENTER:
            return state.set('mouseIn', true);
        case actionLib.MOUSE_LEAVE:
            return state.set('mouseIn', false);
        case actionLib.MORE_CLICK:
            return state.set('page', action.page);
        default: 
            return state;
    }
}
export default reducer;