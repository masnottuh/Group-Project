import React from 'react';
import { useState, useEffect} from 'react'
import Card from 'react-bootstrap/Card'
// import Container from 'react-bootstrap/Container'
// import Carousel from'react-bootstrap/Carousel'
import axios from "axios"
// import { MDBCard} from 'mdb-react-ui-kit';
import BookSearch from './BookSearch';
import { motion } from "framer-motion";
import {Link} from "react-router-dom"

const Home = () =>{
  const[books, setBooks] = useState([])
  
  useEffect(()=>{
  const getBooks = async () => {
    const response = await axios.get(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=dH2IAJjO7DCvwulScJeue1ZLhA11iysw`)
    // console.log(response.data.results.books)
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
      {/* <div className='books-card-info'> */}
        <div className='row'>
          {books.map((book) =>{
            const{ book_image, buy_links,description, rank, title}= book
            return(
              <div key={rank} class="col mb-2">
                {/* <Card key ={rank} className='m-2 rounded shadow-lg' style={{width:'15rem'}}> */}
                <Card raised className='BookListItem-main-card m-2 rounded shadow-lg'>
                  <Card.Body>
                    <div>
                      {/* <Card.Img fluid="true" className ="image_book" variant ='top' src={book_image} alt={title}></Card.Img> */}
                      <Card.Img  fluid="true" className ="BookListItem-img" variant ='top' src={book_image} alt={title}></Card.Img>
                      <Card.Text>{description}</Card.Text>
                      {/* <Card.Text>Written by: {author}</Card.Text> */}
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
// export default getBook
// export getBook
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