import xboxImagen from './assets/xbox.webp';
import NintendoImagen from './assets/nintendo.webp'
import PS5Imagen from './assets/ps5.webp';
const products = [
    {
      id: '1',
      name: 'Nintendo Switch',
      price: 1000,
      category: 'Nintendo',
      img: NintendoImagen,
      stock: 27,
      description: 'Nintendo Switch OLED 64GB Standard color rojo neón, azul neón y negro'
    },
    {
        id: '2',
        name: 'Xbox Series S',
        price: 2000,
        category: 'Xbox',
        img: xboxImagen ,
        stock: 12,
        description: 'Consola Xbox Series S 512gb Digital Blanco'
      },
      {
        id: '3',
        name: 'Playstation 5',
        price: 3000,
        category: 'Playstation',
        img: PS5Imagen,
        stock: 20,
        description: 'Consola Playstation 5 Ps5 Edición Estándar + Joystick Ps5'
      },
  ];
  export const getProducts = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products)
      }, 500)
    })
  }
  export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find((prod) => prod.id === productId));
        }, 500);
    });
}

export const getProductByCategory = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter((prod) => prod.category === categoryId));
    }, 500);
  });
};

export default getProductById;