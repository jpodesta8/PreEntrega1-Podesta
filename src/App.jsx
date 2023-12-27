import React from 'react'
import Navbar from './components/Navbar.jsx'
import ItemListContainer from './components/ItemListContainer.jsx'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer.jsx'
import Cart from './components/Cart.jsx'

// COMPONENTE CONTENEDOR

function App() {

  return (
    <BrowserRouter>

      <Navbar/>

      <Routes>
        <Route exact path='/' element={<ItemListContainer />}/>
        <Route exact path='/cart' element={<Cart />}/>
        <Route exact path='/item/:id' element={<ItemDetailContainer/>}/>
        <Route exact path='/category/:categoryid' element={<ItemListContainer/>}/>
        


      </Routes>
    </ BrowserRouter>
  )
}

export default App
