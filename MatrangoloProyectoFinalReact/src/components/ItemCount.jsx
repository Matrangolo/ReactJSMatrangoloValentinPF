import { useState } from 'react';
import { Link } from 'react-router-dom';

const ItemCount = ({ stock, initial, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);
  const [itemAdded, setItemAdded] = useState(false); 

  const increment = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddClick = () => {
    onAdd(quantity);
    setItemAdded(true); 
  };

  return (
    <div className="d-flex flex-column align-items-center justify-content-center bg-white p-3 rounded shadow-sm mx-auto" style={{ maxWidth: '300px', margin: '20px' }}>
      <div className="d-flex justify-content-center align-items-center mb-3">
        <button className="btn btn-success" onClick={decrement} disabled={quantity <= 1}>-</button>
        <span className="px-3 border border-success rounded mx-2">{quantity}</span>
        <button className="btn btn-success" onClick={increment} disabled={quantity >= stock}>+</button>
      </div>
      {itemAdded ? (
        <Link to="/cart" className="btn btn-dark btn-block mt-3">Terminar compra</Link>
      ) : (
        <button className="btn btn-success btn-block mt-3" onClick={handleAddClick} disabled={!stock}>Agregar al carrito</button>
      )}
    </div>
  );
};

export default ItemCount;
