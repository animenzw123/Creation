import axios from 'axios';

const changeDetail = (title, content) => ({
    type: 'change_detail',
    title,
    content
})

export const getDetail = (id) => {
    if (id == 1){
        return(dispatch) => {
            axios.get('/api/detail1.json?id=' + id).then((res) => {
                const result = res.data.data;
                dispatch(changeDetail(result.title,result.content))
            })
        }
    }
    if (id == 2){
        return(dispatch) => {
            axios.get('/api/detail2.json?id=' + id).then((res) => {
                const result = res.data.data;
                dispatch(changeDetail(result.title,result.content))
            })
        }
    }
    if (id == 3){
        return(dispatch) => {
            axios.get('/api/detail3.json?id=' + id).then((res) => {
                const result = res.data.data;
                dispatch(changeDetail(result.title,result.content))
            })
        }
    }
    else {
        return(dispatch) => {
            axios.get('/api/detail4.json?id=' + id).then((res) => {
                const result = res.data.data;
                dispatch(changeDetail(result.title,result.content))
            })
        }
    }
}