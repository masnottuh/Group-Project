import React from 'react'
import {useState, useEffect} from 'react'
import { motion } from "framer-motion";
import { Link, useParams, useNavigate } from 'react-router-dom'
import Button from './Button'
import { REVIEW_URL } from '../constants';
import { Chat } from "react-bootstrap-icons";
// import axios from 'axios'

function ReviewList() {
    
  const[reviews, setReviews] = useState([])

//   const [ review, setReview] = useState(null);
// const {id} = useParams()
// const navigate = useNavigate()

// useEffect(() => {
//       getReview()
//     }, [id])

// const getReview = async() =>{

//   const token = window.sessionStorage.getItem('token')
//   console.log(token)
//   const result = JSON.parse(token).token
  
//   const response = await fetch(`http://127.0.0.1:8000/api/reviews/${id}`, {
//     method: "GET",
//     headers: {
//     'Content-Type': 'application/json',
//     'Authorization': `Token ${result}`
//     }
//   })
//   const data = await response.json()
//   setReview(data)
// }
// const token = window.sessionStorage.getItem('token')
// const result = JSON.parse(token).token
// console.log(token)
// const headers = { 
//   'Authorization':`Token ${result}`,
 
// };

// function deleteReview(id){  
//   axios.delete(`http://127.0.0.1:8000/api/reviews/${id}`,{headers})  
//     .then(res => {  
//       console.log(res);  
//       console.log(res.data);  
//       navigate('/Reviews')
//     })
   
//   }
  
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
              <em><p className="review-text">{(r.body.split(", ")[0])}...</p></em>
             
            {/* <br></br> */}
            <div>
              <h5>Comments:</h5>
              <div>{(r.review_comments).length === 0 ?'no comments yet':r.review_comments.map(comment =>
                <><p>{comment}</p></>)}
                <Link to="/Comments">
                  <div className = "review-button">
                    <button className="chat-button">
                    <Chat className="chat" size="40"/>
                    </button>
                  </div>
                </Link>
                <Link className="search-form" to={`/${r.id}/`}>Read full review</Link>
              </div>
              <hr className="hr-edit"></hr>
            </div>
            <br></br>
            </div>
          )
        })}
        </div>
    </motion.main>
  )
}

export default ReviewList