import { fromJS } from 'immutable';

const defaultState = fromJS({
    ifLogin: false
});

const reducer = (state = defaultState, action) => {
    switch(action.type){
        case 'change_login':
            return state.set('ifLogin', action.value);
        case 'logout':
            return state.set('ifLogin', action.value);
        default: 
            return state;
    }
}

export default reducer;