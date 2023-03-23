import React from 'react'
import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'

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
    <motion.main
   className="main__container"
   initial={{ width: 0 }}
    animate={{ width: "100%" }}
    exit={{ x: "100%", opacity: 0 }}
    transition={{ duration: 2 }}>
    <div>
      <img className="rounded mx-auto d-block" src={require("../images/bc_logo.png")} alt="Book Club Logo" width="500"/>
      <h1 className="review-title">Book Club Reviews</h1>
      <hr></hr>
      {reviews && reviews.map(r =>{
        return(
          <div className= "review-page"key={r.id}>
            <h3>Reviews for {r.book}:</h3>
            <li>{r.body}</li>
            <br></br>
            <h5>Comments:</h5>
             <p>{(r.review_comments).length === 0 ?'no comments yet':r.review_comments.map(comment =><p>{comment}</p>)}</p>
            <hr></hr>
          </div>
          )
        })}
        <p className="paragraph"><em>What do you think?</em></p>
        <div className='search-form'>
          <Link to="/New">
        <Button>Write a review</Button>
        </Link>
        </div>
    </div>
    </motion.main>
  )
}

export default ReviewList