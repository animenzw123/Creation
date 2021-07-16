import styled from 'styled-components';

export const LoginWrapper = styled.div`
    z-index: 0;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 56px;
    background: #eee;
`

export const LoginBox = styled.div`
    width: 400px;
    height: 250px;
    margin: 100px auto;
    padding-top: 100px;
    background: #fff;
    box-shadow: 0 0 12px rgba(0,0,0,.1);
`

export const Input = styled.input`
    display: block;
    width: 200px;
    height: 35px;
    line-height: 35px;
    margin: 0 auto;
    padding: 0 10px;
    color: #777;
    border: 1px solid #eee;
    &.acc{
        border-radius: 5px 5px 0 0;
    }
    &.psw{
        border-radius: 0 0 5px 5px;
    }
`

export const Button = styled.button`
    display: block;
    width: 220px;
    height: 35px;
    line-height: 30px;
    margin: 30px auto;
    text-align: center;
    color: #fff;
    background: #3194d0;
    border: 1px solid #eee;
    border-radius: 15px;
`