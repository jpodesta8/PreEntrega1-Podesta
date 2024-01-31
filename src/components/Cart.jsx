import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/ShoppingCartContext'

const Cart = () => {

  const { cart } = useContext(CartContext)

  // const precioTotal = () => {
  //    CONSTRUIR FUNCION
  // }

  return (
    <div>
      <h1>CARRITO</h1>
      {
        cart.map((prod) => (
          <div>
            <h1>producto: {prod.title}</h1>
            <p>cantidad: {prod.cantidad}</p>
            <p>precio: ${prod.price}</p>
          </div>
        ))
      }
    </div>
  )
}

export default Cart