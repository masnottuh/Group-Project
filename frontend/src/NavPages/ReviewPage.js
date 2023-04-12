import React from 'react';
import { useEffect,useState} from 'react';
import {Link, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { REVIEW_URL } from '../constants';

function ReviewPage() {

const [ review, setReview] = useState(null);
const {id} = useParams()
const navigate = useNavigate()

useEffect(() => {
      getReview()
    }, [id])

const getReview = async() =>{

  const token = window.sessionStorage.getItem('token')
  console.log(token)
  const result = JSON.parse(token).token
  
  const response = await fetch(`${REVIEW_URL}${id}`, {
    method: "GET",
    headers: {
    'Content-Type': 'application/json',
    'Authorization': `Token ${result}`
    }
  })
  const data = await response.json()
  setReview(data)
}
const token = window.sessionStorage.getItem('token')
const result = JSON.parse(token).token
console.log(token)
const headers = { 
  'Authorization':`Token ${result}`,
 
};

function deleteReview(id){  
  axios.delete(`${REVIEW_URL}${id}`,{headers})  
    .then(res => {  
      console.log(res);  
      console.log(res.data);  
      navigate('/Reviews')
    })
  
  }
return(
  <div>
    <div onChange={(e) => {setReview({'...review': e.target.value})}}>
        {
          <div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h3>{review?.body}</h3>
             <Link className="search-form" onClick={() =>deleteReview(review.id)}>Delete</Link>
          </div>
        }
      </div>
    </div>
  )
}

export default ReviewPage