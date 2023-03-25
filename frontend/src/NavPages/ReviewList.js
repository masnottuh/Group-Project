import React from 'react'
import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import NewReview from './NewReview'

function ReviewList() {
    
  const[reviews, setReviews] = useState([])
  
  useEffect(() =>{
    fetch('http://localhost:8000/api/reviews/', {
      method:'GET',
      // headers:{
      //   'Content-Type': 'application/json',
      // }
    })
    .then(resp => resp.json())
    .then(resp => setReviews(resp))
    .catch(error => console.log(error))

  }, [])

  return (
    
    <div>
      <img className="rounded mx-auto d-block" src={require("../images/bc_logo.png")} alt="Book Club Logo" width="500"/>
      <h1 className="review-title">Book Club Reviews</h1>
      <hr></hr>
      
      <h2 className="review-title">Review your favorite book</h2>
      <div className="search-form">
        <Link to="/New">
          <Button color="white">
              <span>Review</span>
          </Button>
        </Link>
        </div>
      <hr></hr>
      
      {reviews && reviews.map(r =>{
        return(
          <div className= "review-page"key={r.id}>
            <h3>Reviews for {r.book} {r.book_title}:</h3>
            <li><em>{r.owner} writes:</em><p>{r.body}</p></li>
            <br></br>
            <h5>Comments:</h5>
             <div>{(r.review_comments).length === 0 ?'no comments yet':r.review_comments.map(comment =><p>{comment}</p>)}</div>
            <hr></hr>
       
          </div>
          )
        })}
    </div>
  )
}

export default ReviewList