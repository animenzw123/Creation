import axios from 'axios';
import { fromJS } from 'immutable';

const changeHomeData = (result) => ({
    type: 'update_home_data',
    topicList: result.topicList,
    articleList: result.articleList
});

export const getHomeData = () => {
    return (dispatch) => {
        axios.get('/api/home.json').then((res)=>{
            const result = res.data.data;
            const action = changeHomeData(result);
            dispatch(action);
        })
    }
};

const moreHomeList = (list, nextPage) => ({
    type: 'more_home_data',
    list: fromJS(list),
    nextPage
});

export const getMoreList = (page) => {
    return (dispatch) => {
        axios.get('/api/moreList.json?page=' + page).then((res)=>{
            const result = res.data.data;
            const action = moreHomeList(result, page + 1);
            dispatch(action);
        })
    }
};

export const scrollTopShow = (ifShow) => ({
    type: 'scroll_top_show',
    ifShow
});