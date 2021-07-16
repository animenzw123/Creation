import styled from 'styled-components';

export const HomeWrapper = styled.div`
    overflow: hidden;
    width: 960px;
    margin: 0 auto;
`;

export const HomeWrapperLeft = styled.div`
    float: left;
    margin-left: 15px;
    padding-top: 30px;
    width: 625px;
    .banner-img{
        height: 310px;
        width: 625px;
    }
`;

export const HomeWrapperRight = styled.div`
    width: 280px;
    float: right;
`;
export const TopicWrapper = styled.div`
    overflow: hidden;
    padding: 20px 0 10px 0;
    margin-left: -18px;
`;
export const TopicItem = styled.div`
    float: left;
    height: 32px;
    line-height: 32px;
    background: #f7f7f7;
    font-size: 14px;
    color: #000;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    padding-right: 10px;
    margin-left: 18px;
    margin-bottom: 18px;
    .topic-img {
        display: block;
        float: left;
        width: 32px;
        height: 32px;
        margin-right: 10px;
    }
`;

// Article List component
export const ListItem = styled.div`
    border-top: 1px solid #dcdcdc;
    overflow: hidden;
    padding: 20px 0;
    border-bottom: 1px solid #dcdcdc;
    .list-pic {
        display: block;
        float: right;
        width: 125px;
        height: 100px;
        border-radius: 10px;
    }
`;

export const ListInfo = styled.div`
    width: 490px;
    float: left;
    .title {
        line-height: 27px;
        font-size: 18px;
        font-weight: bold;
        color: #333;
    }
    .desc {
        font-size: 13px;
        line-height: 24px;
        color: #999;
        word-break: normal;
    }
`;

// Recommend component
export const RecommendWrapper = styled.div`
    width: 280px;
    margin: 30px 0;
`;
export const RecommendItem = styled.div`
    width: 280px;
    height: 50px;
    background: url(${(props) => props.imgSrc});
    background-size: contain;
`;


export const WrittersWrapper = styled.div`
    overflow: hidden;
    width: 276px;
    text-align: center;
    border: 1px solid #eee;
    border-radius: 10px;
`;


export const WritterInfo = styled.div`
    float: left;
    width: 150px;
    height: 50px;
`;

export const WritterTitle = styled.div`
    overflow: hidden;
    width: 276px;
    height: 30px;
    padding: 0 10px;
    .leftTitle{
        margin-top 8px;
        display:block;
        float: left;
    }
    .rightTitle{
        float: right;
        font-size: 10px;
        color: #888;
        margin-right: 20px;
        margin-top: 8px;
        cursor: pointer;
    }
`;


export const WritterItem = styled.div`
    float: left;
    width: 260px;
    height: 50px;
    line-height: 100%;
    margin: 8px;
    border: 1px solid #eee;
    border-radius: 25px;
    img {
        float: left;
        width: 50px;
        height: 50px;
        margin-right: 10px;
        border-radius: 25px;
        cursor: pointer;
    }
    .writter {
        margin-top: 5px;
        font-size: 20px;
        font-weight: bold;
        text-align: left;
        cursor: pointer;
    }
    .followers {
        margin-top: 8px;
        text-align: left;
        font-size: 15px;
        color: #888;
    }
    .addFollow{
        float: right;
        width: 50px;
        height: 50px;
        font-size: 30px;
        line-height: 50px;
        cursor: pointer;
    }
`;



export const LoadMore = styled.div`
    width: 100%;
    height: 40px;
    border-radius: 20px;
    color: #eee;
    background: #a5a5a5;
    margin: 30px 0;
    line-height: 40px;
    text-align: center;
    cursor: pointer;
`;

export const BackToTop = styled.div`
    position: fixed;
    right: 100px;
    bottom: 100px;
    width: 60px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    background: #eee;
    border: 1px solid #ccc;
    border-radius: 5px
`;

