import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../../pages/home/main'
import Footer from '../../components/layout/footer/main'
import Header from '../../components/layout/header/main'
import Apropos from '../../pages/apropos/main'
import Error from '../layout/404/main'
//import Appartement from '../../pages/appartements/main'
//import Appartement from '../../pages/appartements/main'



function AppRouter() {
    return (
      <Router>
        <Header />
          <div className="main-container">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/apropos" element={<Apropos />} />
            
            <Route path='*' element={<Error />} />
          </Routes>
          </div>
        <Footer />
      </Router>
    )
  }
  
  //<Route path="/appartements" element={<Appartement />} />
  export default AppRouter