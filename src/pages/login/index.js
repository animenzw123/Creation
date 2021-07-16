import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { actionCreators }  from './store';
import { LoginWrapper, LoginBox, Input, Button } from './style';

class Login extends PureComponent {
    render(){
        const { ifLogin } = this.props;

        if (!ifLogin) {
            return(
                <LoginWrapper>
                    <LoginBox>
                        <Input className='acc' placeholder='Account' ref={(input) => {this.account = input}} />
                        <Input className='psw' placeholder='Password' type='password' ref={(input) => {this.password = input}}/>
                        <Button onClick={() => this.props.login(this.account, this.password)}>Login</Button>
                    </LoginBox>
                </LoginWrapper>
            )
        }else{
            return <Redirect to='/' />
        }

        
    }
}

const mapStateToProps = (state) => ({
    ifLogin: state.get('login').get('ifLogin')
})

const mapDispatchToProps = (dispatch) => ({
    login(accountElement, passwordElement){
        dispatch(actionCreators.login(accountElement.value, passwordElement.value))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);