import { useContext, useState } from 'react';
import ItemCount from './ItemCount';
import {Link} from "react-router-dom"
import { CartContext } from './context/CartContext';

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
  const [quantityAdded, setQuantityAdded] = useState (0)

  const { addItem } = useContext(CartContext)

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity)

    const item = {
      id, name, price
    }
    addItem(item,quantity)
  }

  return (
    <article className="card mx-auto my-3">
      <header className="card-header bg-light text-center">
        <h2 className="h5 mb-0">{name}</h2>
      </header>
      <img src={img} alt={name} className="card-img-top" style={{ height: '200px', objectFit: 'contain' }} />
      <div className="card-body text-center">
        <p className="text-muted">Categoría: {category}</p>
        <p className="text-muted">Descripción: {description}</p>
        <p className="text-muted">Precio: ${price}</p>
      </div>
      <footer className="ItemFooter card-footer text-center">
        {
          quantityAdded > 0 ? (
        <Link to= "/cart" className="Option btn btn-success btn-block mt-3">Terminar Compra</Link>
        ) : (
          <ItemCount initial={1} stock={stock} onAdd={(handleOnAdd)}/>
          ) 
        }
      </footer>
    </article>
  );
};

export default ItemDetail;

