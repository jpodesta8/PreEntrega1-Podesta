import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import ItemListContainer from './components/ItemListContainer.jsx'
import ItemCount from './components/ItemCount.jsx'

function App() {

  return (
    <>
      <Navbar/>
      <ItemListContainer greeting={'Bienvenidos a mi ecommerce'}/>
    </>
  )
}

export default App
