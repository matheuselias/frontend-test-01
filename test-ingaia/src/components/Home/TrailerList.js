import React, { Component } from 'react';
import Trailer from 'components/Home/Trailer';

export default class TrailerList extends Component {
  renderTrailer = () => {
    if (this.props.trailers.length) {
      return this.props.trailers.map(trailer => {
        return (
          <Trailer key={trailer.snippet.resourceId.videoId} trailer={trailer} getTrailer={this.props.getTrailer} />
        );
      })
    }
  }
  render() {
    return (
      <div className="col-md-8 trailers">
        <div className="row p-4">
          {this.renderTrailer()}
          <div className="col-md-4 mx-auto mt-5">
            <button className="btn btn-trailer text-uppercase" onClick={this.props.getTrailers}>load more</button>
          </div>
        </div>
      </div>
    );
  }
}
