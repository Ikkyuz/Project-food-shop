import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './pages/Menu';
import Order from './pages/Order';
import MenuItem from './pages/MenuItem';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/menu/:id" element={<MenuItem />} />
          <Route path="/order" element={<Order />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
    </Router>
  )
}

export default App
