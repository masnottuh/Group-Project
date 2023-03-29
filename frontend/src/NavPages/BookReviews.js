import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'

function BookReviews() {

  
    const[bookReviews, setBookReviews] = useState([])
    
    useEffect(()=>{
    const getBookReviews = async () => {
      const response = await axios.get(`https://api.nytimes.com/svc/books/v3/reviews.json?author=Stephen+King&api-key=dH2IAJjO7DCvwulScJeue1ZLhA11iysw`)
      console.log(response.data.results)
      setBookReviews(response.data.results)
    }
      
    getBookReviews()
  }, [])


  return (
    <div>
      <h1>What to read next?</h1>
      <div className='row'>
         {bookReviews.filter((br,i) => br.summary !== "").map(bookreview =>(
          <>
           <h2>{bookreview.book_title} by {bookreview.book_author}</h2>
           <p>{bookreview.summary}</p>
            <a href={bookreview.url}>Read more</a>
           </>
         ))}
         </div>
        
             
       
              
           
        </div>

    
  )
}

export default BookReviews