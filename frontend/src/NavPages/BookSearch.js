import React, { useState } from "react";  
import axios from 'axios';  
import { Card } from 'react-bootstrap';  

function BookSearch() {  
  const [book, setBook] = useState("");  
  const [result, setResult] = useState([]);  
  
  function handleChange(event) {  
      const book = event.target.value;  
      setBook(book);  
    }  
    function handleSubmit(event) {  
        event.preventDefault(); 
        axios.get("https://www.googleapis.com/books/v1/volumes?q=" + book + "&key=" + "Enter Google Key inside these quotes" + "&maxResults=40")  
            .then(data => {  
                console.log(data.data.items);  
                setResult(data.data.items);  
            })  
    }  
    return (  
        <form onSubmit={handleSubmit}>  
            <div className="card-header main-search">  
                <div className="row">  
                    <div className="col-12 col-md-3 col-xl-3">  
                        <input onChange={handleChange} className="AutoFocus form-control" placeholder="Enter book keywords..." type="text" />  
                    </div>
                     <div className="ml-auto">  
                        <input type="submit" value="Search all Books" className="btn btn-primary search-btn" />  
                     </div>
                    
                </div>  
            </div>  
<div className="container">  
      <div className="row">  
          {result.map(book => (  
              <div key={book.id} className="col-sm-2">  
                <Card style={{ 'marginTop': '10px' }}>  
  
                  <Card.Img variant="top" src={book.volumeInfo.imageLinks !== undefined ? book.volumeInfo.imageLinks.thumbnail : ''} alt={book.title} />  
                      <Card.Body>  
                        <h5 className="card-title">{book.volumeInfo.title}</h5>  
                            <a className="btn btn-primary" href = {book.volumeInfo.infoLink}>More Info</a>  
                                </Card.Body> 
                               
                            </Card>  
                        </div>  
                    ))}  
                </div>  
            </div>  
        </form>  
  
    )  
}  
  
export default BookSearch