import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Landing from './pages/Landing/Landing'
import Todolist from './pages/Todolist/Todolist'
import About from './pages/About/About'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/todolist" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Landing />} />

      </Routes>
    </div>
  )
}

export default App
