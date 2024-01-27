import { createContext, useState } from "react"

export const CartContext = createContext(null)

export const ShoppingCartProvider = ({ children }) => {

  const [cart, setCart] = useState([])

  const agregarProducto = (item, contador) => {
    if (contador == 1) {
      <Alert status='success' variant='solid'>
        <AlertIcon />
        Se agregó {contador} producto al carrito!
      </Alert>
    }
    else if (contador > 1) {
      <Alert status='success' variant='solid'>
        <AlertIcon />
        Se agregaron {contador} productos al carrito!
      </Alert>
    }

    if (contador > 0) {
      cart.push({ item })
    }

    setContador(0)
  }

  return (
    <CartContext.Provider value={{ cart, setCart, agregarProducto}}>
      {children}
    </CartContext.Provider>
  )
}

export default ShoppingCartProvider