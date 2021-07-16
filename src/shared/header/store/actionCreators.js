import * as actionLib from './actionLib';
import { fromJS } from 'immutable';
import axios from 'axios';

export const searchFocus = () =>({
    type: actionLib.SEARCH_FOCUS
});

export const searchBlur = () => ({
    type: actionLib.SEARCH_BLUR
});

export const mouseEnter = () => ({
    type: actionLib.MOUSE_ENTER
});

export const mouseLeave = () => ({
    type: actionLib.MOUSE_LEAVE
});

export const moreClick = (page) => ({
    type: actionLib.MORE_CLICK,
    page: page
});

const changeList = (data) => ({
    type: actionLib.CHANGE_LIST,
    data: fromJS(data),
    totalPage: Math.ceil(data.length / 10)
})

export const getList = () => {
    return (dispatch) => {
        axios.get('/api/headerList.json').then((res) => {
            const data = res.data;
            dispatch(changeList(data.data));
        }).catch (()=>{
            console.log('error');
        })
    }
}