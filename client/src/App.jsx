import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Profile from './pages/Profile'
import NavBar from './components/NavBar'

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={ <Home /> }/>
        <Route path='/about' element={ <About /> }/>
        <Route path='/login' element={ <SignIn /> }/>
        <Route path='/signup' element={ <SignUp /> }/>
        <Route path='/profile' element={ <Profile /> }/>
      </Routes>
    </BrowserRouter>
  )
}

export default App