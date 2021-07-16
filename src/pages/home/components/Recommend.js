import React, { PureComponent } from 'react';
import { RecommendWrapper, RecommendItem } from '../style';
import exclusive from '../../../images/exclusive.png';
import membership from '../../../images/membership.png';
import seletedArticles from '../../../images/selectedArticles.png';
import weeklyTopic from '../../../images/weekly_topic.png';


class Recommend extends PureComponent {
    render(){
        return(
            <RecommendWrapper>
                <RecommendItem imgSrc = {seletedArticles} />
                <RecommendItem imgSrc = {membership} />
                <RecommendItem imgSrc = {exclusive} />
                <RecommendItem imgSrc = {weeklyTopic} />
                
            </RecommendWrapper>
        )
    }
}


export default Recommend;