/* eslint-disable */
import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Layout from './layout/Index';
import Login from './layout/Login';
import './index.less';
import 'antd/dist/antd.css';

function AppRouter(props) {
  return (
    <Provider store={props.store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route path="/" component={Layout} />          
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default AppRouter;
