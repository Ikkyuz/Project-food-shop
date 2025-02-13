import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Menu from './pages/menu'
import Order from './pages/order'
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Menu/>} />
        <Route path="/order" element={<Order/>} />
      </Routes>
    </Router>

  )
}

export default App
