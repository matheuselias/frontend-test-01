import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signin } from 'actions';

import 'components/Login/Login.scss';

class Login extends Component {
  handleSubmit = (event) => {
    event.preventDefault();

    this.props.signin(() => {
      this.props.history.push('/home');
    });
  }

  render() {
    return (
      <div className="container-fluid text-center">
        <div className="row align-items-center">
          <div className="col-12">
            <form onSubmit={this.handleSubmit} className="form-signin">
              <div>
                <img className="mb-4 img-fluid" src="/logo_dark.png" alt="logo" />
              </div>

              <div>
                <label>Email</label>
                <input type="email" id="inputEmail" className="form-control" />
                <label>Password</label>
                <input type="password" id="inputPassword" className="form-control" />
                <button className="btn btn-login text-uppercase">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { signin })(Login);