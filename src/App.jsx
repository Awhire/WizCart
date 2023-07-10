import React from 'react'
import './App.css'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Products from './components/Products/Products'
import Footer from './components/Footer/Footer'
import CartItems from './scene/CartItems'
import { useSelector } from 'react-redux'


function App() {
  const { toggle } = useSelector(state => state.modal)

  return (
    <div>
       <ToastContainer />
       <Navbar />
        <div className='header bg-slate-400'>
          <Hero /> 
        </div>
       {toggle && <CartItems />}
        <Products />
        <footer>
            <Footer />
        </footer>
      
    </div>
  )
}

export default App
