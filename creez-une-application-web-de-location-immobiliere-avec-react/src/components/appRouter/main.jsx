import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../../pages/home/main'
import Footer from '../../components/layout/footer/main'
import Header from '../../components/layout/header/main'
import Apropos from '../../pages/apropos/main'





function AppRouter() {
   
    return (
      <Router>
        <div className="main-container">
        <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/apropos" element={<Apropos />} />
          </Routes>
          </div>
        <Footer />
      </Router>
    )
  }

  export default AppRouter