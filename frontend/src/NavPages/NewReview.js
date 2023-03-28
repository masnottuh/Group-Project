import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

function NewReview() {
  const navigate = useNavigate()
  const[body, setBody] = useState("")
  const[book_title, setBookTitle] = useState('')
  const[errors, setErrors] = useState("")
  const[books, setBooks] = useState([])
  // const[book, setBook] = useState('Select a title')
  // const[title,setTitle] = useState('Select a title')
  
 useEffect(() =>{
    fetch('http://localhost:8000/api/book/', {
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
 
 

 const base_url = "http://127.0.0.1:8000/api/reviews/"


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
    <div>
      <img width="500" className="rounded mx-auto d-block" src={require("../images/bc_logo.png")} alt="Book Club  Logo" />
    <h3 className='search-form'><em>Write a Review</em></h3>
      {errors && <h4>{JSON.stringify(errors)}</h4>}
        
        
         
        <div className="form=group">
           <input type="text" className="form-control form_control-lg" placeholder="book title..." value={book_title} name="book_title" onChange={(e) => setBookTitle(e.target.value)}></input>
           <select onChange={handleChange}> 
                  <option value="Select a title"> -- Select a title -- </option>
                  {allTitles.map((book_title) => <option value={book_title}>{book_title}</option>)}
                </select>
        </div> 
          
        <div className="form=group">
           <input type="text" className="form-control form_control-lg" placeholder="review..." value={body} name="body" onChange={(e) => setBody(e.target.value)}></input>
       </div>


        <div className='search-form'>
          <button className="search-button" onClick={handleSubmit}>Submit</button>
        </div>

      </div> 
    )
}

export default NewReview