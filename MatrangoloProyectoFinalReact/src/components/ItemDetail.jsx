import { useContext } from "react";
import { CartContext } from "./context/CartContext";
import ItemCount from "./ItemCount";

const ItemDetail = ({ item }) => {
  const { addItem } = useContext(CartContext);

  const onAdd = (quantity) => {
    console.log(`Agregando ${quantity} de ${item.name} al carrito`);
    addItem(item, quantity);
  };

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="row g-0">
          <div className="col-md-6">
            <img src={item.img} alt={item.name} className="img-fluid rounded-start" />
          </div>
          <div className="col-md-6">
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text">{item.description}</p>
              <p className="card-text"><small className="text-muted">Categoría: {item.category}</small></p>
              <h3 className="my-3">${item.price}</h3>
              <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
