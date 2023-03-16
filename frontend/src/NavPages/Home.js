import React from 'react';
import { useState, useEffect } from 'react'
import axios from "axios"
const Home = () =>{
  const[books, setBooks] = useState([])
  
  useEffect(()=>{
  const getBooks = async () => {
    const response = await axios.get(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${process.env.REACT_APP_BOOKS_API_KEY}`)
    console.log(response.data.results.books)
    setBooks(response.data.results.books)
  }
    
  getBooks()
}, [])
    
return (
    <div className="centered">
     
      <div>
        <h1>Books</h1>
        <section>
          {books.map((book) =>{
            const{author, book_image, buy_links, primary_isbn10,description, publisher, rank, title}=book
            return(
              <article key={rank}>
                <div>
                  <img src={book_image} alt={title} />
                </div>
                <div>
                  <h4>{title}</h4>
                  <p>{description}</p>
                  <p>Written by: {author}</p>
                </div>
                <div>
                  <ul>
                    <li>Publisher: {publisher}</li>
                    <li>Ranked number {rank}</li>
                    <li>ISBN:{primary_isbn10}</li>
                  </ul>
                </div>
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
              </article>
            )
          })}
        </section>
      </div>
    </div>
  );
}
export default Home;