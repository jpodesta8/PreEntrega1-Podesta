import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/ShoppingCartContext'

const Cart = () => {

  const { cart } = useContext (CartContext)

  console.log(cart)

  return (
    <div>cart</div>
  )
}

export default Cart