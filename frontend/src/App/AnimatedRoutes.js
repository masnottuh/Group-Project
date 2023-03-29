import React from 'react'
import { Route, Routes  } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Auth from '../Login/Auth' 
import About from '../NavPages/About';
import Home from '../NavPages/Home'
import ReviewList from '../NavPages/ReviewList';
import { AnimatePresence } from 'framer-motion'
import NewReview from '../NavPages/NewReview';
import Book from '../NavPages/Book';
import Comment from '../NavPages/Comment';
import BookReviews from '../NavPages/BookReviews';

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
    <Routes location={location}key={location.pathname}>
          <Route path="/" element={<Home/>}/>
          <Route path="/auth" element={<Auth/>}/>
          <Route path="/Home" element={<Home/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/Reviews" element={<ReviewList/>}/>
          <Route path="/New" element={<NewReview/>}/>
          <Route path="/Book" element={<Book/>}/>
          <Route path="/Comments" element={<Comment/>}/>
          <Route path="/Bookreviews" element={<BookReviews/>}/>

    </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes