import React from 'react';
import { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Carousel from'react-bootstrap/Carousel'
import axios from "axios"
import { MDBCard} from 'mdb-react-ui-kit';

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
     <h1>Top 15 Best Sellers Fiction Books</h1>
    
      <div className='books-card-info'>
     
         {books.map((book) =>{
            const{author, book_image, buy_links, primary_isbn10,description, publisher, rank, title}= book
            
            return(
              <div >
              <Card key ={rank} className='m-2 rounded shadow-lg' style={{width:'15rem'}}>
              <Card.Body>
                <div>
                    <Card.Img fluid className ="image_book" variant ='top' src={book_image} alt={title}></Card.Img>
                    <Card.Text>{description}</Card.Text>
                    <Card.Text>Writen by: {author}</Card.Text>
                    <p>Rank: {rank}</p>
                      {/* <ul>
                        <li>Publisher: {publisher}</li>
                        <li>Ranked number {rank}</li>
                        <li>ISBN:{primary_isbn10}</li>
                      </ul> */}
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
                </Card.Body>
              </Card>
         
         
          </div>
            )
          })}
         
        </div>
    </div>
  );
}
export default Home;
// return (
//   <section id="books" className="books-block">
//     <Container className='border d-flex          align-items-center justify-content-center height-30rem'>
//       <Carousel controls={true}>
//           {books.map((book) =>{
//             const{author, book_image, buy_links, primary_isbn10,description, publisher, rank, title}= book
            
//             return (
//              <Carousel.Item className= "book_format" key={rank}>
//                <img className='image'src={book_image} alt={title} />
//                   <h5>{title}</h5>
//                   <blockquote>
//                   <p>{description}</p>
//                   </blockquote>
//                   <p>Written by: {author}</p>
//              </Carousel.Item>
//             );
//           })
//         }
//       </Carousel>
//     </Container> 
//   </section>
// );
// }
// export default Home;