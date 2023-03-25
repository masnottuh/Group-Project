import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'


function NewReview(props) {

  const navigate = useNavigate()
  const[body, setBody] = useState("")
  // const[book, setBook] = useState("")
  // const[book_title, setBookTitle] = useState('')
  const[errors, setErrors] = useState("")
  
 
  console.log(props.book)
  
  const handleSubmit = (e) => {
    e.preventDefault()
    const reviewObject = {
      body: body,
      // book: book,
      // book_title:book_title,
      
     }
    console.log(reviewObject)
    addReview(reviewObject)
   
  }
 const token = window.sessionStorage.getItem('token')
 const result = JSON.parse(token).token
 
 

 const base_url = "http://127.0.0.1:8000/api/reviews/"


  const addReview = async (reviewObject) => {
    console.log(result)
    console.log(token)
    console.log(JSON.parse(token))
   
  
    const url = `${base_url}`
    const context = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization' : `Token ${result}`
       },
      body: JSON.stringify(reviewObject)
    }
   
    const resp = await fetch(url, context)
    const body = await resp.json()
    if (resp.status === 400) {
      setErrors(body)
    } else {
      navigate("/reviews")
    }
  }

return (
    <div>
      <h3 className='search-form'><em>Write a Review</em></h3>
      {errors && <h4>{JSON.stringify(errors)}</h4>}
{/* 
        <div className="form=group">
           <input type="text" className="form-control form_control-lg" placeholder="book title..." value={book} name="book" onChange={(e) => setBook(e.target.value)}></input>
        </div> */}
               {/* <div className="form=group">
           <input type="text" className="form-control form_control-lg" placeholder="book title..." value={book_title} name="book" onChange={(e) => setBookTitle(e.target.value)}></input>
        </div> */}
      
        <div className="form=group">
           <input type="text" className="form-control form_control-lg" placeholder="review..." value={body} name="body" onChange={(e) => setBody(e.target.value)}></input>
       </div>


    <div className='search-form'>
        <button className="search-button" onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  )
}

export default NewReview