import "./styles/App.css"
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from "./components/context/CartContext";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <CartProvider>
      <NavBar />
      <Routes>
  <Route path="/" element={<ItemListContainer greeting={"Todos los productos"} />} />
  <Route path="/category/:categoryId" element={<ItemListContainer greeting={"Productos por categoría"}/>} />
  <Route path="/item/:itemId" element={<ItemDetailContainer />} />
  <Route path="/cart" element={<Cart/>} />
  <Route path="/checkout" element={<Checkout/>}></Route>
</Routes>
</CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;