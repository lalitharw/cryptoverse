import { useState } from 'react'

// react router dom
import { Routes, Route, Link } from 'react-router-dom';

// components
import {Home} from "./pages/Home"
import { CryptoCurrency } from './pages/CryptoCurrency';
import {CryptoDetails} from "./pages/CryptoDetails"

// react bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {

  return (
    <>
    
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/crypto-currencies' element={<CryptoCurrency/>}/>
        <Route path='/crypto-details/:coinId' element={<CryptoDetails/>}/>
        
      </Routes>
    </>
  )
}

export default App
