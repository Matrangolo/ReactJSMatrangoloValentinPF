import { createContext, useState } from "react";

export const CartContext = createContext({
  cart: []
})

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  console.log(cart)

  const addItem = (item, quantity) => {
    if(!isInCart(item.id)) {
      setCart(prev => [...prev, {...item, quantity}])
    } else {
      console.error('El producto ya fue agregado')
    }
  }

  const removeItem = (itemId) => {
    const cartUpdated = cart.filter(prod => prod.id !== itemId)
    setCart(cartUpdated)
  }

  const clearCart = () => {
    setCart([])
  }

  const isInCart = (itemId) => {
    return cart.some(prod => prod.id === itemId)
  }
  
  const CantTotalProductos = () => {
    return cart.reduce((acum, product) => acum += product.quantity, 0);
}
const SumaTotalProductos = () => {
    return cart.reduce((acum, product) => acum += product.quantity * product.price, 0);
}

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, CantTotalProductos, SumaTotalProductos }}>
      { children }
    </CartContext.Provider>
  )
  
}