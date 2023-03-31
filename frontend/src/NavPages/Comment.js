import React from 'react'
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import { COMMENT_URL } from '../constants'


export default function Comment() {
  const navigate = useNavigate()

  // const[comments, setComments] = useState([])
  const[body, setBody] = useState('')
  const[errors, setErrors] = useState("")

  

  // useEffect(() =>{
  //   fetch('http://localhost/api/comments/', {
  //     method:'GET',
  //   })
  //   .then(resp => resp.json())
  //   .then(resp => setComments(resp))
  //   .catch(error => console.log(error))

  // }, [])
  // console.log(comments)

  // const allComments = comments.map(comment => comment.body)
  // function handleChange(event) {
  //   console.log(event.target.value);
  //   setBody(event.target.value);
  // }
  const handleSubmit = (e) => {
    e.preventDefault()
   
    const commentObject = {
      body: body,
      
     }
    console.log(commentObject)
    addComment(commentObject)
   
  }
  const token = window.sessionStorage.getItem('token')
 const result = JSON.parse(token).token
 
 

 const base_url = COMMENT_URL



  const addComment = async (commentObject) => {
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
      body: JSON.stringify(commentObject)
    }
   
    const resp = await fetch(url, context)
    const body = await resp.json()
    if (resp.status === 400) {
      setErrors(body)
    } else {
      navigate("/Reviews")
    }
  }
  return (
    <div>
      <h3 className='search-form'><em>Leave a Comment</em></h3>
      {errors && <h4>{JSON.stringify(errors)}</h4>}
     <div className="form=group">
           <input type="text" className="form-control form_control-lg" placeholder="comment..." value={body} name="body" onChange={(e) => setBody(e.target.value)}></input>
       </div>


        <div className='search-form'>
          <button className="search-button" onClick={handleSubmit}>Submit</button>
        </div>

      </div> 
  
  
  )
}

