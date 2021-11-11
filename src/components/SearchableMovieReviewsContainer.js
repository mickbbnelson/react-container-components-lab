import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '0Eyaj8tXCdftSAUNAWFnpah70yFp3vV5';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {

    state = {
        reviews: [],
        searchTerm: ""
    }

    handleSearchChange = (event) => {
        this.setState({
          searchTerm: event.target.value
        })
    }
    
    handleSubmit(event) { 
    event.preventDefault();      
    fetch(URL + `&query=${this.state.searchTerm}`)
    .then((r) => r.json())
    .then((data) => this.setState({
        reviews: data.results
    }))
    }
    
        //Make sure "onsubmit" is a callback function
    render() {
        return (
        <div className="search-movie-reviews">  
        <form onSubmit={event => this.handleSubmit(event)}>
        <label>Movie Search:
        <input type="text" id="movie" name="movie" onChange={event => this.handleSearchChange(event)} value={this.state.searchTerm} />
        </label>
        <button type="submit">Search</button>
        </form>
            <div>
            <MovieReviews reviews={this.state.reviews} />
            </div>
        </div> )    
    }
}


//onChange={event => this.handleSearchChange(event)} value={this.state.searchTerm}