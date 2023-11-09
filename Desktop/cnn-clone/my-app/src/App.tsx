import React from 'react'
import Login from './components/Login'
import Signup from './components/Signup'
import Navbar from './components/Navbar'
import Main from './components/Main'
import {Routes,Route} from "react-router-dom"
import Details from './components/Details'

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/details' element={<Details/>}/>
    </Routes>
    </>
  )
}

export default App
