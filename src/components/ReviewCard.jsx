import React from 'react'


const ReviewCard = ({ review }) => {
    return (
        <div className="card-reviewCard">
            <div className="card-body-reviewCard">
                <h2>Reviews</h2>
                <h4>Scritto da: {review.name}</h4>
                <p>Vote: {review.vote}</p>
                <p>{review.text}</p>
            </div>
        </div>
    )
}

export default ReviewCard