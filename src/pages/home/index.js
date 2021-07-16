import React, { PureComponent } from 'react';
import List from './components/List';
import Recommend from './components/Recommend';
import Writers from './components/Writers';
import { actionCreators } from './store'
import { connect } from 'react-redux';
import { HomeWrapper, HomeWrapperLeft, HomeWrapperRight, BackToTop } from './style';


class Home extends PureComponent {
    render(){
        return(
            <HomeWrapper>
                <HomeWrapperLeft>
                    <img className = 'banner-img' src='https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2624095848,4048078752&fm=26&gp=0.jpg' alt=''></img>
                    <List></List>
                </HomeWrapperLeft>
                
                <HomeWrapperRight>
                    <Recommend></Recommend>
                    <Writers></Writers>
                </HomeWrapperRight>
                {this.props.showScrollBtn ? <BackToTop onClick={this.scrollToTop}>TOP</BackToTop>:null}
                
            </HomeWrapper>
        )
    }
    componentDidMount(){
        this.props.changeHomeData();
        this.bindEvents();
    }

    componentWillUnmount(){
        window.removeEventListener('scroll', this.props.changeScrollTopShow)
    }

    bindEvents(){
        window.addEventListener('scroll', this.props.changeScrollTopShow)
    }

    

    scrollToTop(){
        window.scrollTo({
            left: 0,
            top: 0,
            behavior: 'smooth'
        });
    }
}

const mapStateToProps = (state) => ({
    showScrollBtn: state.get('home').get('showScroll')
})

const mapStateDispatch = (dispatch) => ({
    changeHomeData(){
        const action = actionCreators.getHomeData();
        dispatch(action);
    },
    changeScrollTopShow(){
        if (document.documentElement.scrollTop > 100){
            dispatch(actionCreators.scrollTopShow(true))
        }else{
            dispatch(actionCreators.scrollTopShow(false))

        }
    }
});
export default connect(mapStateToProps, mapStateDispatch)(Home);