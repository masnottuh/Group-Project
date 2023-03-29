import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import Card from 'react-bootstrap/Card'

function BookReviews1() {

   
   const[bookReviewss, setBookReviewss] = useState([])
   
  useEffect(()=>{
    const getBookReviewss = async () => {
      const response = await axios.get(`https://api.nytimes.com/svc/books/v3/reviews.json?author=John+Grisham&api-key=dH2IAJjO7DCvwulScJeue1ZLhA11iysw`)
      console.log(response.data.results)
      setBookReviewss(response.data.results.slice(4,27))
     
    }
    getBookReviewss()
  }, [])

return (
    <div>
      <div className='row'>
        <h3>John Grisham's Novels:</h3>
         {bookReviewss.filter((br,i) => br.summary !== "").map(bookreview =>(
          <Card raised className='BookListItem-main-card m-2 rounded shadow-lg'>
            <h4 style={{padding: '18px'}}><em> {bookreview.book_title}</em></h4>
            <p>{bookreview.summary} <em> <br></br> written by {bookreview.byline}</em></p>
            <Link to={bookreview.url}><button className="button">Read more</button></Link> 
            <hr></hr>
          </Card> 
        ))}
      </div>
    </div>
  )
}

export default BookReviews1