import React, { Component } from 'react';
import Menu from 'components/Menu';

import 'components/Home/Home.scss';

class Home extends Component{
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <Menu />
          
          <div class="col-md-8 trailers">
            <div class="row p-4">
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;