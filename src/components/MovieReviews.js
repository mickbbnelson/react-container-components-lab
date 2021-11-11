// Code MovieReviews Here
import React from "react";

const MovieReviews = (props) => 
    <div className="review-list">
        <ul>
            {props.reviews.map((m, i) => <li key={i} className="review">{m.display_title}</li>)}
        </ul>
    </div>

export default MovieReviews