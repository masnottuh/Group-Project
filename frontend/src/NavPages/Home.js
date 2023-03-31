import React from 'react';
import { useState, useEffect} from 'react'
import Card from 'react-bootstrap/Card'
import axios from "axios"
import BookSearch from './BookSearch';
import { motion } from "framer-motion";
import {Link} from "react-router-dom"

const Home = () =>{
  const[books, setBooks] = useState([])
  const NYT_KEY=process.env.REACT_APP_BOOKS_API_KEY
  
  useEffect(()=>{
  const getBooks = async () => {
    const response = await axios.get(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${NYT_KEY}`)
    console.log(response.data.results.books)
    setBooks(response.data.results.books)
  }
    
  getBooks()
}, [])

return (
  <motion.main
    className="main__container"
    initial={{ width: 0 }}
    animate={{ width: "100%" }}
    exit={{ x: "100%",opacity:0 }}
    transition={{ duration: 2, type: "spring", stiffness: 100 }}
>
  <>
    <img width="500" className="rounded mx-auto d-block" src={require("../images/bc_logo.png")} alt="Book Club  Logo" />
    <div className="centered">
      <BookSearch />
      <h1>Top 15 Best Sellers Fiction Books</h1>
         <div className='row'>
          {books.map((book) =>{
            const{ book_image, buy_links,description, rank, title}= book
            return(
              <div key={rank} class="col mb-2">
                <Card raised className='BookListItem-main-card m-2 rounded shadow-lg'>
                  <Card.Body>
                    <div>
                      <Card.Img  fluid="true" className ="BookListItem-img" variant ='top' src={book_image} alt={title}></Card.Img>
                      <Card.Text>{description}</Card.Text>
                        <p>Rank: {rank}</p>
                        <ul>
                          <p>Buy Now:</p>
                          {buy_links.map((link) => {
                            const{name,url} = link
                            return(
                              <div key={name}>
                                <a href={url}>{name}</a>
                              </div>
                            )
                          })}
                        </ul>
                    </div>
                    <Link to="/New"><button className="button">Review</button></Link> 
                  </Card.Body>
                </Card>
              </div>
            )
          })}
        </div>
      </div>
    </>
    </motion.main>
  );
}
export default Home;