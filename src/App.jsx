import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Header } from './components/Header'
import { Home } from './components/Home'
import { ViewCart } from './components/ViewCart'
import { useState,createContext } from 'react'

export const cartContext = createContext();

function App() {
 const [cart,setCart] = useState([]);

  return (
    <>
    <cartContext.Provider value={{cart,setCart}}>
    <BrowserRouter>
 <Header cart={cart}/>
 <div className='container'>
  <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/Cart" element={<ViewCart />}/>
  </Routes>
</div>
 </BrowserRouter>
 </cartContext.Provider>
    </>
  )
}

export default App
