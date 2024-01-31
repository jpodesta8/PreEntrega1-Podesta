import { createContext, useState } from "react"
import { Alert, AlertIcon } from '@chakra-ui/react'

export const CartContext = createContext(null)

export const ShoppingCartProvider = ({ children }) => {

  const [cart, setCart] = useState([])

  const agregarProducto = (item, contador, setContador) => {

    const itemAgregado = { ...item, cantidad: contador }

    const carritoNuevo = [...cart]
    const itemEnElCarrito = carritoNuevo.find((producto) => producto.id === itemAgregado.id)

    if (itemEnElCarrito) {
      itemEnElCarrito.cantidad = itemEnElCarrito.cantidad + contador
      setCart(carritoNuevo)
    } else {
      setCart([...cart, itemAgregado])
    }

    setContador(1)
  }

  const cantidadEnCarrito = () => {
    return cart.reduce((acc, producto) => acc + producto.cantidad, 0)
  }

  return (
    <CartContext.Provider value={{ cart, setCart, agregarProducto, cantidadEnCarrito }}>
      {children}
    </CartContext.Provider>
  )
}

export default ShoppingCartProvider