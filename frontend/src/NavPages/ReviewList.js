import React from 'react'
import {useState, useEffect} from 'react'
import { motion } from "framer-motion";
import { Link } from 'react-router-dom'
import Button from './Button'
import { REVIEW_URL } from '../constants';
import { Chat } from "react-bootstrap-icons";



function ReviewList() {
    
  const[reviews, setReviews] = useState([])
  
  useEffect(() =>{
    fetch(REVIEW_URL, {
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
      <hr></hr>
      
      <h5 className="review-title">Share your thoughts with your bookies!</h5>
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
            <em><p className="review-text">{r.body}</p></em>
            <br></br>
            <div>
            <h5>Comments:</h5>


            <div>{(r.review_comments).length === 0 ?'no comments yet':r.review_comments.map(comment =>
             <>
             <p>{comment}</p>
             </>
             )}
             {/* <br></br> */}
             <Link to="/Comments">
            <div className = "review-button">
             <button className="chat-button">
             <Chat className="chat" size="40"/>
             {/* <span>Leave a Comment</span> */}
             </button>
            </div>
             </Link>
           </div>
             <hr className="hr-edit"></hr>
            </div>
            </div>
          )
        })}
        </div>
    </motion.main>
  )
}

export default ReviewList