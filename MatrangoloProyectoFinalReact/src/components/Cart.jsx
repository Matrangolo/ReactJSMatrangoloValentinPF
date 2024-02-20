import { useContext } from "react";
import { CartContext } from "./context/CartContext";
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, removeItem, clearCart } = useContext(CartContext); 

  const total = cart.reduce((acc, product) => acc + product.quantity * product.price, 0);

  if (cart.length === 0) {
    return (
      <div className="container mt-5 text-center">
        <h1>No hay items en el carrito</h1>
        <Link to='/' className='btn btn-success mt-3'>Volver a Productos</Link>
      </div>
    );
  } else {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col text-center">
            <h1 className="mb-4">Productos Seleccionados</h1>
            <table className="table table-hover">
              <thead className="thead-dark">
                <tr>
                  <th>Producto</th>
                  <th>Precio</th>
                  <th>Cantidad</th>
                  <th>Subtotal</th>
                  <th>Eliminar producto</th>
                </tr>
              </thead>
              <tbody>
                {cart.map(product => (
                  <tr key={product.id}>
                    <td>{product.name}</td>
                    <td>${product.price}</td>
                    <td>{product.quantity}</td>
                    <td>${product.quantity * product.price}</td>
                    <td>
                      <button onClick={() => removeItem(product.id)} className="btn btn-danger btn-sm">
                        X
                      </button>
                    </td>
                  </tr>
                ))}
                <tr>
                  <td colSpan="3">Total</td>
                  <td>${total}</td>
                  <td>&nbsp;</td>
                </tr>
              </tbody>
            </table>
            <div className="my-4">
              <button onClick={clearCart} className="btn btn-warning me-2">
                Limpiar carrito
              </button>
              <Link to='/checkout' className='btn btn-success'>
                Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Cart;
