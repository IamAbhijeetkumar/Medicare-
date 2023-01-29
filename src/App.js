import React from 'react'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Clinic from './components/Clinic';
import Specialist from './components/Specialist';
import Review from './components/Review';
import Footer from './components/Footer';

const App = () => {

  return (
    <>
      <Navbar />
      <Home />
      <Clinic />
      <Specialist />
      <Review />
      <Footer />
    </>
  )
}

export default App;
