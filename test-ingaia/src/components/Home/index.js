import React, { Component } from 'react';
import Menu from 'components/Menu';
import { connect } from 'react-redux';
import { getTrailers, getTrailer } from 'actions';
import { Modal } from 'components/common';

import 'components/Home/Home.scss';
import TrailerList from 'components/Home/TrailerList';
import Video from 'components/Video';

class Home extends Component{
  state = {
    showModal: false
  }

  hideModal = () => {
    this.setState({ showModal: false });
  }

  componentDidMount() {
    this.props.getTrailers();
  }

  getTrailer = (name) => {
    this.props.getTrailer(name);
    this.setState({ showModal: true })
  }

  renderVideo = () => {
    const { trailer } = this.props;
    if (trailer) {
      return <Video trailer={trailer} />
    }
  }

  getTrailers = () => {
    this.props.getTrailers(this.props.total + 5);
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <Menu getTrailers={this.getTrailers} />
          <TrailerList getTrailer={this.getTrailer} getTrailers={this.getTrailers} trailers={this.props.trailers} />
        </div>
        <Modal show={this.state.showModal} handleClose={this.hideModal}>
          {this.renderVideo()}
        </Modal>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { 
    trailers: state.trailer.trailers,
    trailer: state.trailer.trailer,
    total: state.trailer.total
  };
}

export default connect(mapStateToProps, { getTrailers, getTrailer })(Home);