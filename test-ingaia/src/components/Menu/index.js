import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signout } from 'actions';

import 'components/Menu/Menu.scss';

class Menu extends Component {
  render() {
    return (
      <div class="col-md-4 menu">
        <div className="row text-center">
          <div className="col-6 col-md-12">
            <img className="mb-4 img-fluid logo" src="https://github.com/ingaia/frontend-test-01/blob/master/assets/logo_dark.png?raw=true" alt="" width="72" height="72" />
          </div>

          <div className="col-6 col-md-12 align-items-start">
            <div className="row btn-group">
              <div className="col-6 col-md-12">
                <button className="btn btn-trailer text-uppercase">trailers</button>
              </div>
              <div className="col-6 col-md-12">
                <button onClick={this.props.signout} className="btn btn-logout text-uppercase">logout</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { signout })(Menu);