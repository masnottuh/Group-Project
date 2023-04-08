import React from 'react'
import {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import { COMMENT_URL, REVIEW_URL } from '../constants'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';


export default function Comment() {
  const navigate = useNavigate()
  // const{id} = useParams()

  // const[comments, setComments] = useState([])
  const[reviews, setReviews] = useState([])
  const[comment_body, setBody] = useState('')
  const[review_body, setReviewBody] = useState('')
  const[errors, setErrors] = useState("")

  useEffect(() =>{
    fetch(REVIEW_URL, {
      method:'GET',
    })
    .then(resp => resp.json())
    .then(resp => setReviews(resp))
    .catch(error => console.log(error))

  }, [])
  console.log(reviews)

  const allReviews = reviews.map(review => review.body)
  function handleChange(event) {
    console.log(event.target.value);
    setReviewBody(event.target.value);
  }

  useEffect(() => {
    console.log("Value of body in State is: ", comment_body);
  }, [comment_body]);
  
  const handleSubmit = (e) => {
    e.preventDefault()
   
    const commentObject = {
      comment_body: comment_body,
      review_body: review_body
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
    console.log("the comment object bellow",commentObject)
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
//   const handleSubmit = (e) => {
//     e.preventDefault()
//   const commentObject = {
//     body: body,
//     review_body: review_body
//   }
//   console.log("the comment object",commentObject)
//   addComment(commentObject)
// }

  return (
    <div style = {{height:"110vh"}}> 
      <img width="500" className="rounded mx-auto d-block" src={require("../images/bc_logo.png")} alt="Book Club  Logo" />
      <h3 className='search-form'><em>Leave a comment</em></h3>
      {errors && <h4>{JSON.stringify(errors)}</h4>}
      
      <div className="form=group search-form" >
      <FloatingLabel       controlId="floatingSelect" label="Book titles">
        <Form.Select onChange={handleChange} aria-label="Floating label select example">
         <option>Choose a book review</option>
          {allReviews.map((review_body) => <option value={review_body}>{review_body}</option>)}
          <input type="text" className="form-control form_control-lg" placeholder="review..." value={review_body} name="book_title" onChange={(e) => setReviewBody(e.target.value)}></input>          
              {/* <select onChange={handleChange}> 
                <option value="Select a title"> -- Select a title -- </option>
                {allTitles.map((book_title) => <option value={book_title}>{book_title}</option>)}
              </select> */}
        </Form.Select>
        <div className="search-form">
                <input type="text" className="form-control form_control-sm" placeholder="comment..." value={comment_body} name="body" onChange={(e) => setBody(e.target.value)}></input>              
        </div>     
      </FloatingLabel>
    </div> 
      <div className='search-form'>
        <button className="search-button" onClick={handleSubmit}>Submit</button>
      </div>
  </div> 
)
}



//   return (
//       <div style = {{height:"110vh"}}>
//         {/* <img width="500" className="rounded mx-auto d-block" src={require("../images/bc_logo.png")} alt="Book Club  Logo" />
//         <h3 className='search-form'><em>Leave a Comment</em></h3>
//         {errors && <h4>{JSON.stringify(errors)}</h4>} */}
     
//         <div className="form=group">
//            <input type="text" className="form-control form_control-lg" placeholder="comment..." value={body} name="body" onChange={(e) => setBody(e.target.value)}></input>
//         </div>
//         <div className='search-form'>
//           <button className="search-button" onClick={handleSubmit}>Submit</button>
//         </div>
//     </div> 
//   )
// }

