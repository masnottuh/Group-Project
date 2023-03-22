import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'

function NewReview() {

  const navigate = useNavigate()
  const[body, setBody] = useState("")
  const[errors, setErrors] = useState("")

  
  const handleSubmit = (e) => {
    e.preventDefault()
    const reviewObject = {
      body: body,
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
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization" : `Token ${result}`
      
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
      <h2 className='search-form'>Write a Review</h2>
      {errors && <h4>{JSON.stringify(errors)}</h4>}
        <div className="form=group">
           <input type="text" className="form-control form_control-lg" placeholder="Write a Review" value={body} name="body" onChange={(e) => setBody(e.target.value)}></input>
       </div>
      <div className='search-form'>
        <button className="search-button" onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  )
}

export default NewReview