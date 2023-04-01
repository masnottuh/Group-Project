import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { BOOK_URL, REVIEW_URL } from '../constants'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function NewReview() {
  const navigate = useNavigate()
  const[body, setBody] = useState("")
  const[book_title, setBookTitle] = useState('')
  const[errors, setErrors] = useState("")
  const[books, setBooks] = useState([])
  // const[book, setBook] = useState('Select a title')
  // const[title,setTitle] = useState('Select a title')
  
 useEffect(() =>{
    fetch(BOOK_URL, {
      method:'GET',
   })
    .then(resp => resp.json())
    .then(resp => setBooks(resp))
    .catch(error => console.log(error))
}, [])
 
  const allTitles = books.map(book => book.title)
  function handleChange(event) {
    console.log(event.target.value);
    setBookTitle(event.target.value);
  }

  useEffect(() => {
    console.log("Value of title in State is: ", book_title);
  }, [book_title]);
  
  const handleSubmit = (e) => {
    e.preventDefault()
   
    const reviewObject = {
      body: body,
      // title: title,
      // book: book,
      book_title: book_title
      
     }
    console.log(reviewObject)
    addReview(reviewObject)
   
  }
 const token = window.sessionStorage.getItem('token')
 const result = JSON.parse(token).token
 
 

 const base_url = REVIEW_URL


  const addReview = async (reviewObject) => {
    console.log(result)
    console.log(token)
    console.log(JSON.parse(token))
   
  
    const url = `${base_url}`
    const context = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization' : `Token ${result}`
       },
      body: JSON.stringify(reviewObject)
    }
   
    const resp = await fetch(url, context)
    const body = await resp.json()
    if (resp.status === 400) {
      setErrors(body)
    } else {
      navigate("/reviews")
    }
  }

return (
    <div style = {{height:"110vh"}}> 
            <img width="500" className="rounded mx-auto d-block" src={require("../images/bc_logo.png")} alt="Book Club  Logo" />
            <h3 className='search-form'><em>Write a Review</em></h3>
            {errors && <h4>{JSON.stringify(errors)}</h4>}
        
        
         
      <div className="form=group search-form" >
        <FloatingLabel controlId="floatingSelect" label="Works with selects">
          <Form.Select onChange={handleChange} aria-label="Floating label select example">
                  <option>Select a title</option>
                  {allTitles.map((book_title) => <option value={book_title}>{book_title}</option>)}
                  <input type="text" className="form-control form_control-lg" placeholder="book title..." value={book_title} name="book_title" onChange={(e) => setBookTitle(e.target.value)}></input>          
                {/* <select onChange={handleChange}> 
                  <option value="Select a title"> -- Select a title -- </option>
                  {allTitles.map((book_title) => <option value={book_title}>{book_title}</option>)}
                </select> */}
          </Form.Select>
          <div className="search-form">
                  <input type="text" className="form-control form_control-sm" placeholder="review..." value={body} name="body" onChange={(e) => setBody(e.target.value)}></input>              
                  </div>     
        </FloatingLabel>
      </div> 
        
          



        <div className='search-form'>
          <button className="search-button" onClick={handleSubmit}>Submit</button>
        </div>
        
   
    </div> 

    )
}

export default NewReview
//   return (
//     <FloatingLabel controlId="floatingSelect" label="Works with selects">
//       <Form.Select aria-label="Floating label select example">
//         <option>Open this select menu</option>
//         <option value="1">One</option>
//         <option value="2">Two</option>
//         <option value="3">Three</option>
//       </Form.Select>
//     </FloatingLabel>
//   );
// }

