import React from 'react';
import ReactDOM from 'react-dom';

import LatestMovieReviewsContainer from './components/LatestMovieReviewsContainer';
import SearchableMovieReviewsContainer from './components/SearchableMovieReviewsContainer';

ReactDOM.render(
  <div className="app">
    <SearchableMovieReviewsContainer />
    <LatestMovieReviewsContainer />
  </div>,
  document.getElementById('root')
);


//API Keys: https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=<0Eyaj8tXCdftSAUNAWFnpah70yFp3vV5>

// https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=<0Eyaj8tXCdftSAUNAWFnpah70yFp3vV5>&query=<search-term>