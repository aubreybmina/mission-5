import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/home/Home'
import Login from './pages/Login'
import Search from './pages/search/Search'
import Missing from './pages/Missing'
import Footer from './components/Footer'
import UpperNav from './components/UpperNav'

function App() {
  return (
    <div className="main">
      <BrowserRouter>
        <UpperNav />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="search" element={<Search />} />
          <Route path="*" element={<Missing />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
