import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home'
import Products from './components/pages/Products';
import Services from './components/pages/Services';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home/>}></Route>
        <Route path='/React-Website-Template' exact element={<Home/>}></Route>
        <Route path='/products' exact element={<Products/>}></Route>
        <Route path='/services' exact element={<Services/>}></Route>
        <Route path='/sign-up' exact element={<SignUp/>}></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
