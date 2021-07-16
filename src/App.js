import React, { Component } from 'react';
import { GlobalStyle } from './style';
import { GlobalIcon } from './images/iconfont/iconfont.js';
import Header from './shared/header/index.js';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/index';
import Home from './pages/home/index';
import Detail from './pages/detail/loadable.js';
import Login from './pages/login/index'

class App extends Component {
    render(){
      return (
        <Provider store={store}>
          <div>
            <GlobalStyle/>
            <GlobalIcon/>
            <BrowserRouter>
            <Header />
              <div>
                <Route path='/' exact component = {Home}></Route>
                <Route path='/login' exact component = {Login}></Route>
                <Route path='/detail/:id' exact component = {Detail}></Route>
              </div>
            </BrowserRouter>
          </div>
        </Provider>
      )
    }
  }

export default App;
