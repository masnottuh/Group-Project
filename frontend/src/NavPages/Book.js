import React from 'react'
import {useState, useEffect} from 'react'
import { BOOK_URL } from '../constants'

export default function Book() {
  const[books, setBooks] = useState([])
  useEffect(() =>{
    fetch(BOOK_URL, {
      method:'GET',
  
 })
    .then(resp => resp.json())
    .then(resp => setBooks(resp))
    .catch(error => console.log(error))

  }, [])
  // console.log(books)

  return (
    <div>
      {books && books.map(book =>{
        return(
            <div key={book.id}>
              <p>{book.title} 
                <li>{book.author}</li>
                <li>{book.description}</li>
              </p> 
            </div>
          )
      })}
    </div>
  )
}
