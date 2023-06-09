import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import Home from './pages/Home'
import Create from './pages/Create'

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/create' element={<Create/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default App