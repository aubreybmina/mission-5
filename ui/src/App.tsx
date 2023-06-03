import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/home/Home'
import Laptop from './pages/laptop/Laptop'
import LaptopPage from './pages/laptop/LaptopPage'
import Login from './pages/Login'
import Search from './pages/search/Search'
import Missing from './pages/Missing'
import Footer from './components/Footer'
import UpperNav from './components/UpperNav'
import '@fontsource/inter/100.css'
import '@fontsource/inter/200.css'
import '@fontsource/inter/300.css'
import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/600.css'
import '@fontsource/inter/700.css'
import '@fontsource/inter/800.css'
import '@fontsource/inter/900.css'

function App() {
  return (
    <div className="main">
      <BrowserRouter>
        <UpperNav />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="laptop" element={<Laptop />} />
          <Route path="laptop/:id" element={<LaptopPage />} />
          <Route path="laptop/:id/:title" element={<LaptopPage />} />
          <Route path="search" element={<Search />} />
          <Route path="*" element={<Missing />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
