import React from 'react'
import {useState, useEffect} from 'react'
import BookSearch from './BookSearch'

function ReviewList() {
    const[reviews, setReviews] = useState([])
    const[book_review, setReview] = useState([])
    const[book, setBook] = useState([])
   
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
  // useEffect(() =>{
  //   fetch('http://localhost:8000/api/reviews/2', {
  //     method:'GET',
  //     // headers:{
  //     //   'Content-Type': 'application/json',
  //     // }
  //   })
  //   .then(resp => resp.json())
  //   .then(resp => setReview(resp))
  //   .catch(error => console.log(error))

  // }, [])


  // useEffect(() =>{
  //   fetch('http://localhost:8000/api/book', {
  //     method:'GET',
  //     // headers:{
  //     //   'Content-Type': 'application/json',
  //     // }
  //   })
  //   .then(resp => resp.json())
  //   .then(resp => setBook(resp))
  //   .catch(error => console.log(error))

  // }, [])
  // console.log(book)

//  console.log(reviews)
//  console.log(book_review)
 return (
        <div>
            {reviews && reviews.map(review =>{
                return(
                  
                    <div key={review.id}>
                        <p>{review.owner} wrote the following reviews: 
                        <li>{review.body}</li>
                         <li>{book.title}</li>
                        </p>
                        
                    </div>
                      )
            })}
        </div>
    )
}

export default ReviewList