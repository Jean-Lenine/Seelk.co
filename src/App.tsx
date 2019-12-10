import React from 'react';
import './App.css';
import CoinApi from './components/coinApi/coinApi'
import UserInfo from './components/userInfo/userInfo'
import Alert from './components/Alert/alert'

import { Provider } from 'react-redux';

import store from './redux/store.js';

const App: React.FC = () => {
  return (
      <div>
        <nav className="navbar navbar-dark bg-dark">
            <a className="navbar-brand" href="#">Crypto Alert</a>
          <Provider store={ store }>
            <UserInfo/>
          </Provider>
        </nav>
        <div className="container-fluid">
            <div className="row">
                <div className="col-3">
                    <Alert/>
                </div>
                <div className="col-9">
                    <CoinApi/>
                </div>
            </div>
        </div>
      </div>
  )
}

export default App;
