import React from 'react'
import {useState, useEffect} from 'react'


export default function Comment() {

  const[comments, setComments] = useState([])

  useEffect(() =>{
    fetch('http://localhost:8000/api/comments/', {
      method:'GET',
    })
    .then(resp => resp.json())
    .then(resp => setComments(resp))
    .catch(error => console.log(error))

  }, [])
  console.log(comments)
  
  return (
    <div>
      {comments && comments.map(comment =>{
          return(
           <div key={comment.id}>
                <p>{comment.owner}</p>
               
          </div>
            )
          })}
          
    </div>
  
  )
}

