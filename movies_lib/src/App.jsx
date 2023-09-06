import { useState } from 'react'

import './App.css'
import { Link, Outlet } from 'react-router-dom'

import NavBar from "./components/NavBar"
import Moviecard from './components/Moviecard'

function App() {


  return (
    <div className="App">
      <NavBar />
      
      <Outlet />
    </div>
  )
}

export default App
