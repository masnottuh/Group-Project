import React from 'react'
import {Link} from 'react';


import {DeleteReview} from './Extras.js/APIS'



function AllReviews(props) {
  const token = window.sessionStorage.getItem('token')
  const result = JSON.parse(token).token

    // const editBtn = (review)=>{
    //     props.editBtn(review)
    // }


    const deleteBtn = (review)=>{
        DeleteReview(review.id,result)
        .then(()=> props.deleteBtn(review))
        .catch(error => console.log(error))
    }

    return (
      
        <div>
            {props.reviews && props.reviews.map(review =>{
                return(
                    <div key={review.id}>
                        <h1>{review.book_title}</h1>
                        <h1>{review.book}</h1>
                        <p>{review.body}</p>

                        <div className="row">
                            {/* <div className="col-md-1">
                                <button className="btn btn-primary" onClick= {()=>editBtn(review)}>Update</button>
                            </div> */}
                            <div className="col-md-1">
                                <button className="btn btn-danger" onClick= {()=>deleteBtn(review)}>Delete</button>
                            </div>
                        </div>
                         
                        <hr className="post_line" />
                    </div>
                )
            })}
            <div>
            
      {/* <button className="btn btn-primary" onClick={reviewForm}>Create Post</button> */}
     
      </div>
     </div>
    )
}

export default AllReviews