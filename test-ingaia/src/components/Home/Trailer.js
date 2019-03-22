import React from 'react';

export default ({ trailer, getTrailer }) => {
  return (
    <div class="col-md-6 mb-4">
      <div class="trailer-card">
        <img 
          onClick={() => getTrailer(trailer.snippet.title)} 
          src={trailer.snippet.thumbnails.high.url} 
          class="card-img" 
          alt={trailer.snippet.title}
        />
      </div>
    </div>
  );
}