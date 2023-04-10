import React from 'react'
import {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import { COMMENT_URL, REVIEW_URL } from '../constants'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';


export default function Comment() {
  const navigate = useNavigate()
  const[reviews, setReviews] = useState([])
  const[review, setReview] = useState('')
  const[body, setBody] = useState('')
  const[errors, setErrors] = useState('')
  
 

  useEffect(() =>{
    fetch(REVIEW_URL, {
      method:'GET',
    })
    .then(resp => resp.json())
    .then(resp => setReviews(resp))
    .catch(error => console.log(error))

  }, [])
  // console.log(reviews)

  const allReviews = reviews.map(review => review.body)
  function handleChange(event) {
    console.log(event.target.value);
    setReview(event.target.value);
  }

  useEffect(() => {
    console.log("Value of review in State is: ", review);
  }, [review]);

  const handleSubmit = (e) => {
    e.preventDefault()
  const commentObject = {
    body: body,
    review: review
  }
  console.log("the comment object",commentObject)
  addComment(commentObject)
}
  
  const token = window.sessionStorage.getItem('token')
 const result = JSON.parse(token).token
 const base_url = COMMENT_URL


const addComment = async (commentObject) => {
    console.log(result)
    console.log(token)
    console.log(JSON.parse(token))
    // console.log("the comment object bellow",commentObject)
    const url = `${base_url}`
    const context = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization' : `Token ${result}`
       },
      body: JSON.stringify(commentObject)
    }
    console.log(context.body)
    const resp = await fetch(url, context)
    const body = await resp.json()
    console.log("Body",body)
    if (resp.status === 400) {
      setErrors(body)
    } else {
      navigate("/reviews")
    }
  }


  return (
    <div style = {{height:"110vh"}}> 
      <img width="500" className="rounded mx-auto d-block" src={require("../images/bc_logo.png")} alt="Book Club  Logo" />
      <h3 className='search-form'><em>Leave a comment</em></h3>
      {errors && <h4>{JSON.stringify(errors)}</h4>}
      
      <div className="form=group search-form" >
      <FloatingLabel       controlId="floatingSelect" label="Book titles">
        <Form.Select onChange={handleChange} aria-label="Floating label select example">
         <option>Choose a book review</option>
          {allReviews.map((review) => <option value={review}>{review}</option>)}
          <input type="text" className="form-control form_control-lg" placeholder="review..." value={review} name="review" onChange={(e) => setReview(e.target.value)}></input>          
       </Form.Select>
        <div className="search-form">
                <input type="text" className="form-control form_control-sm" placeholder="comment..." value={body} name="body" onChange={(e) => setBody(e.target.value)}></input>              
        </div>     
      </FloatingLabel>
    </div> 
      <div className='search-form'>
        <button className="search-button" onClick={handleSubmit}>Submit</button>
      </div>
  </div> 
)
}
