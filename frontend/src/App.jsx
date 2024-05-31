import React from 'react'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      <Footer />

      <ToastContainer />
    </>
  )
}

export default App