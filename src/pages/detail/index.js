import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { DetailWrapper, DetailTitle, Content } from './style';
import { actionCreators } from './store';
import { withRouter } from 'react-router-dom';


class Detail extends PureComponent {
    render(){
        return(
            <DetailWrapper>
                <DetailTitle>{this.props.title}</DetailTitle>
                <Content dangerouslySetInnerHTML={{__html: this.props.content}}/>
            </DetailWrapper>
        )
    }

    componentDidMount(){
        this.props.getDetail(this.props.match.params.id);
    }

}

const mapStateToProps = (state) => ({
    title: state.get('detail').get('title'),
    content: state.get('detail').get('content')
})

const mapDispatchToProps = (dispatch) => ({
    getDetail(id){
        dispatch(actionCreators.getDetail(id))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Detail));