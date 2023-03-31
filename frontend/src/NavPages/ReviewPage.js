import React from 'react'
import {useState, useEffect} from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import { REVIEW_URL } from '../constants';

export default function ReviewPage() {
  const [ review, setReview ] = useState(null);
  const {id} = useParams()
  const navigate = useNavigate()

  useEffect(() =>{
    fetch(`${REVIEW_URL}${id}`, {
      method:'GET',
   })
    .then(resp => resp.json())
    .then(resp => setReview(resp))
    .catch(error => console.log(error))

  }, [])
  
  
  return (
    <div>
       <div onChange={(e) => {setReview({'...review': e.target.value})}}>
        <p>{review?.review_comments}</p>

       </div>
      </div>
  )
}
