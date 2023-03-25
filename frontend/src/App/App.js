import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {useState, useEffect} from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Auth from '../Login/Auth';

import About from '../NavPages/About';
import Home from '../NavPages/Home'
import ReviewList from '../NavPages/ReviewList';

import NewReview from '../NavPages/NewReview';

import Navbar from 'react-bootstrap/Navbar';
import AnimatedRoutes from './AnimatedRoutes';

import useToken from '../Login/useToken';
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';



function App() {

const { token, setToken } = useToken(); //simple token auth for now

  if(!token) {
    return <Auth setToken={setToken} />
  }
  return (
    <div className="wrapper">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="Home">Home</Nav.Link>
              <Nav.Link href="About">About</Nav.Link>
              <Nav.Link href="Reviews">Book Reviews</Nav.Link>
              <Navbar.Collapse className="justify-content-end">
                <button id="logout_button" onClick={logout_now}>
              Logout</button>
              </Navbar.Collapse>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Router>

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/auth" element={<Auth/>}/>
          <Route path="/Home" element={<Home/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/Reviews" element={<ReviewList/>}/>
          <Route path="/New" element={<NewReview/>}/>
        </Routes>


        <AnimatedRoutes />

      </Router>
    </div>
  );
}

function logout_now() {
  sessionStorage.clear();
  window.location.reload();
}

export default App;

// import Form from '../NavPages/Form';
// import AllReviews from '../NavPages/AllReviews';
// const[reviews, setReviews] = useState([])
// const [editReview, setEditReview] = useState('')


//   useEffect(() =>{
//   fetch('http://localhost:8000/api/reviews/', {
//     method:'GET',
//     // headers:{
//     //   'Content-Type': 'application/json',
//     // }
//   })
//   .then(resp => resp.json())
//   .then(resp => setReviews(resp))
//   .catch(error => console.log(error))

// }, [])
// const editBtn = (review) =>{
//   setEditReview(review)
// }

// const updatedInformation = (review) => {
//   const new_review = reviews.map(myreview => {
//     if(myreview.id === review.id){
//       return review
//     }else{
//       return myreview
//     }
//   })
//   setReviews(new_review)
// }

// const reviewForm = () =>{
//   setEditReview({book_title:'', body:''})
// }

// const insertedInformation = (review) => {
//  const new_reviews = [...reviews,review]
//  setReviews(new_reviews)
// }

// const deleteBtn = (review) =>{
//   const new_review = reviews.filter(myreview => {
//     if(myreview.id === review.id){
//       return false
//     }
    
//     return true
//   })
//   setReviews(new_review)
// }

    //  <AllReviews reviews={reviews} editBtn ={editBtn}  deleteBtn ={deleteBtn} reviewForm={reviewForm}/>
    // <Form review = {editReview} updatedInformation= {updatedInformation} insertedInformation= {insertedInformation}/> 
    // <BookSearch reviewForm={reviewForm} /> 