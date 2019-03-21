import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'components/App/App.scss';

export default class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        {this.props.children}
      </div>
    )
  }
}