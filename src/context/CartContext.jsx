import { createContext } from "react"

export const CartContext = createContext(null)

export const ShoppingCartProvider = ({children}) => {
    const comision = "React en coderhouse"

  return (
    <CartContext.Provider value={{comision}}>
        {children}
    </CartContext.Provider>
  )
}

export default ShoppingCartProvider