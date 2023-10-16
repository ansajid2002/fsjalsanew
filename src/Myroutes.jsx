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

const Myroutes = () => {

    const {categoriesList} = useSelector((store) => store.categories)
  const location = useLocation();
  const currentURL = location.pathname;
  console.log(currentURL);

  return (
    
    <div>
        {
            currentURL !== "/login" && currentURL !== "/forgetpassword" && currentURL !== "/signup" && currentURL !== "/new-password" && (
    <Header/>
    
  )
}
    <Routes>
    <Route exact path="/" element={<Homescreen/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/forgetpassword" element={<Forgetpassword/>} />
    <Route path="/signup" element={<Signup/>} />
    <Route path="/new-password" element={<Newpassword/>} />
     {
      categoriesList.map((single,index) => {

        return (
    <Route key={index}  path={`/${single.category_name}`} element={<Productsscreen/>} />
        )
      })
    }
    {
      categoriesList.map((single,index) => {

        return (
    <Route key={index}  path={`/${single.category_name}/:id`} element={<Productoverview/>} />
        )
      })
    } 

    </Routes>
    {currentURL !== "/login" && currentURL !== "/forgetpassword" && currentURL !== "/signup" && currentURL !== "/new-password"  && (
    <Footer/>
    
  )
}
    </div>
  )
}

export default Myroutes