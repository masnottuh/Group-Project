import React from 'react'
import { Route, Routes  } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Auth from '../Login/Auth' 
import About from '../NavPages/About';
import Home from '../NavPages/Home'
import ReviewList from '../NavPages/ReviewList';
import { AnimatePresence } from 'framer-motion'
import NewReview from '../NavPages/NewReview';

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
        </Routes>
        </AnimatePresence>
  )
}

export default AnimatedRoutes