import Item from './Item';

const ItemList = ({ products }) => {
  return (
    <div className="container py-5">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
        {products.map(prod => (
          <div className="col" key={prod.id}>
            <Item {...prod} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemList;
