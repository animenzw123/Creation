import styled from 'styled-components';
import logoSrc from '../../images/logo.png';

export const StyledHeader = styled.div`
    z-index: 1;
    position: relative;
    height: 58px;
    border-bottom: 1px solid #f0f0f0;
`;

export const Logo = styled.div`
    position: absolute;
    margin-top: 10px;
    margin-left: 20px;
    height: 40px;
    width: 100px;
    display: block;
    background: url(${logoSrc});
    background-size: contain;
`;

export const Nav = styled.div`
    width: 960px;
    height: 100%;
    margin: 0 auto;
    padding-right: 70px;
    box-sizing: border-box;
`;

export const NavItem = styled.div`
    line-height: 56px;
    padding: 0 15px;
    font-size: 17px;
    color: #333;
    &.left{
        float:left;
    }
    &.right{
        float:right;
        color: #969696
    }
    &.active{
        color: orange;
    }
`;

export const SearchWrapper = styled.div`
    float: left;
    position: relative;
    .magnifier{
        position: absolute;
        right: 5px;
        bottom: 5px;
        width: 30px;
        border-radius: 15px;
        line-height: 30px;
        text-align: center;
        &.focused {
            background: #777;
            color: #fff;
        }
    }


`

export const SearchBar = styled.input.attrs({
    placeholder: 'Search'
})`
    width: 160px;
    height: 38px;
    padding: 0 30px 0 20px;
    margin-top: 9px;
    margin-left: 20px;
    border: none;
    box-sizing: border-box;
    outline: none;
    border-radius: 19px;
    background: #eee;
    font-size: 15px;
    color: #666;
    &::placeholder{
        color: #999;
    }
    &.focused{
        width: 240px;   
    }
    &.slide-enter{
        width: 160px;
        transition: all .2s ease-out;
    }
    &.slide-enter-active{
        width: 240px; 
    }
    &.slide-exit {
        transition: all .2s ease-out;
    }
    &.slide-exit-active{
        width: 160px;
    }
`;

export const SearchInfo = styled.div`
    position: absolute;
    left: 0;
    top: 58px;
    width: 240px;
    padding: 0 20px;
    box-shadow: 0 0 8px rgba(0, 0, 0, .2);
    background: #fff;
`;

export const SearchInfoTitle = styled.div`
    margin-top: 20px;
    margin-bottom: 15px;
    line-height: 20px;
    font-size: 14px;
    color: #969696;
`;

export const SearchInfoSwitch = styled.span`
    font-size: 13px;
    float: right;
    cursor: pointer;
    .spin {
        display: block;
        float: left;
        font-size: 12px;
        margin-right: 2px;
        transition: all .4s ease-in;
        transform-origin: center center;
    }
`;

export const SearchInfoList = styled.div`
    margin-top: 10px;
    overflow: hidden;
`;

export const SearchInfoItem = styled.a`
    display: block;
    float: left;
    font-size: 12px;
    line-height: 20px;
    padding: 0 5px;
    margin: 3px;
    border: 1px solid #ddd;
    color: #787878;
    border-radius: 3px;
`;

export const ExtraBtns = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    height: 58px;
`;

export const Button = styled.div`
    float: right;
    margin-top: 9px;
    margin-right: 20px;
    padding: 0 20px;
    line-height: 38px;
    border-radius: 19px;
    font-size: 14px;
    border: 1px solid #ec6149;
    &.reg {
        color: #ec6149;
    } 
    &.write {
        color: #fff;
        background: #ec6149;
    }
`;