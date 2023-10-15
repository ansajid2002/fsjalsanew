import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import { Provider, useSelector } from 'react-redux'
import { store } from './store'
import Homescreen from './pages/Homescreen'
import Footer from './components/footer/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Productsscreen from './pages/Productsscreen'
import Productoverview from './pages/Productoverview'
import Login from './pages/loginpages/Login'
import Forgetpassword from './pages/loginpages/Forgetpassword'
import Signup from './pages/loginpages/Signup'

function App() {
  const [count, setCount] = useState(0)
  const {categoriesList} = useSelector((store) => store.categories)
  return (
    
     <BrowserRouter>

    <Header/>
    <Routes>
    <Route path="/login" element={<Login/>} />
    <Route path="/forgetpassword" element={<Forgetpassword/>} />
    <Route exact path="/" element={<Homescreen/>} />
    <Route path="/signup" element={<Signup/>} />
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
    

    <Footer/>
     </BrowserRouter>
    
  )
}

export default App
