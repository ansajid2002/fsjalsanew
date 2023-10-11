import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import { Provider } from 'react-redux'
import { store } from './store'
import Homescreen from './pages/Homescreen'
import Footer from './components/footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Provider store={store}>
    <>
    <Header/>
    <Homescreen/>
    <Footer/>
    </>
    </Provider>
  )
}

export default App
