import React, { Component }from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import { actionCreators as loginActionCreators} from '../../pages/login/store';
import { Link } from 'react-router-dom';
import { 
    StyledHeader ,
    Logo,
    Nav,
    NavItem,
    SearchBar,
    ExtraBtns,
    Button,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoList,
    SearchInfoItem,
    SearchWrapper
} from './style';

class Header extends Component {
    render() {
        const { focused, inputFocus, inputBlur, list, login, logout } = this.props;
        return (
            <StyledHeader>
                <Link to='/'><Logo/></Link>
                <Nav>
                    <Link to='/'><NavItem className = 'left active'>Home</NavItem></Link>
                    <NavItem className = 'left'>Download</NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in = {focused}
                            timeout = {200}
                            classNames = "slide"
                        >
                            <SearchBar
                                className = {focused ? 'focused': ''}
                                onFocus = {() => inputFocus(list)}
                                onBlur = {inputBlur}
                            ></SearchBar>
                        </CSSTransition>
                        <span className = {focused ? 'focused iconfont magnifier': 'iconfont magnifier'}>&#xe614;</span>
                        { this.displayTopSearches () }
                    </SearchWrapper>
                       
                </Nav>
                <ExtraBtns>
                    {
                        login ? 
                        <NavItem onClick={logout} className='right reg'><Button className = 'reg'>Logout</Button></NavItem> : 
                        <Link to='/login'><NavItem className = 'right reg'><Button className = 'reg'>Login</Button></NavItem></Link>
                    }
                    <Button className = 'write'>
                        <span className="iconfont">&#xe615;</span>
                        Write Blog
                    </Button>
                    
                </ExtraBtns>
            </StyledHeader>
        )
    }

    displayTopSearches(){
        const { focused, list, page, totalPage, handleMouseEnter, handleMouseLeave, mouseIn, handleMoreClick } = this.props;
        const jsList = list.toJS();
        const pageList = [];
        if (jsList.length){
            for (let i = (page-1) * 10; i < page * 10; i++){
                pageList.push(
                    <SearchInfoItem key = {jsList[i]}>{jsList[i]}</SearchInfoItem>
                )
            }
        }
        if(focused || mouseIn){
            return(
                <SearchInfo 
                    onMouseEnter = {handleMouseEnter}
                    onMouseLeave = {handleMouseLeave}
                >
                            <SearchInfoTitle>
                                Top Searches
                                <SearchInfoSwitch onClick = {() => handleMoreClick(page, totalPage, this.spinIcon)}>
                                    <span ref = {(icon) => {this.spinIcon = icon}} className="iconfont spin">&#xe851;</span>
                                    More
                                </SearchInfoSwitch>
                                <SearchInfoList>
                                    {pageList} 
                                </SearchInfoList>
                            </SearchInfoTitle>
                        </SearchInfo>
            )
        }
        else{
            return null;
        }
    }
}

const mapStateToProps = (state) => {
    return{
        focused: state.get('header').get('focused'),
        list: state.getIn(['header','list']),
        page: state.getIn(['header','page']),
        totalPage: state.getIn(['header','totalPage']),
        mouseIn: state.getIn(['header','mouseIn']),
        login: state.getIn(['login','ifLogin'])
    }
}
const mapDispatchToProps= (dispatch) => {
    return{
        inputFocus(list){
            if (list.size === 0 ){
                dispatch(actionCreators.getList());
            }
            dispatch(actionCreators.searchFocus());
        },
        inputBlur(){
            dispatch(actionCreators.searchBlur());
        },
        handleMouseEnter(){
            dispatch(actionCreators.mouseEnter());
        },
        handleMouseLeave(){
            dispatch(actionCreators.mouseLeave());
        },
        handleMoreClick(page, totalPage, spin){
            let initAngle = spin.style.transform.replace(/[^0-9]/ig, '');
            if (initAngle){
                initAngle = parseInt(initAngle,10); 
            }else{
                initAngle = 0;
            }
            spin.style.transform = 'rotate('+ (initAngle + 360) +'deg)';
            if (page < totalPage){
                dispatch(actionCreators.moreClick(page + 1));
            }else{
                dispatch(actionCreators.moreClick(1));
            }
            
        },
        logout() {
            dispatch(loginActionCreators.logout())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps) (Header);