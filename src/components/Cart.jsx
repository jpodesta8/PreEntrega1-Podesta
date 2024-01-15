import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const Cart = () => {

  const { comision } = useContext (CartContext)
  return (
    <div>{comision}</div>
  )
}

export default Cart