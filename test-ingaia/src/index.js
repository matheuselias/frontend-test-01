import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Provider from 'Provider'
import App from 'components/App';
import Login from 'components/Login';
import Home from 'components/Home';
import requireAuth from 'components/requireAuth';

ReactDOM.render(
  <Provider>
    <BrowserRouter>
      <App>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/home" component={requireAuth(Home)} />
        </Switch>
      </App>
    </BrowserRouter>
  </Provider>,
  document.querySelector('#root')
);