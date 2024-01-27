import React from 'react'
import Navbar from './components/Navbar.jsx'
import ItemListContainer from './components/ItemListContainer.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer.jsx'
import Cart from './components/Cart.jsx'
import ShoppingCartContext from './context/ShoppingCartContext.jsx'

function App() {

  return (
    <BrowserRouter>
      <ShoppingCartContext>

        <Navbar />

        <Routes>
          <Route exact path='' element={<ItemListContainer />} />
          <Route exact path='/' element={<ItemListContainer />} />
          <Route exact path='/cart' element={<Cart />} />
          <Route exact path='/item/:id' element={<ItemDetailContainer />} />
          <Route exact path='/category/:categoryId' element={<ItemListContainer />} />
        </Routes>
      </ShoppingCartContext>
    </ BrowserRouter>
  )
}

export default App
