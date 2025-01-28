import React from 'react'



const ReviewCard = ({ review }) => {

    //stars.push(<i key={i} className="fa-solid fa-star"></i>)
    // } else {
    //stars.push(<i key={i} className="fa-regular fa-star"></i>)
    // }
    const getStars = () => {
        const vote = review.vote
        let stars = []
        for (let i = 0; i < 5; i++) {
            if (i < vote) {
                stars.push("★")
            }
        } return stars
    }

    return (
        <div className="card-reviewCard">
            <div className="card-body-reviewCard">
                <h2>Reviews</h2>
                <h4><strong>Scritto da</strong>: {review.name}</h4>
                <p>Vote: {review.vote} <span>{getStars()}</span></p>
                {/* stars */}
                {/* <div>
                {[1,2,3,4,5].map((star) => (
                    <span onClick={}><i key={i} className="fa-regular fa-star">&#9733</i></span>
                ))}
            </div> */}
                <p>{review.text}</p>
            </div>
        </div>
    )
}

export default ReviewCard