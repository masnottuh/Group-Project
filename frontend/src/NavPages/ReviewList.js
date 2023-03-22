import React from 'react'
import {useState, useEffect} from 'react'
// import Book from './Book'
// import Comment from './Comment'

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
  // function get_comment(arr){
  //   for(let i =0; i< arr.length; i++){
  //       return i
  //   }
  // }
  
      
     

  return (
    <div>
     {/* <Book /> */}
     {/* <Comment/> */}
     <h1>Book Club Reviews</h1>
     <hr></hr>
      {reviews && reviews.map(r =>{
        return(
          <div key={r.id}>
            <h3>Reviews for {r.book}:</h3>
            <li>{r.body}</li>
            <br></br>
           <h5>Comments:</h5>
               <li>{r.review_comments}</li>
            <hr></hr>
          </div>
          )
        })}
    </div>
  )
}

export default ReviewList