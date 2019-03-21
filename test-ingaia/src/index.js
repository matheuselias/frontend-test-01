import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from 'components/App';
import Login from 'components/Login';

ReactDOM.render(
  <BrowserRouter>
    <App>
      <Switch>
        <Route path="/" exact component={Login} />
      </Switch>
    </App>
  </BrowserRouter>, 
  document.querySelector('#root')
);