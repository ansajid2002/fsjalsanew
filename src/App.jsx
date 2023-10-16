import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import { Provider, useSelector } from 'react-redux'
import { store } from './store'
import Homescreen from './pages/Homescreen'
import Footer from './components/footer/Footer'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import Productsscreen from './pages/Productsscreen'
import Productoverview from './pages/Productoverview'
import Login from './pages/loginpages/Login'
import Forgetpassword from './pages/loginpages/Forgetpassword'
import Signup from './pages/loginpages/Signup'
import Newpassword from './pages/loginpages/Newpassword'
import Myroutes from './Myroutes'

function App() {

  

  return (
    
     <BrowserRouter>
    <Myroutes/>
     </BrowserRouter>
    
  )
}

export default App
