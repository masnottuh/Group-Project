import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import BookReviews1 from './BookReviews1'

function BookReviews() {

   const[bookReviews, setBookReviews] = useState([])
   
   useEffect(()=>{
    const getBookReviews = async () => {
      const response = await axios.get(`https://api.nytimes.com/svc/books/v3/reviews.json?author=Stephen+King&api-key=dH2IAJjO7DCvwulScJeue1ZLhA11iysw`)
      console.log(response.data.results)
      setBookReviews(response.data.results.slice(26,63))
      }
      getBookReviews()

  }, [])
 

return (
    <div>
      <img width="500" className="rounded mx-auto d-block" src={require("../images/bc_logo.png")} alt="Book Club  Logo" />
      <h5 className= "review-title">Wondering what to read next? Check out these popular books...</h5>
      <div className='row'>
        <h3>Stephen King's Novels:</h3>
         {bookReviews.filter((br,i) => br.summary !== "").map(bookreview =>(
          <Card raised className='BookListItem-main-card m-2 rounded shadow-lg'>
            <h4 style={{padding: '18px'}}><em> {bookreview.book_title}</em></h4>
            <p>{bookreview.summary} <em> <br></br> written by {bookreview.byline}</em></p>
            <Link to={bookreview.url}><button className="button">Read more</button></Link> 
            <hr></hr>
          </Card> 
        ))}
      </div>
      <BookReviews1 />
    </div>
  )
}

export default BookReviews