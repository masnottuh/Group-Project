import React from 'react'
import {useState, useEffect} from 'react'
import { motion } from "framer-motion";
import { Link } from 'react-router-dom'
import Button from './Button'


function ReviewList() {
    
  const[reviews, setReviews] = useState([])
  
  useEffect(() =>{
    fetch('http://localhost:8000/api/reviews/', {
      method:'GET',
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
    transition={{ duration: .6 }}>

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
            <h3>{r.book} {r.book_title}</h3>
            <img src={require("../images/icons8-customer-48.png")} alt="user" />
            by {r.owner}• Reviewed on {(r.created.slice(0,10))}
            <em><p>{r.body}</p></em>
            <br></br>
            <h5>Comments:</h5>
            <div>{(r.review_comments).length === 0 ?'no comments yet':r.review_comments.map(comment =>
             <>
             <p>{comment}</p>
             </>
             )}<Link to="/Comment">
             <Button color="white">
                 <span>Leave a Comment</span>
             </Button>
           </Link></div>
             <hr></hr>
            </div>
          )
        })}
      </div>
    </motion.main>
  )
}

export default ReviewList