import { fromJS } from 'immutable';




const defaultState = fromJS({
    articleList: [],
    articlePage: 1 ,
    showScroll: false
});

const reducer = (state = defaultState, action) => {
    switch(action.type){
        case 'update_home_data':
            return state.merge({
                'articleList': fromJS(action.articleList)
            });
        case 'more_home_data':
            return state.merge({
                'articleList': state.get('articleList').concat(action.list),
                'articlePage': action.nextPage
            });
        case 'scroll_top_show':
            return state.set('showScroll', action.ifShow);
        default: 
            return state;
    }
}
export default reducer;