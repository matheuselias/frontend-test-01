import React from 'react';
import 'components/Video/Video.scss'

export default ({ trailer }) => {
  return (
    <div className="col-12 text-center">
      <iframe title={trailer.id.videoId} className="video" src={`https://www.youtube.com/embed/${trailer.id.videoId}`} allowFullScreen />
    </div>
  );
}