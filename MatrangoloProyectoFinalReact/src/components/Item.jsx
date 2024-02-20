import { Link } from 'react-router-dom';

const Item = ({ id, name, img, price, stock }) => {
  return (
    <article className="card h-100">
      <header className="card-header text-center bg-success text-white">
        <h2 className="h5">{name}</h2>
      </header>
      <img src={img} alt={name} className="card-img-top" style={{ height: '200px', objectFit: 'contain' }} />
      <div className="card-body">
        <p className="text-muted">Precio: ${price}</p>
        <p className="text-muted">Stock disponible: {stock}</p>
      </div>
      <footer className="mt-auto card-footer text-center">
        <Link to={`/item/${id}`} className="btn btn-success">Ver detalle</Link>
      </footer>
    </article>
  );
}

export default Item;
